import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { clsx } from 'clsx'
import s from './Icon.module.scss'

type Props = { srcIcon: string } & Omit<ComponentPropsWithoutRef<'img'>, 'src'>
export const Icon = forwardRef<HTMLImageElement, Props>((props, ref) => {
  const { className, srcIcon, alt, ...rest } = props

  const iconClassName = clsx(s.icon, className)

  return <img ref={ref} src={srcIcon} className={iconClassName} alt={alt} {...rest} />
})
