import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from '@/components/auth/forgot-pasword-form'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Auth/ForgotPasswordForm',
  component: ForgotPasswordForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      description: 'Send form fields data',
    },
  },
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const ForgotPassword: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <ForgotPasswordForm />
      </BrowserRouter>
    )
  },
}
