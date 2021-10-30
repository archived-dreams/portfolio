import get from 'lodash-es/get'
import * as en from '~/locales/en.json'
import * as ru from '~/locales/ru.json'

const messages = { en, ru }

export const useI18n = () => {
  const i18n = {
    locale: useState('i18n:locale', () => 'en'),
    t: (path: string, params?: any) => {
      const result = get(messages, `${i18n.locale.value}.${path}`)
      // TODO: Prarams replace
      return result
    }
  }

  return i18n
}
