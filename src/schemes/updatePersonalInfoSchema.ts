import { z } from 'zod'

export const updatePersonalInfoSchema = z.object({
  email: z.string().email(),
  avatar: z.instanceof(File).optional(),
  name: z.string().min(3),
})
