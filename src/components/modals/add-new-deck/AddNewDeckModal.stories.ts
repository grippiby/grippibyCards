import type { Meta, StoryObj } from '@storybook/react'
import { AddNewDeckModal } from './AddNewDeckModal.tsx'
import { DeckModals } from '@/features/deck-pack/types'

const meta = {
  title: 'Modals/AddNewDeck',
  component: AddNewDeckModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      description: 'Send form fields data',
    },
  },
} satisfies Meta<typeof AddNewDeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewDeck: Story = {
  args: {
    openModal: DeckModals.CREATE,
  },
}
