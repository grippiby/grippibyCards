import { CreateNewPasswordForm } from '@/components/auth/create-new-password-form'
import { useResetPasswordMutation } from '@/services/auth-service'
import { Navigate, useParams } from 'react-router-dom'
import { CreateNewPasswordFields } from '@/schemes/types'
import { Icon } from '@/components/ui/icon'
import gearIcon from '@/assets/icons/gear_preloader.svg'
import s1 from '@/features/personal-page/PersonalPage.module.scss'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/services/store.ts'
import { setAuthSuccessMessage } from '@/services/auth-service/auth-slice.ts'

export const ResetPassword = () => {
  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation()

  const dispatch = useDispatch<AppDispatch>()

  const { token } = useParams()

  const requestHandler = (data: CreateNewPasswordFields) => {
    if (!token) return
    resetPassword({ token, password: data.password })
  }

  if (isLoading) {
    return <Icon className={s1.preloader} srcIcon={gearIcon} />
  }

  if (isSuccess) {
    dispatch(setAuthSuccessMessage('Password was changed successfully'))

    return <Navigate to={'/login'} />
  }

  return <CreateNewPasswordForm onSubmit={requestHandler} />
}
