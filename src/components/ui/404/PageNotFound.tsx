import s from './PageNotFound.module.scss'

import image from '@/assets/404.png'
import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Icon } from '@/components/ui/icon'

export const PageNotFound = () => {
  return (
    <div className={s.container}>
      <Icon width={'100%'} srcIcon={image} alt={'page not found'} />
      <Typography variant={'body1'} htmlTag={'h2'}>
        Sorry! Page not found!
      </Typography>
      <Button className={s.link} as={Link} to={'/decks'}>
        <Typography variant={'subtitle2'}>Back to home page</Typography>
      </Button>
    </div>
  )
}
