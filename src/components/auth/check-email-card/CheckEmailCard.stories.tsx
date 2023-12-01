import type { Meta, StoryObj } from '@storybook/react'
import { CheckEmailCard } from '@/components/auth/check-email-card'
import { BrowserRouter, Link } from 'react-router-dom'
import s from '@/components/auth/check-email-card/CheckEmailCard.module.scss'
import { Typography } from '@/components/ui/typography'
import { Icon } from '@/components/ui/icon'
import letter from '@/assets/icons/check_email.svg'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const meta = {
  title: 'Auth/CheckEmailCard',
  component: CheckEmailCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckEmailCard>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmail: Story = {
  render: () => {
    return (
      <BrowserRouter>
        <Card
          className={s.emailCard}
          aria-label={'Checking email address for access to the registration'}
        >
          <Typography className={s.title} variant={'large'}>
            Check Email
          </Typography>
          <Icon srcIcon={letter} />
          <Typography className={s.subtitle} variant={'body2'}>
            We’ve sent an Email with instructions to example@gmail.com
          </Typography>
          <Button
            as={Link}
            to={'/login'}
            className={s.button}
            variant={'primary'}
            fullWidth={true}
            aria-label={'back to sign in button'}
          >
            <Typography variant={'subtitle2'}>Back to Sign In</Typography>
          </Button>
        </Card>
      </BrowserRouter>
    )
  },
}
