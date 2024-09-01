import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enbDict from '../src/localization/english/en.json';
import hebDict from '../src/localization/hebrew/he.json';

const resources = {
    en: {
        translation: enbDict
    },
    he: {
        translation: hebDict
    },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
