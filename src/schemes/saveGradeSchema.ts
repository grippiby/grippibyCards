import { z } from 'zod'

export const saveGradeSchema = z.object({
  grade: z.string(),
})
