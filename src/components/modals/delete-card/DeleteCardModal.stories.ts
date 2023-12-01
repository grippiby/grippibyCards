import type { Meta, StoryObj } from '@storybook/react'
import { CardsModals } from '@/features/cards-pack/types'
import { DeleteCardModal } from '@/components/modals/delete-card'

const meta = {
  title: 'Modals/DeleteCard',
  component: DeleteCardModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DeleteCardModal>

export default meta
type Story = StoryObj<typeof meta>

export const DeleteCard: Story = {
  args: {
    openModal: CardsModals.DELETE,
    cardName: 'Some card',
  },
}
