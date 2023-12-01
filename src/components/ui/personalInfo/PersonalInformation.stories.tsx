import type { Meta } from '@storybook/react'
import photo from './test_user.jpg'
import { PersonalInformation } from '@/components/ui/personalInfo/PersonalInformation.tsx'
import { GetMeQueryResponseData } from '@/services/auth-service'

const meta = {
  title: 'Components/Personal-Info',
  component: PersonalInformation,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PersonalInformation>

export default meta

const userData: GetMeQueryResponseData = {
  avatar: photo,
  id: '1',
  email: 'test-user@gmail.com',
  isEmailVerified: false,
  name: 'Jan Poul',
  created: '23.09.2018',
  updated: '12.10.2021',
}

export const ProfileInfo = () => {
  return <PersonalInformation userData={userData} />
}
