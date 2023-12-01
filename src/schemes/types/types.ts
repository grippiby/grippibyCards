import { z } from 'zod'
import {
  createAccountSchema,
  createNewPasswordSchema,
  forgotPasswordSchema,
  logInSchema,
  saveGradeSchema,
} from '@/schemes'

export type ForgotPasswordFields = z.infer<typeof forgotPasswordSchema>

export type CreateNewPasswordFields = z.infer<typeof createNewPasswordSchema>

export type LogInFields = z.infer<typeof logInSchema>

export type CreateAccountFields = { confirm?: string } & z.infer<typeof createAccountSchema>

export type GradeField = z.infer<typeof saveGradeSchema>
