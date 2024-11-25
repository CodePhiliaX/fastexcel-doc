import { useRouter } from "nextra/hooks";
import styles from "./index.module.css";
import { useState, useEffect, useRef } from "react";

export const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const { locale, asPath } = router;
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 扩展支持的语言列表
  const i18n = [
    {
      locale: "zh-CN",
      name: "简体中文",
    },
    {
      locale: "zh-TW",
      name: "繁體中文",
    },
    {
      locale: "en",
      name: "English",
    },
    {
      locale: "ja",
      name: "日本語",
    },
  ];

  const getCurrentLanguageInfo = () => {
    const currentLang = i18n.find((l) => l.locale === locale) || i18n[0];
    return {
      locale: currentLang.locale,
      name: currentLang.name,
      flag: getLanguageFlag(currentLang.locale),
    };
  };

  const getLanguageFlag = (locale: string) => {
    switch (locale) {
      case "zh-CN":
      case "zh":
        return "🇨🇳";
      case "zh-TW":
        return "🇨🇳";
      case "en":
        return "🇺🇸";
      case "ja":
        return "🇯🇵";
      default:
        return "🌐";
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const currentLang = getCurrentLanguageInfo();

  // 添加点击外部关闭下拉菜单的功能
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    console.log("handleLanguageChange", asPath, newLocale);
    // router.push(asPath, asPath, { locale: newLocale });
    router.push(`/${newLocale}`);
  };

  return (
    <div className={styles.languageSelector} ref={dropdownRef}>
      <button
        className={`${styles.languageButton} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <span className={styles.flag}>{currentLang.flag}</span>
        <span className={styles.language}>{currentLang.name}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown} role="menu">
          {i18n.map((lang) => (
            <button
              key={lang.locale}
              className={`${styles.dropdownItem} ${
                locale === lang.locale ? styles.active : ""
              }`}
              onClick={() => handleLanguageChange(lang.locale)}
              aria-label={`Change language to ${lang.name}`}
              role="menuitem"
            >
              <span className={styles.flag}>
                {getLanguageFlag(lang.locale)}
              </span>
              <span className={styles.language}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
