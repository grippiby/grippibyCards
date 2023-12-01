import letter from '@/assets/icons/check_email.svg'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Icon } from '@/components/ui/icon'
import { Typography } from '@/components/ui/typography'
import { Link, useLocation } from 'react-router-dom'
import { useI18N } from '@/hooks/useI18n.ts'
import s from './CheckEmailCard.module.scss'

export const CheckEmailCard = () => {
  const location = useLocation()
  const { t } = useI18N()

  return (
    <Card
      className={s.emailCard}
      aria-label={'Checking email address for access to the registration'}
    >
      <Typography className={s.title} variant={'large'}>
        {t('checkEmail')}
      </Typography>
      <Icon srcIcon={letter} />
      <Typography className={s.subtitle} variant={'body2'}>
        {t('checkEmailInstruction', { email: location.state.email })}
      </Typography>
      <Button
        as={Link}
        to={'/login'}
        className={s.button}
        variant={'primary'}
        fullWidth={true}
        aria-label={'back to sign in button'}
      >
        <Typography variant={'subtitle2'}>{t('backToLogIn')}</Typography>
      </Button>
    </Card>
  )
}
