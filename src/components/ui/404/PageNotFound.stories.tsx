import type { Meta, StoryObj } from '@storybook/react'
import { PageNotFound } from '@/components/ui/404'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Components/Page404',
  component: PageNotFound,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PageNotFound>

export default meta
type Story = StoryObj<typeof meta>

export const PageNotFound404: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    )
  },
}
