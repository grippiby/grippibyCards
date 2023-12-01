import { SignUp } from '@/components/auth/sign-up/SignUp.tsx'
import { useSignUpMutation } from '@/services/auth-service'
import { Navigate } from 'react-router-dom'
import { CreateAccountFields } from '@/schemes/types'
import { Icon } from '@/components/ui/icon'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/services/store.ts'
import gearIcon from '@/assets/icons/gear_preloader.svg'
import { setAuthSuccessMessage } from '@/services/auth-service/auth-slice.ts'
import { AlertBar } from '@/components/ui/errorBar'
import { getErrorMessage } from '@/selectors'
import s1 from '@/features/personal-page/PersonalPage.module.scss'

export const Registration = () => {
  const [signUp, { isSuccess, isLoading }] = useSignUpMutation()

  const dispatch = useDispatch<AppDispatch>()

  const errorMessage = useAppSelector(getErrorMessage)

  const requestHandler = (data: CreateAccountFields) => {
    const { email, password, name } = data

    signUp({ email, password, name })
  }

  if (isLoading) {
    return <Icon className={s1.preloader} srcIcon={gearIcon} />
  }

  if (isSuccess) {
    dispatch(setAuthSuccessMessage('Registration passed successfully'))

    return <Navigate to={'/login'} />
  }

  return (
    <>
      <SignUp onSubmit={requestHandler} />
      <AlertBar alertType={'error'} message={errorMessage} />
    </>
  )
}
