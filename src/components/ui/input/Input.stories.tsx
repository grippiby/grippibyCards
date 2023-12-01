/* eslint-disable */
import { ChangeEvent, useState } from 'react'

import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const DisabledInput: Story = {
  args: {
    disabled: true,
    label: 'Input',
  },
}
export const DefaultInput = () => {
  const [inputValue, setInputValue] = useState<string>('')

  let onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    return setInputValue(e.currentTarget.value)
  }

  return <Input label={'Input'} value={inputValue} onChange={onChangeInputValueHandler} />
}

export const InputWithIcons = () => {
  let searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ffffff' }} />
  let rightSideIcon = <FontAwesomeIcon icon={faXmark} style={{ color: '#ffffff' }} />

  // <FontAwesomeIcon icon={faEye} /> right side input icon eye
  // <FontAwesomeIcon icon={faEyeSlash} />  right side input icon eye locked

  return <Input label={'Input'} leftSideIcon={searchIcon} rightSideIcon={rightSideIcon} />
}
export const inputWithError = () => {
  let error = 'Error fdffdf sds DSDDDdsdsdsdsds'
  let searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#ffffff' }} />

  return <Input errorMessage={error} label={'Input'} rightSideIcon={searchIcon} />
}
