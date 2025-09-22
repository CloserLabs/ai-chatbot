'use client'

import { useRouter } from 'next/navigation'
import { useWindowSize } from 'usehooks-ts'

import { SidebarToggle } from '@/components/sidebar-toggle'
import { Button } from '@/components/ui/button'
import { memo } from 'react'
import { PlusIcon } from './icons'
import { useSidebar } from './ui/sidebar'
import { type VisibilityType, VisibilitySelector } from './visibility-selector'

function PureChatHeader({
  chatId,
  selectedVisibilityType,
}: {
  chatId: string
  selectedVisibilityType: VisibilityType
}) {
  const router = useRouter()
  const { open } = useSidebar()

  const { width: windowWidth } = useWindowSize()

  return (
    <header className="sticky top-0 flex items-center gap-2 bg-background px-2 py-1.5 md:px-2">
      <SidebarToggle />

      {(!open || windowWidth < 768) && (
        <Button
          variant="outline"
          className="order-2 ml-auto h-8 px-2 md:order-1 md:ml-0 md:h-fit md:px-2"
          onClick={() => {
            router.push('/')
            router.refresh()
          }}
        >
          <PlusIcon />
          <span className="md:sr-only">New Chat</span>
        </Button>
      )}

      <VisibilitySelector
        chatId={chatId}
        selectedVisibilityType={selectedVisibilityType}
        className="order-1 md:order-2"
      />
    </header>
  )
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return (
    prevProps.chatId === nextProps.chatId &&
    prevProps.selectedVisibilityType === nextProps.selectedVisibilityType
  )
})
