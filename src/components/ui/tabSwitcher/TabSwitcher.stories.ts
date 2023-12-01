import { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher } from '@/components/ui/tabSwitcher'

const tabs = [
  {
    id: '01',
    title: 'tab 01',
    disabledTab: false,
    defaultTab: true,
  },
  {
    id: '02',
    title: 'tab 02',
    disabledTab: false,
    defaultTab: false,
  },
  {
    id: '03',
    title: 'tab 03',
    disabledTab: false,
    defaultTab: false,
  },
  {
    id: '04',
    title: 'tab 04',
    disabledTab: false,
    defaultTab: false,
  },
  {
    id: '05',
    title: 'tab 05',
    disabledTab: true,
    defaultTab: false,
  },
]

const meta = {
  title: 'Components/TabSwitcher',
  component: TabSwitcher,
  argTypes: {
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
    tabs: tabs,
  },
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    tabs: tabs,
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    tabs: tabs,
  },
}
