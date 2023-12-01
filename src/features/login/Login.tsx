import { LoginForm } from '@/components/auth/login-form'
import { useLogInMutation, useMeQuery } from '@/services/auth-service'
import { Navigate } from 'react-router-dom'
import { Icon } from '@/components/ui/icon'
import gearIcon from '@/assets/icons/gear_preloader.svg'
import { useAppSelector } from '@/services/store.ts'
import { getErrorMessage, getSuccessMessage } from '@/selectors'
import { AlertBar } from '@/components/ui/errorBar'
import s1 from '@/features/personal-page/PersonalPage.module.scss'

export const Login = () => {
  const { isError, isLoading, isFetching } = useMeQuery()
  const [logIn] = useLogInMutation()

  const errorMessage = useAppSelector(getErrorMessage)
  const successMessage = useAppSelector(getSuccessMessage)

  if (isLoading || isFetching) {
    return <Icon className={s1.preloader} srcIcon={gearIcon} />
  }

  const isAuthorized = !isError

  if (isAuthorized) {
    return <Navigate to={'/'} replace={true} />
  }

  return (
    <>
      <LoginForm onSubmit={logIn} />
      <AlertBar alertType={'error'} message={errorMessage} />
      <AlertBar alertType={'success'} message={successMessage} />
    </>
  )
}
