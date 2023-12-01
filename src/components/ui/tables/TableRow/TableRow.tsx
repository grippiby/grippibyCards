import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<'tr'>
export const TableRow = forwardRef<HTMLTableRowElement, Props>((props, ref) => {
  const { children, ...rest } = props

  return (
    <tr ref={ref} {...rest}>
      {children}
    </tr>
  )
})
