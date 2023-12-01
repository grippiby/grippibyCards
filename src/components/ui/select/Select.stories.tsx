import type { Meta, StoryObj } from '@storybook/react'

import { Selector } from '@/components/ui/select/Select.tsx'

const meta = {
  title: 'Components/Selector',
  component: Selector,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Selector>

export default meta
type Story = StoryObj<typeof meta>

export const DisabledSelect: Story = {
  args: {
    disable: true,
    label: 'Select',
  },
}
export const SelectWithData = () => {
  let data = ['lol', 'kek']

  return (
    <div style={{ width: '1000px' }}>
      <Selector label={'Select'} selectData={data} setSelectedValue={() => {}} />
    </div>
  )
}
