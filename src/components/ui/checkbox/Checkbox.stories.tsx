import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '@/components/ui/checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const EnabledCheckbox: Story = {
  render: () => <CheckboxWithHook />,
}

export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
    label: 'Check-box',
    checked: true,
  },
}

const CheckboxWithHook = () => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false)

  return <Checkbox label={'Check-box'} checked={checked} onCheckedChange={setChecked} />
}
