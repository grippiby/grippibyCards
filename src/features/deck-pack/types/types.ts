import { z } from 'zod'
import { newDeckNameSchema } from '@/schemes'

export enum DeckModals {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

export type Column = {
  key: string
  title: string
}

export type NewDeckFields = z.infer<typeof newDeckNameSchema>
