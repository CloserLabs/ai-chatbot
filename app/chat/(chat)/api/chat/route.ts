import type { VisibilityType } from "@/components/visibility-selector"
import type { ChatModel } from "@/lib/ai/models"
import { ChatSDKError } from "@/lib/errors"
import type { ChatMessage } from "@/lib/types"
import { generateUUID } from "@/lib/utils"
import { postRequestBodySchema, type PostRequestBody } from "./schema"

export const maxDuration = 60

const AWS_ENDPOINT =
  "https://hx3yxzfe18.execute-api.us-east-1.amazonaws.com/prod/sllm-class101"

export async function POST(request: Request) {
  let requestBody: PostRequestBody

  try {
    const json = await request.json()
    requestBody = postRequestBodySchema.parse(json)
  } catch (_) {
    return new ChatSDKError("bad_request:api").toResponse()
  }

  try {
    const {
      id,
      message,
      selectedChatModel,
      selectedVisibilityType,
    }: {
      id: string
      message: ChatMessage
      selectedChatModel: ChatModel["id"]
      selectedVisibilityType: VisibilityType
    } = requestBody

    // Generate a unique ID for anonymous users
    const userId = generateUUID()

    // Get the last user message
    const lastUserMessage = message.parts
      .filter((part) => part.type === "text")
      .map((part) => part.text)
      .join(" ")

    // Call AWS endpoint
    const awsResponse = await fetch(AWS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: lastUserMessage,
      }),
    })

    if (!awsResponse.ok) {
      throw new Error(`AWS API error: ${awsResponse.status}`)
    }

    const awsData = await awsResponse.json()
    const assistantMessage =
      awsData.completion ||
      awsData.response ||
      awsData.message ||
      "No response from AI"

    // Skip saving assistant message - no database setup
    console.log("Skipping assistant message save - no database setup")

    // Simple JSON response - forget streaming for now
    return Response.json({
      id: generateUUID(),
      role: "assistant",
      parts: [
        {
          type: "text",
          text: assistantMessage,
        },
      ],
      createdAt: new Date(),
    })
  } catch (error) {
    if (error instanceof ChatSDKError) {
      return error.toResponse()
    }

    console.error("Unhandled error in chat API:", error)
    return new ChatSDKError("offline:chat").toResponse()
  }
}
