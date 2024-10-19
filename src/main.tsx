import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppProvider } from './contexts/appContext.tsx';
import i18n from './i18n';

import { I18nextProvider } from 'react-i18next';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppProvider>
        <App />
      </AppProvider>
    </I18nextProvider>
  </React.StrictMode>
)
