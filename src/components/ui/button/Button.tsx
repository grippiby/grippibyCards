import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'
import s from './Button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  as?: T
  className?: string
} & ComponentPropsWithoutRef<T>

const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: ElementRef<T>
) => {
  const { variant = 'primary', fullWidth, className, as: Component = 'button', ...rest } = props

  return (
    // @ts-expect-error TS2322 ts is not able to process it
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      ref={ref}
      {...rest}
    />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> & { ref?: ForwardedRef<ElementRef<T>> }
) => ReturnType<typeof ButtonPolymorph>
