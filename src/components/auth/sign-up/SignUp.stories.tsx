import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from '@/components/auth/sign-up/SignUp.tsx'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Auth/SignUp',
  component: SignUp,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      description: 'Send form fields data',
    },
  },
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Register: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    )
  },
}
