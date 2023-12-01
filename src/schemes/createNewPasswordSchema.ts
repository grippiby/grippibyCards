import { z } from 'zod'

export const createNewPasswordSchema = z.object({
  password: z.string().min(8),
})
