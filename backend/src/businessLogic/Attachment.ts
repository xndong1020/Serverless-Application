import AttachmentRepository from '../dataLayer/AttachmentRepository'
import TodoRepository from '../dataLayer/TodoRepository'

const attachmentRepo = new AttachmentRepository()
const todoRepo = new TodoRepository()

export const generateUploadUrl = async (
  todoId: string,
  imageId: string
): Promise<string> => {
  const isTodoItemExists = await todoRepo.checkTodoItemExists(todoId)
  if (!isTodoItemExists) throw new Error('Invalid todoId')

  return attachmentRepo.generateUploadUrl(imageId)
}
