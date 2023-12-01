import { ForgotPasswordForm } from '@/components/auth/forgot-pasword-form'
import { useRecoverPasswordMutation } from '@/services/auth-service'
import { Navigate, useSearchParams } from 'react-router-dom'
import { ForgotPasswordFields } from '@/schemes/types'
import { Icon } from '@/components/ui/icon'
import gearIcon from '@/assets/icons/gear_preloader.svg'
import s1 from '@/features/personal-page/PersonalPage.module.scss'

export const RecoverPassword = () => {
  const [recoverPassword, { isSuccess, isLoading }] = useRecoverPasswordMutation()

  let [searchParams, setSearchParams] = useSearchParams()

  const requestHandler = (data: ForgotPasswordFields) => {
    const html =
      '<h1>Hi, ##name##</h1><p>Click <a href="http://localhost:5173/reset-password/##token##">here</a> to recover your password</p>'

    recoverPassword({ email: data.email, html })
    setSearchParams({ email: data.email })
  }

  if (isLoading) {
    return <Icon className={s1.preloader} srcIcon={gearIcon} />
  }

  if (isSuccess) {
    return <Navigate to={'/check-email'} state={{ email: searchParams.get('email') }} />
  }

  return <ForgotPasswordForm onSubmit={requestHandler} />
}
