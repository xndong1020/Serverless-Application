import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { UpdateTodoRequest } from '../../requests/UpdateTodoRequest'

import { updateTodo } from '../../businessLogic/Todo'

import { parseToken } from '../../auth/utils'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
    const token = parseToken(event.headers.Authorization)
    const updatedTodo: UpdateTodoRequest = JSON.parse(event.body)

    const { name, dueDate, done } = updatedTodo

    if (
      !name ||
      !name.trim() ||
      !dueDate ||
      !dueDate.trim() ||
      typeof done !== 'boolean'
    )
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request format' })
      }

    // TODO: Update a TODO item with the provided id using values in the "updatedTodo" object
    await updateTodo(updatedTodo, todoId, token)

    return {
      statusCode: 204,
      body: undefined
    }
  }
)

handler.use(cors())
