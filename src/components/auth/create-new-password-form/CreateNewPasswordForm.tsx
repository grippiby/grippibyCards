import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import eye from '@/assets/icons/eye.svg'
import crossedEye from '@/assets/icons/eye_crossed.svg'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledInput } from '@/components/ui/controlled/controlledInput'
import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { useI18N } from '@/hooks/useI18n.ts'
import { createNewPasswordSchema } from '@/schemes'
import { CreateNewPasswordFields } from '@/schemes/types'
import s from './CreateNewPassword.module.scss'

type Props = {
  onSubmit?: (values: CreateNewPasswordFields) => void
}

export const CreateNewPasswordForm = (props: Props) => {
  const { onSubmit } = props

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { t } = useI18N()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewPasswordFields>({
    resolver: zodResolver(createNewPasswordSchema),
    mode: 'onSubmit',
    defaultValues: { password: '' },
  })

  const onSubmitHandler = handleSubmit(data => {
    onSubmit?.(data)
  })

  const icon = showPassword ? <Icon srcIcon={crossedEye} /> : <Icon srcIcon={eye} />
  const inputType = showPassword ? 'text' : 'password'

  return (
    <Card
      className={s.newPasswordCard}
      aria-label={
        'form that helps you create a new password that will be sent into your email address'
      }
    >
      <form className={s.form} onSubmit={onSubmitHandler}>
        <Typography className={s.title} variant={'large'}>
          {t('createNewPassword')}
        </Typography>
        <ControlledInput
          aria-label={'enter new password'}
          type={inputType}
          placeholder={t('placeholderPassword')}
          control={control}
          name={'password'}
          label={t('password')}
          errorMessage={errors.password?.message}
          rightSideIcon={icon}
          callBack={setShowPassword}
          callBackValue={showPassword}
        />
        <Typography className={s.subtitle} variant={'body2'}>
          {t('createNewPasswordInstructions')}
        </Typography>
        <Button
          type={'submit'}
          variant={'primary'}
          fullWidth={true}
          aria-label={'submit password changing'}
        >
          <Typography variant={'subtitle2'}>{t('createNewPassword')}</Typography>
        </Button>
      </form>
    </Card>
  )
}
