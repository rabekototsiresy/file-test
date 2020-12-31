import i18n from "i18next";
import common_fr from "../translations/fr/common.json";
import common_en from "../translations/en/common.json";

i18n.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      fr: {
          common: common_fr
      },
  },
});

export default i18n