import type { Meta, StoryObj } from '@storybook/react'
import { DeleteDeckModal } from '@/components/modals/delete-deck/DeleteDeckModal.tsx'
import { DeckModals } from '@/features/deck-pack/types'

const meta = {
  title: 'Modals/DeleteDeck',
  component: DeleteDeckModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DeleteDeckModal>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteDeck: Story = {
  args: {
    openModal: DeckModals.DELETE,
    deckName: 'Some Deck',
  },
}
