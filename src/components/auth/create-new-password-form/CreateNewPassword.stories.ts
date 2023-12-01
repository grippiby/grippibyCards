import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPasswordForm } from '@/components/auth/create-new-password-form'

const meta = {
  title: 'Auth/CreateNewPasswordForm',
  component: CreateNewPasswordForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onSubmit: {
      description: 'Send form fields data',
    },
  },
} satisfies Meta<typeof CreateNewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewPassword: Story = {}
