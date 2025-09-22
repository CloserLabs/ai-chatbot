'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useArtifactSelector } from '@/hooks/use-artifact'
import { useAutoResume } from '@/hooks/use-auto-resume'
import { useChatVisibility } from '@/hooks/use-chat-visibility'
import type { Vote } from '@/lib/db/schema'
import type { Attachment, ChatMessage } from '@/lib/types'
import type { AppUsage } from '@/lib/usage'
import { fetcher, generateUUID } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { Artifact } from './artifact'
import { useDataStream } from './data-stream-provider'
import { Messages } from './messages'
import { MultimodalInput } from './multimodal-input'
import { toast } from './toast'
import type { VisibilityType } from './visibility-selector'

export function Chat({
  id,
  initialMessages,
  initialChatModel,
  initialVisibilityType,
  autoResume,
  initialLastContext,
}: {
  id: string
  initialMessages: ChatMessage[]
  initialChatModel: string
  initialVisibilityType: VisibilityType
  autoResume: boolean
  initialLastContext?: AppUsage
}) {
  const { visibilityType } = useChatVisibility({
    chatId: id,
    initialVisibilityType,
  })

  const { mutate } = useSWRConfig()
  const { setDataStream } = useDataStream()

  const [input, setInput] = useState<string>('')
  const [usage, setUsage] = useState<AppUsage | undefined>(initialLastContext)
  const [showCreditCardAlert, setShowCreditCardAlert] = useState(false)
  const [currentModelId, setCurrentModelId] = useState(initialChatModel)
  const currentModelIdRef = useRef(currentModelId)

  useEffect(() => {
    currentModelIdRef.current = currentModelId
  }, [currentModelId])

  // Manual chat implementation
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [isLoading, setIsLoading] = useState(false)
  const status = isLoading ? 'streaming' : 'ready'

  const sendMessage = async (message?: any) => {
    if (isLoading || !message) return

    // Add ID if missing
    const fullMessage = {
      ...message,
      id: message.id || generateUUID(),
    }

    setIsLoading(true)
    setMessages((prev) => [...prev, fullMessage])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          message: fullMessage,
          selectedChatModel: currentModelIdRef.current,
          selectedVisibilityType: visibilityType,
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const assistantMessage = await response.json()
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      toast({
        type: 'error',
        description: 'Failed to send message',
      })
    } finally {
      setIsLoading(false)
    }
  }

  // Dummy functions for compatibility
  const stop = async () => {}
  const regenerate = async () => {}
  const resumeStream = async () => {}

  const searchParams = useSearchParams()
  const query = searchParams.get('query')

  const [hasAppendedQuery, setHasAppendedQuery] = useState(false)

  useEffect(() => {
    if (query && !hasAppendedQuery) {
      sendMessage({
        role: 'user' as const,
        parts: [{ type: 'text', text: query }],
      })

      setHasAppendedQuery(true)
      window.history.replaceState({}, '', `/chat/${id}`)
    }
  }, [query, sendMessage, hasAppendedQuery, id])

  const { data: votes } = useSWR<Array<Vote>>(
    messages.length >= 2 ? `/api/vote?chatId=${id}` : null,
    fetcher,
  )

  const [attachments, setAttachments] = useState<Array<Attachment>>([])
  const isArtifactVisible = useArtifactSelector((state) => state.isVisible)

  useAutoResume({
    autoResume,
    initialMessages,
    resumeStream,
    setMessages,
  })

  return (
    <>
      <div className="overscroll-behavior-contain flex h-dvh min-w-0 touch-pan-y flex-col bg-background">
        <Messages
          chatId={id}
          status={status}
          votes={votes}
          messages={messages}
          setMessages={setMessages}
          regenerate={regenerate}
          isArtifactVisible={isArtifactVisible}
          selectedModelId={initialChatModel}
        />

        <div className="sticky bottom-0 z-1 mx-auto flex w-full max-w-4xl gap-2 border-t-0 bg-background px-2 pb-3 md:px-4 md:pb-4">
          <MultimodalInput
            chatId={id}
            input={input}
            setInput={setInput}
            status={status}
            stop={stop}
            attachments={attachments}
            setAttachments={setAttachments}
            messages={messages}
            setMessages={setMessages}
            sendMessage={sendMessage}
            selectedVisibilityType={visibilityType}
            selectedModelId={currentModelId}
            onModelChange={setCurrentModelId}
            usage={usage}
          />
        </div>
      </div>

      <Artifact
        chatId={id}
        input={input}
        setInput={setInput}
        status={status}
        stop={stop}
        attachments={attachments}
        setAttachments={setAttachments}
        sendMessage={sendMessage}
        messages={messages}
        setMessages={setMessages}
        regenerate={regenerate}
        votes={votes}
        selectedVisibilityType={visibilityType}
        selectedModelId={currentModelId}
      />

      <AlertDialog
        open={showCreditCardAlert}
        onOpenChange={setShowCreditCardAlert}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Activate AI Gateway</AlertDialogTitle>
            <AlertDialogDescription>
              This application requires{' '}
              {process.env.NODE_ENV === 'production' ? 'the owner' : 'you'} to
              activate Vercel AI Gateway.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                window.open(
                  'https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%3Fmodal%3Dadd-credit-card',
                  '_blank',
                )
                window.location.href = '/'
              }}
            >
              Activate
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
