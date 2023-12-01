import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Label } from '@radix-ui/react-label'
import * as Radio from '@radix-ui/react-radio-group'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'
import { RadioGroupOptions } from '@/features/card-learn/types'
import s from './RadioGroup.module.scss'

export type RadioGroupProps = {
  options: RadioGroupOptions[]
} & ComponentPropsWithoutRef<typeof Radio.Root>

export const RadioGroup = forwardRef<ElementRef<typeof Radio.Root>, RadioGroupProps>(
  (props, ref) => {
    const { disabled, className, options, ...rest } = props

    const finalClassName = clsx(s.root, className)

    return (
      <Radio.Root ref={ref} className={finalClassName} disabled={disabled} {...rest}>
        {options.map((item, index) => (
          <Label key={index} className={s.label}>
            <Typography variant={'body2'} className={!disabled ? s.textColor : s.disabledTextColor}>
              {item.label}
            </Typography>
            <div className={s.radioItemWrapper}>
              <Radio.Item value={item.value} className={s.item}>
                <Radio.Indicator className={s.indicator} />
              </Radio.Item>
            </div>
          </Label>
        ))}
      </Radio.Root>
    )
  }
)
