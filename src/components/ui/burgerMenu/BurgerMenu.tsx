import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import { Icon } from '@/components/ui/icon'
import burger from '@/assets/icons/hamburger-menu.svg'
import { TabSwitcher } from '@/components/ui/tabSwitcher'
import { decksTabsEN, decksTabsRU, languageTabs } from '@/options'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import deleteIcon from '@/assets/icons/delete_icon.svg'
import { Typography } from '@/components/ui/typography'
import { useI18N } from '@/hooks'
import { AppDispatch, useAppSelector } from '@/services/store.ts'
import { getCurrentLanguage, getDeckFilterData, getLanguageTab } from '@/selectors'
import { setActiveLanguageTab } from '@/services/app-service/app-slice.ts'
import { useDispatch } from 'react-redux'
import s from './BurgerMenu.module.scss'
import { CancelIcon } from '@/assets/icons/components/CancelIcon.tsx'

type Props = {
  setAuthorTab?: (tabId: string) => void
  setSliderValues?: (values: number[]) => void
  setDefault?: () => void
}

export const BurgerMenu = ({ setAuthorTab, setSliderValues, setDefault }: Props) => {
  const [open, setState] = useState(false)
  const { t, handleChangeLanguage } = useI18N()
  const dispatch = useDispatch<AppDispatch>()

  const deckFilterData = useAppSelector(getDeckFilterData)
  const currentLanguage = useAppSelector(getCurrentLanguage)
  const activeTab = useAppSelector(getLanguageTab)

  const setLanguageHandler = (tabId: string) => {
    dispatch(setActiveLanguageTab(tabId))
    handleChangeLanguage()
  }

  return (
    <>
      <Icon srcIcon={burger} width={36} color={'white'} onClick={() => setState(true)} />
      <Drawer
        elevation={1}
        anchor="right" //from which side the drawer slides in
        variant="temporary" //if and how easily the drawer can be closed
        open={open} //if open is true, drawer is shown
        onClose={() => setState(false)} //function that is called when the drawer should close
      >
        <div className={s.burgerContent}>
          <CancelIcon className={s.closeButton} onClick={() => setState(false)} />
          <div className={s.block}>
            <Typography>{t('chooseLanguage')}:</Typography>
            <TabSwitcher
              tabs={languageTabs}
              activeTab={activeTab}
              setActiveTab={setLanguageHandler}
              tabClassName={s.burgerTabs}
            />
          </div>
          <div className={s.block}>
            <Typography>{t('chooseDecksByAuthor')}:</Typography>
            <TabSwitcher
              activeTab={deckFilterData.activeTab}
              setActiveTab={setAuthorTab}
              tabs={currentLanguage === 'en' ? decksTabsEN : decksTabsRU}
              tabClassName={s.burgerTabs}
            />
          </div>
          <div className={s.block}>
            <Typography>{t('chooseDesiredAmountCards')}:</Typography>
            <Slider onValueChange={setSliderValues} value={deckFilterData.sliderValues} />
          </div>
          <Button fullWidth className={s.cleanButton} variant={'secondary'} onClick={setDefault}>
            <Icon srcIcon={deleteIcon} />
            <Typography variant={'subtitle2'}>{t('clearFilter')}</Typography>
          </Button>
        </div>
      </Drawer>
    </>
  )
}
