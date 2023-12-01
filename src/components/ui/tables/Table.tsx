import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import s from './Table.module.scss'

type Props = ComponentPropsWithoutRef<'table'>
export const Table = forwardRef<HTMLTableElement, Props>((props, ref) => {
  const { children, className, cellSpacing = '0', ...rest } = props

  const finalClassName = clsx(s.table, className)

  return (
    <table ref={ref} className={finalClassName} cellSpacing={cellSpacing} {...rest}>
      {children}
    </table>
  )
})
