import type { Meta, StoryObj } from '@storybook/react'

import { AddNewCardModal } from './AddNewCardModal.tsx'
import { CardsModals } from '@/features/cards-pack/types'

const meta = {
  title: 'Modals/AddNewCard',
  component: AddNewCardModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      description: 'Send form fields data',
    },
  },
} satisfies Meta<typeof AddNewCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewCard: Story = {
  args: {
    openModal: CardsModals.CREATE,
    selectOptions: ['text', 'images'],
  },
}
