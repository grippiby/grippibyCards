import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components/ui/slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    max: {
      description: 'The maximum value for the range.',
    },
    min: {
      description: 'The minimum value for the range.',
    },
    defaultValue: {
      description:
        'Current location of the thumbs. If you wanna see the one thumb you should pass single value in array.',
    },
    step: {
      description: 'The stepping interval.',
    },
    minStepsBetweenThumbs: {
      description: 'The minimum step between two thumbs.',
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderWithControl: Story = {
  args: {
    min: 0,
    max: 15,
    defaultValue: [2, 10],
    step: 1,
    minStepsBetweenThumbs: 1,
    disabled: false,
  },
}

export const SliderWithAdaptiveInfoValues: Story = {
  render: () => <Slider1 />,
}

const Slider1 = () => {
  const [values, setValues] = useState<number[]>([2, 10])

  let minRange = 0
  let maxRange = 15

  return <Slider min={minRange} max={maxRange} value={values} onValueChange={setValues} />
}
