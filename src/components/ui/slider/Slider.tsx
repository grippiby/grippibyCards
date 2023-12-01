import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as SliderRadix from '@radix-ui/react-slider'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'
import s from './Slider.module.scss'

type Props = {
  label?: string
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Root>, Props>((props, ref) => {
  const { min = 0, max = 100, value, className, label, ...rest } = props

  const finalClassName = clsx(s.root, className)

  return (
    <div className={s.sliderWrapper}>
      <Typography className={s.label} variant={'body2'}>
        {label}
      </Typography>
      <div className={s.slider}>
        <div className={s.rectangle}>
          <Typography variant={'body1'} className={s.textColor}>
            {value && value[0]}
          </Typography>
        </div>
        <SliderRadix.Root
          minStepsBetweenThumbs={1}
          ref={ref}
          max={max}
          min={min}
          className={finalClassName}
          value={value}
          {...rest}
        >
          <SliderRadix.Track className={s.track}>
            <SliderRadix.Range className={s.range} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={s.thumb} />
          <SliderRadix.Thumb className={s.thumb} />
        </SliderRadix.Root>
        <div className={s.rectangle}>
          <Typography variant={'body1'} className={s.textColor}>
            {value && value[1]}
          </Typography>
        </div>
      </div>
    </div>
  )
})
