import appLogo from '@/assets/flash-card.png'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { Icon } from '@/components/ui/icon'
import { GetMeQueryResponseData, useLogOutMutation } from '@/services/auth-service'
import { useNavigate } from 'react-router-dom'
import { DropDownMenu } from '@/components/ui/dropDownMenu'
import { DropDownItem } from '@/components/ui/dropDownMenu/dropDownItem'
import { PersonIcon } from '@/assets/icons/components/PersonIcon.tsx'
import { SignOutIcon } from '@/assets/icons/components/SignOutIcon.tsx'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { useI18N } from '@/hooks/useI18n.ts'
import userIcon from '@/assets/icons/unknown.svg'
import { languageTabs } from '@/options'
import { AppDispatch, useAppSelector } from '@/services/store.ts'
import { getLanguageTab } from '@/selectors'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveLanguageTab } from '@/services/app-service/app-slice.ts'
import s from './Header.module.scss'
import s1 from '@/features/cards-pack/CardsPack.module.scss'

type HeaderPropsType = {
  isAuth: boolean
  userData?: GetMeQueryResponseData
}

export const Header = ({ isAuth, userData }: HeaderPropsType) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true)
  const [logOut] = useLogOutMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { t, handleChangeLanguage } = useI18N()

  useEffect(() => {
    function setAttributeBasedOnWidth() {
      if (window.matchMedia('(max-width: 1280px)').matches) {
        setIsDesktop(false)
      } else {
        setIsDesktop(true)
      }
    }

    window.addEventListener('resize', setAttributeBasedOnWidth)

    return () => {
      window.removeEventListener('resize', setAttributeBasedOnWidth)
    }
  }, [])

  const activeTab = useAppSelector(getLanguageTab)

  const dropDownTrigger = userData?.avatar ? (
    <Icon className={`${s.userAvatar} ${s.headerAvatar}`} srcIcon={userData.avatar} />
  ) : (
    <Icon width={46} srcIcon={userIcon} />
  )

  const setLanguageHandler = (tabId: string) => {
    dispatch(setActiveLanguageTab(tabId))
    handleChangeLanguage()
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div onClick={() => navigate('/')} className={s.iconAndNameWrapper}>
          <Icon
            srcIcon={appLogo}
            className={s.logo}
            alt={'app_logo'}
            aria-label={'logo of application, tap to move to packs page'}
          />
          <Typography variant={'h1'}>grippiByCards</Typography>
        </div>
        <TabSwitcher
          orientation={isDesktop ? 'vertical' : 'horizontal'}
          tabs={languageTabs}
          activeTab={activeTab}
          setActiveTab={setLanguageHandler}
          tabClassName={s.languageTab}
          className={s.tabSwitcher}
        />
        <label className={s.userContainer}>
          {isAuth ? (
            <>
              <span className={s.userName}>{userData?.name}</span>
              <DropDownMenu
                className={s.headerDropDown}
                alignOffset={-9}
                sideOffset={7}
                trigger={dropDownTrigger}
              >
                <DropDownItem>
                  <Icon
                    className={s.userAvatar}
                    srcIcon={userData?.avatar ? userData.avatar : userIcon}
                    alt={'user avatar'}
                  />
                  <div className={s.emailAndName}>
                    <Typography variant={'subtitle2'}>{userData?.name}</Typography>
                    <Typography className={s.email} variant={'caption'}>
                      {userData?.email}
                    </Typography>
                  </div>
                </DropDownItem>
                <DropDownItem onClick={() => navigate('/user')} className={s1.dropDownMenuItem}>
                  <PersonIcon />
                  {t('profileDropDown')}
                </DropDownItem>
                <DropDownItem onClick={() => logOut()} className={s1.dropDownMenuItem}>
                  <SignOutIcon />
                  {t('signOutDropDown')}
                </DropDownItem>
              </DropDownMenu>
            </>
          ) : (
            <Button onClick={() => navigate('/login')} aria-label={'login button'}>
              <Typography variant={'subtitle2'}>{t('logIn')}</Typography>
            </Button>
          )}
        </label>
      </div>
    </header>
  )
}
