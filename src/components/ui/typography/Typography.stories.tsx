import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'link1',
        'link2',
        'overline',
        'large',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const TypographyStyles: Story = {
  args: {
    children: 'Hello word!',
    variant: 'h1',
  },
}
