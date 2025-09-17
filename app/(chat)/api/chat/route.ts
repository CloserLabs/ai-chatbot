import {
  deleteChatById,
  getChatById,
  getMessagesByChatId,
  saveChat,
  saveMessages,
} from '@/lib/db/queries';
import { convertToUIMessages, generateUUID } from '@/lib/utils';
import { generateTitleFromUserMessage } from '../../actions';
import { ChatSDKError } from '@/lib/errors';
import type { ChatMessage } from '@/lib/types';
import type { ChatModel } from '@/lib/ai/models';
import type { VisibilityType } from '@/components/visibility-selector';
import { postRequestBodySchema, type PostRequestBody } from './schema';

export const maxDuration = 60;

const AWS_ENDPOINT = 'https://hx3yxzfe18.execute-api.us-east-1.amazonaws.com/prod/sllm-class101';

export async function POST(request: Request) {
  let requestBody: PostRequestBody;

  try {
    const json = await request.json();
    requestBody = postRequestBodySchema.parse(json);
  } catch (_) {
    return new ChatSDKError('bad_request:api').toResponse();
  }

  try {
    const {
      id,
      message,
      selectedChatModel,
      selectedVisibilityType,
    }: {
      id: string;
      message: ChatMessage;
      selectedChatModel: ChatModel['id'];
      selectedVisibilityType: VisibilityType;
    } = requestBody;

    // Generate a unique ID for anonymous users
    const userId = generateUUID();

    // Get the last user message
    const lastUserMessage = message.parts
      .filter(part => part.type === 'text')
      .map(part => part.text)
      .join(' ');

    const chat = await getChatById({ id });

    if (!chat) {
      // Skip saving chat - no database setup
      console.log('Skipping chat save - no user in database');
    }

    const messagesFromDb = await getMessagesByChatId({ id });
    const uiMessages = [...convertToUIMessages(messagesFromDb), message];

    // Skip saving messages - no database setup
    console.log('Skipping message save - no database setup');

    // Call AWS endpoint
    const awsResponse = await fetch(AWS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: lastUserMessage,
      }),
    });

    if (!awsResponse.ok) {
      throw new Error(`AWS API error: ${awsResponse.status}`);
    }

    const awsData = await awsResponse.json();
    const assistantMessage = awsData.completion || awsData.response || awsData.message || 'No response from AI';

    // Skip saving assistant message - no database setup
    console.log('Skipping assistant message save - no database setup');

    // Return in AI SDK streaming format
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(`0:"${assistantMessage.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"\n`));
        controller.enqueue(encoder.encode(`d:{"finishReason":"stop"}\n`));
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  } catch (error) {
    if (error instanceof ChatSDKError) {
      return error.toResponse();
    }

    console.error('Unhandled error in chat API:', error);
    return new ChatSDKError('offline:chat').toResponse();
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return new ChatSDKError('bad_request:api').toResponse();
  }

  // Auth removed - allow all users to delete chats
  const deletedChat = await deleteChatById({ id });

  return Response.json(deletedChat, { status: 200 });
}
