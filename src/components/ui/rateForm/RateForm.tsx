import { ControlledRadioGroup } from '@/components/ui/controlled/controlledRadioGroup'
import { Typography } from '@/components/ui/typography'
import { LinearProgress } from '@mui/material'
import { Button } from '@/components/ui/button'
import { ComponentPropsWithoutRef } from 'react'
import { useForm } from 'react-hook-form'
import { GradeField } from '@/schemes/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useI18N } from '@/hooks'
import { saveGradeSchema } from '@/schemes'
import { RadioGroupOptions } from '@/features/card-learn/types'
import s from './RateForm.module.scss'

type Props = Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> & {
  onSubmit: (data: GradeField) => void
  isUpdating?: boolean
  options: RadioGroupOptions[]
}

export const RateForm = ({ onSubmit, isUpdating, options, ...rest }: Props) => {
  const { t } = useI18N()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<GradeField>({
    resolver: zodResolver(saveGradeSchema),
    mode: 'onSubmit',
  })
  const onSubmitHandler = handleSubmit(data => {
    onSubmit(data)
  })

  return (
    <form onSubmit={onSubmitHandler} {...rest}>
      <ControlledRadioGroup control={control} name={'grade'} options={options} />
      <div className={s.errorPlace}>
        {errors.grade?.message && (
          <Typography className={s.radioError} variant={'caption'}>
            {errors.grade.message}
          </Typography>
        )}
      </div>
      <div className={s.buttonWrapper}>
        {isUpdating && <LinearProgress color={'success'} />}
        <Button fullWidth>
          <Typography variant={'subtitle2'}>{t('nextQuestion')}</Typography>
        </Button>
      </div>
    </form>
  )
}
