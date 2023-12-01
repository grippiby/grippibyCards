import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import { Typography } from '@/components/ui/typography'
import s from './TableHeadCell.module.scss'

type Props = ComponentPropsWithoutRef<'th'>

export const TableHeadCell = forwardRef<HTMLTableCellElement, Props>((props, ref) => {
  const { children, className, ...rest } = props

  const headerCellClassName = clsx(s.headerCell, className)

  return (
    <th ref={ref} className={headerCellClassName} {...rest}>
      <Typography variant={'subtitle2'}>{children}</Typography>
    </th>
  )
})
