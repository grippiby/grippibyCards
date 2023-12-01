import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { z } from 'zod'
import { makeZodI18nMap } from 'zod-i18n-map'
import zodRU from 'zod-i18n-map/locales/ru/zod.json'
import zodEN from 'zod-i18n-map/locales/en/zod.json'
import enJSON from './locale/en.json'
import ruJSON from './locale/ru.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      ...enJSON,
      zodEN,
    },
    ru: {
      ...ruJSON,
      zodRU,
      custom: {
        confirm_password: 'Пароли не совпадают',
        not_rate: 'Сначала вы должны оценить текущий вопрос, прежде чем переходить к следующему',
      },
    },
  },
  lng: 'en', // initial language of the app
})

z.setErrorMap(makeZodI18nMap({ ns: ['zodEN', 'zodRU', 'custom'] }))
