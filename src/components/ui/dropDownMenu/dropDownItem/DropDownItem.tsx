import { ComponentPropsWithoutRef } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import { Typography } from '@/components/ui/typography'
import s from './DropDownItem.module.scss'

export type Props = ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropDownItem = (props: Props) => {
  const { className, children, ...rest } = props

  const itemClassName = clsx(s.dropDownItem, className)

  return (
    <DropdownMenu.Item asChild className={itemClassName} {...rest}>
      <Typography variant={'caption'}>{children}</Typography>
    </DropdownMenu.Item>
  )
}
