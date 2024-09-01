import i18n from 'i18next';
import { useEffect, useState } from 'react';

const useLanguage = () => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);

    document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
  };

  useEffect(() => {
    const initialLanguage = i18n.language || 'en';
    setLanguage(initialLanguage);
    document.documentElement.setAttribute('dir', initialLanguage === 'he' ? 'rtl' : 'ltr');
  }, []);

  return { language, changeLanguage };
};

export default useLanguage;