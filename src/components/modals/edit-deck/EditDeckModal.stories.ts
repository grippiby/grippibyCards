import type { Meta, StoryObj } from '@storybook/react'
import { EditDeckModal } from '@/components/modals/edit-deck'
import { DeckModals } from '@/features/deck-pack/types'

const meta = {
  title: 'Modals/EditDeck',
  component: EditDeckModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      description: 'Send form fields data',
    },
  },
} satisfies Meta<typeof EditDeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const EditDeck: Story = {
  args: {
    openModal: DeckModals.UPDATE,
    activeItem: undefined,
  },
}
