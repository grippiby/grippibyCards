import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/Card.tsx'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/LearnCard',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      description: 'Other components to display inside the card',
    },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const CardWithContent: Story = {
  render: () => <Card1 />,
}

const Card1 = () => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(false)
  const options = [
    { label: 'First', value: 'first' },
    { label: 'Second', value: 'second' },
    { label: 'Third', value: 'third' },
    { label: 'Fourth', value: 'fourth' },
    { label: 'Fifth', value: 'fifth' },
    { label: 'None', value: 'none' },
  ]

  return (
    <Card
      style={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant={'h1'} color={'light'}>
        Unknown title
      </Typography>
      <Checkbox label={'Check-box'} checked={checked} onCheckedChange={setChecked} />
      <Button>Just button</Button>
      <RadioGroup options={options} />
    </Card>
  )
}
