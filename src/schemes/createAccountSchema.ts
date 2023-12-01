import { z } from 'zod'

export const createAccountSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8)
      .regex(/[a-zA-Z]/)
      .regex(/[0-9]/)
      .regex(/[^a-zA-Z0-9]/),
    confirmPassword: z.string().min(8).optional(),
    name: z.string().min(3),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirm'],
    params: { i18n: 'confirm_password' },
  })
