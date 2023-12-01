import { ComponentPropsWithoutRef, ReactNode } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import s from './DropDownMenu.module.scss'

export type Props = {
  children?: ReactNode
  trigger?: ReactNode
  triggerButtonClassName?: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root> &
  ComponentPropsWithoutRef<typeof DropdownMenu.Content> &
  ComponentPropsWithoutRef<typeof DropdownMenu.Portal>

export const DropDownMenu = (props: Props) => {
  const {
    open,
    onOpenChange,
    container,
    children,
    trigger,
    triggerButtonClassName,
    className,
    ...rest
  } = props

  const contentClassName = clsx(s.dropDownContent, className)
  const buttonClassName = clsx(triggerButtonClassName, s.triggerButtonDefault)

  return (
    <DropdownMenu.Root open={open} onOpenChange={onOpenChange} {...rest}>
      <DropdownMenu.Trigger asChild>
        <button className={buttonClassName}>{trigger}</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal container={container}>
        <DropdownMenu.Content
          className={contentClassName}
          align={'end'}
          sideOffset={10}
          alignOffset={-10}
          {...rest}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
