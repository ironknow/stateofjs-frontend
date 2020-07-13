import i18n from "i18next"
import { reactI18nextModule } from "react-i18next"
import Backend from "i18next-xhr-backend"

// the translations

i18n
  .use(reactI18nextModule)
  .use(Backend) // passes i18n down to react-i18next
  .init({
    react: {
      useSuspense: false,
    },
    lng: "en",
    whitelist: ["en", "fr"],
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  })

export default i18n
