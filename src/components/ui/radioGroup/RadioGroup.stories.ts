import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@/components/ui/radioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: 'First', value: 'first' },
  { label: 'Second', value: 'second' },
  { label: 'None', value: 'none' },
]

export const Radio: Story = {
  args: {
    options,
    disabled: false,
  },
}
