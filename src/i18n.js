import { createI18n } from 'vue-i18n';

import en from "./locales/en.json";
import ar from "./locales/ar.json";

export default createI18n({
  legacy: false,  // To use Composition API
  globalInjection: true,
  locale: import.meta.VITE_I18N_LOCALE || "ar",
  fallbackLocale: import.meta.VITE_I18N_FALLBACK_LOCALE || "ar",
  messages: { ar, en },
});
