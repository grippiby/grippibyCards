import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { DropDownMenu } from './'
import { Icon } from '@/components/ui/icon'
import dots from '@/assets/icons/dots.svg'
import s from '@/features/cards-pack/CardsPack.module.scss'

const meta = {
  title: 'Components/DropDownMenu',
  component: DropDownMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: () => <PreviewDropDown />,
}

const PreviewDropDown = () => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const onOpenChange = (open: boolean) => {
    setIsShow(open)
  }

  const dropDownTrigger = <Icon srcIcon={dots} className={s.triggerIcon} />

  return (
    <DropDownMenu trigger={dropDownTrigger} open={isShow} onOpenChange={onOpenChange}>
      <div>Play</div>
      <div>Edit</div>
      <div>Delete</div>
    </DropDownMenu>
  )
}
