i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { /* ... */ } },
      fr: { translation: { /* ... */ } },
    },
    lng: 'fr',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });
