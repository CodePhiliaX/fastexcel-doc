  import { useRouter } from "nextra/hooks";
import zhCN from "../locales/zh-CN";
import en from "../locales/en-US";
import zhTW from "../locales/zh-TW";
import ja from "../locales/ja-JP";

const translations = {
  "zh-CN": zhCN,
  "en-US": en,
  "zh-TW": zhTW,
  "ja-JP": ja,
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