import { PersonalInformation } from '@/components/ui/personalInfo/PersonalInformation.tsx'
import { useLogOutMutation, useMeQuery, useUpdateProfileMutation } from '@/services/auth-service'
import { UpdatePersonalInfoFields } from '@/features/personal-page/types'
import { Icon } from '@/components/ui/icon'
import gearIcon from '@/assets/icons/gear_preloader.svg'
import s from './PersonalPage.module.scss'

export const PersonalPage = () => {
  const { data, isLoading, isFetching } = useMeQuery()
  const [updateProfile, { isLoading: isUpdateLoading }] = useUpdateProfileMutation()
  const [logOut] = useLogOutMutation()

  if (isLoading) {
    return <Icon className={s.preloader} srcIcon={gearIcon} />
  }

  if (!data) {
    return <div style={{ textAlign: 'center' }}>NO DATA RECEIVED</div>
  }

  const updateProfileHandler = (data: UpdatePersonalInfoFields) => {
    updateProfile(data)
  }

  return (
    <PersonalInformation
      isLoading={isFetching || isUpdateLoading}
      userData={data}
      logOutFn={logOut}
      onSubmit={updateProfileHandler}
    />
  )
}
