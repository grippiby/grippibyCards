import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react'
import { clsx } from 'clsx'
import s from './Typography.module.scss'

type TypographyElements = keyof typeof ELEMENTS

type Props<T extends ElementType> = {
  htmlTag?: T
  variant?: TypographyElements
  children?: ReactNode
  className?: string
} & ComponentPropsWithoutRef<T>

const ELEMENTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'span',
  subtitle2: 'span',
  body1: 'span',
  body2: 'span',
  caption: 'span',
  link1: 'a',
  link2: 'a',
  overline: 'span',
  large: 'p',
} as const

const TypographyPolymorph = <T extends ElementType = 'span'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>,
  ref: ElementRef<T>
) => {
  const { variant = 'body1', className, children, onClick, htmlTag, ...rest } = props

  const finalClassName = clsx(s.element, className)

  const Element = htmlTag !== undefined ? htmlTag : ELEMENTS[variant]

  return (
    <Element ref={ref} onClick={onClick} className={finalClassName} data-state={variant} {...rest}>
      {children}
    </Element>
  )
}

export const Typography = forwardRef(TypographyPolymorph) as <T extends ElementType = 'button'>(
  props: Props<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & { ref?: ForwardedRef<ElementRef<T>> }
) => ReturnType<typeof TypographyPolymorph>
