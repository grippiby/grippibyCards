import { z } from 'zod'
import { updatePersonalInfoSchema } from '@/schemes/updatePersonalInfoSchema.ts'

export type UpdatePersonalInfoFields = z.infer<typeof updatePersonalInfoSchema>
