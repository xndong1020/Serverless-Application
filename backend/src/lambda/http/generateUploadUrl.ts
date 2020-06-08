import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'
import * as uuid from 'uuid'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { generateUploadUrl } from '../../businessLogic/Attachment'
import { updateTodoAttachmentUrl } from '../../businessLogic/Todo'
import { parseToken } from '../../auth/utils'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
    const token = parseToken(event.headers.Authorization)
    const imageId = uuid.v4()

    // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
    try {
      const uploadUrl = await generateUploadUrl(todoId, imageId)
      await updateTodoAttachmentUrl(todoId, imageId, token)

      return {
        statusCode: 201,
        body: JSON.stringify({
          uploadUrl
        })
      }
    } catch (err) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: err.message })
      }
    }
  }
)
handler.use(cors())
