import { z } from 'zod'

export const addNewCardSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
  answerImg: z.any().optional(),
  questionImg: z.any().optional(),
  questionVideo: z.any().optional(),
  answerVideo: z.any().optional(),
})
