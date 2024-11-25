  import { useRouter } from "nextra/hooks";
import zhCN from "../locales/zh-CN";
import en from "../locales/en";
import zhTW from "../locales/zh-TW";
import ja from "../locales/ja";

const translations = {
  "zh-CN": zhCN,
  en: en,
  "zh-TW": zhTW,
  ja: ja,
};

export const useTranslation = () => {
  const { locale = 'zh-CN' } = useRouter();
  return {
    t: (key: string) => {
      const keys = key.split('.');
      let value = translations[locale];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
    locale,
  };
}; 