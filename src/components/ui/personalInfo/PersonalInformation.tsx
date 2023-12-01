import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UpdatePersonalInfoFields } from '@/features/personal-page/types'
import { updatePersonalInfoSchema } from '@/schemes/updatePersonalInfoSchema.ts'
import { GetMeQueryResponseData } from '@/services/auth-service'
import { ControlledInput } from '@/components/ui/controlled/controlledInput'
import { Icon } from '@/components/ui/icon'
import userIcon from '@/assets/icons/unknown.svg'
import { SignOutIcon } from '@/assets/icons/components/SignOutIcon.tsx'
import { EditIcon } from '@/assets/icons/components/EditIcon.tsx'
import { CancelIcon } from '@/assets/icons/components/CancelIcon.tsx'
import { ControlledFileInput } from '@/components/ui/controlled/controlledFileInput'
import { PersonalInfoSkeleton } from '@/components/ui/personalInfoSkeleton'
import { useI18N } from '@/hooks'
import s from './PersonalInfo.module.scss'

type Props = {
  logOutFn?: () => void
  onSubmit?: (data: UpdatePersonalInfoFields) => void
  userData: GetMeQueryResponseData
  isLoading?: boolean
}

export const PersonalInformation = ({ onSubmit, userData, logOutFn, isLoading }: Props) => {
  const [editInfo, setEditInfo] = useState<boolean>(false)
  const [editAvatar, setEditAvatar] = useState<boolean>(false)
  const { t } = useI18N()

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdatePersonalInfoFields>({
    resolver: zodResolver(updatePersonalInfoSchema),
    mode: 'onSubmit',
    defaultValues: { email: userData.email, name: userData.name },
  })

  const onSubmitHandler = handleSubmit(data => {
    onSubmit?.(data)
    setEditInfo(false)
    setEditAvatar(false)
  })

  const cancelHandler = (field: string) => {
    if (field === 'name') {
      setEditInfo(false)
      reset({ name: userData.name, email: userData.email })
    }
    if (field === 'avatar') {
      setEditAvatar(false)
    }
  }

  return (
    <Card className={s.container} aria-label={'profile information'}>
      <Typography className={s.title} variant={'h1'}>
        {t('personalInfo')}
      </Typography>
      {!isLoading ? (
        <form onSubmit={onSubmitHandler} className={s.form}>
          {editAvatar ? (
            <div className={s.editAvatarWrapper}>
              <ControlledFileInput
                className={s.fileInput}
                control={control}
                name={'avatar'}
                id={'avatar'}
                buttonText={t('newAvatar')}
              />
              <CancelIcon
                className={`${s.cancelIcon} ${s.avatarCancelIcon}`}
                onClick={() => cancelHandler('avatar')}
              />
            </div>
          ) : (
            <div className={s.avatarWrapper}>
              <Icon className={s.avatar} srcIcon={userData.avatar || userIcon} alt={'avatar'} />
              <Button
                variant={'secondary'}
                className={s.avatarEditButton}
                onClick={() => setEditAvatar(true)}
              >
                <EditIcon width={16} />
              </Button>
            </div>
          )}

          {editInfo ? (
            <div className={s.editInfoWrapper}>
              <div className={s.inputAndCancel}>
                <ControlledInput
                  control={control}
                  name={'name'}
                  errorMessage={errors.name?.message}
                  label={t('nickName')}
                  autoFocus
                />
                <CancelIcon className={s.cancelIcon} onClick={() => cancelHandler('name')} />
              </div>
              <ControlledInput
                control={control}
                name={'email'}
                errorMessage={errors.email?.message}
                label={t('email')}
              />
            </div>
          ) : (
            <div className={s.infoWrapper}>
              <Typography className={s.userName} variant={'h1'}>
                {userData.name}
                <EditIcon width={18} className={s.editIcon} onClick={() => setEditInfo(true)} />
              </Typography>
              <Typography className={s.email} variant={'body2'}>
                {userData.email}
              </Typography>
            </div>
          )}

          {(editInfo || editAvatar) && (
            <Button
              type={'submit'}
              className={s.submitButton}
              aria-label={'save changes'}
              variant={'primary'}
              fullWidth={true}
            >
              <Typography variant={'subtitle2'}>{t('saveChanges')}</Typography>
            </Button>
          )}
        </form>
      ) : (
        <PersonalInfoSkeleton />
      )}

      {!editInfo && !editAvatar && (
        <Button
          type={'button'}
          aria-label={'logout'}
          className={s.button}
          variant={'secondary'}
          fullWidth={true}
          onClick={() => logOutFn?.()}
        >
          <SignOutIcon />
          <Typography variant={'subtitle2'}>{t('logOut')}</Typography>
        </Button>
      )}
    </Card>
  )
}
