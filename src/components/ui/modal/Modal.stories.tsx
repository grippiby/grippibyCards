import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Modal } from './'
import { Button } from '@/components/ui/button'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    open: {
      description: 'Value for show or not modal',
    },
    onOpenChange: {
      description: 'Function for open and close modal',
    },
    children: {
      description: 'Other components to display inside the card',
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => <PreviewModal />,
}

const PreviewModal = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const openModal = () => setIsShow(true)
  const onOpenChange = (open: boolean) => {
    setIsShow(open)
  }

  return (
    <div>
      <Button onClick={openModal}>Click me</Button>
      <Modal open={isShow} onOpenChange={onOpenChange} closeCallBack={() => {}}>
        Hello world
      </Modal>
    </div>
  )
}
