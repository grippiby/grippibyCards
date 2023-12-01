import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<'col'>
export const Column = forwardRef<HTMLTableColElement, Props>((props, ref) => {
  const { ...rest } = props

  return <col ref={ref} {...rest} />
})
