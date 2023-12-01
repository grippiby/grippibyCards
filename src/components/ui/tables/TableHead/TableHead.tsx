import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<'thead'>

export const TableHead = forwardRef<HTMLTableSectionElement, Props>((props, ref) => {
  const { children, ...rest } = props

  return (
    <thead ref={ref} {...rest}>
      {children}
    </thead>
  )
})
