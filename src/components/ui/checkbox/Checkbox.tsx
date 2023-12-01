import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as Label from '@radix-ui/react-label'
import { CheckedIcon } from '@/components/ui/checkbox'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'
import s from './Checkbox.module.scss'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props, ref) => {
    const { checked, disabled, label, onChange, className, ...rest } = props

    const finalClassName = clsx(s.label, className)

    return (
      <Label.Root className={finalClassName}>
        <Typography variant={'body2'} className={!disabled ? s.textColor : s.disabledTextColor}>
          {label}
        </Typography>
        <div className={s.checkboxWrapper}>
          <CheckboxRadix.Root
            ref={ref}
            className={s.root}
            checked={checked}
            disabled={disabled}
            {...rest}
          >
            <CheckboxRadix.Indicator className={s.indicator}>
              {checked && <CheckedIcon />}
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
      </Label.Root>
    )
  }
)
