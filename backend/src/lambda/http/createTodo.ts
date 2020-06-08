import 'source-map-support/register'
import * as middy from 'middy'
import { cors } from 'middy/middlewares'

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
import { createTodo } from '../../businessLogic/Todo'

import { parseToken } from '../../auth/utils'

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const newTodo: CreateTodoRequest = JSON.parse(event.body)

    const { name, dueDate } = newTodo

    if (!name || !dueDate || !name.trim() || !dueDate.trim())
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Invalid request format' })
      }

    const token = parseToken(event.headers.Authorization)

    // TODO: Implement creating a new TODO item
    const todoItem = await createTodo(newTodo, token)

    return {
      statusCode: 201,
      body: JSON.stringify({ item: todoItem })
    }
  }
)

handler.use(cors())
