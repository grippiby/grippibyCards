import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/services/store.ts'
import { setAppLanguage } from '@/services/app-service/app-slice.ts'

export const useI18N = () => {
  const dispatch = useDispatch<AppDispatch>()

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en'

    setCurrentLanguage(newLanguage)
    changeLanguage(newLanguage)
    dispatch(setAppLanguage(newLanguage))
  }

  return { handleChangeLanguage, t }
}
