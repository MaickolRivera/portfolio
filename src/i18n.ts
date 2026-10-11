import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import homeEs from "./locales/es/home.json"
import homeEn from "./locales/en/home.json"

const resources = {
    en: {
        home: homeEn
    },
    es: {
        home: homeEs
    }
}

i18n.on("languageChanged", (lng) => {
    document.documentElement.lang = lng;
});

i18n
    .use(I18nextBrowserLanguageDetector)
    .use(initReactI18next)
    .init(
        {
            resources,
            fallbackLng: "es",
            supportedLngs: ["es", "en"],
            load: "languageOnly",
            defaultNS: "home",
            ns: ["home"],

            detection: {
                order: ["localStorage", "navigator"],
                caches: ["localStorage"],
            },

            interpolation: {
                escapeValue: false
            }
        }
    )

export default i18n;