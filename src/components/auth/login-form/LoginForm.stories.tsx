import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm.tsx'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Auth/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      description: 'Send form fields data',
    },
  },
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    )
  },
}
