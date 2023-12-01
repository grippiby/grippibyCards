import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/features/header/Header.tsx'

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const AuthorisedUser: Story = {
  args: {
    isAuth: true,
  },
}
export const NotAuthorisedUser: Story = {
  args: {
    isAuth: false,
  },
}
