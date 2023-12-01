import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import { Typography } from '@/components/ui/typography'
import s from './TableCell.module.scss'

type Props = ComponentPropsWithoutRef<'td'>
export const TableCell = forwardRef<HTMLTableCellElement, Props>((props, ref) => {
  const { children, className, ...rest } = props

  const cellClassName = clsx(s.cell, className)

  return (
    <td className={cellClassName} ref={ref} {...rest}>
      <Typography variant={'body2'}>{children}</Typography>
    </td>
  )
})
