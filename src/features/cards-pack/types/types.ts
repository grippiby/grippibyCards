import { z } from 'zod'
import { addNewCardSchema } from '@/schemes'

export enum CardsModals {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

export type NewCardFields = z.infer<typeof addNewCardSchema>

export type SelectOptions = string[]
