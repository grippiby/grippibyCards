import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<'tbody'>
export const TableBody = forwardRef<HTMLTableSectionElement, Props>((props, ref) => {
  const { children, ...rest } = props

  return (
    <tbody ref={ref} {...rest}>
      {children}
    </tbody>
  )
})
