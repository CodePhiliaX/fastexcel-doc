import { useRouter } from "nextra/hooks";
import styles from "./index.module.css";
import { useState, useEffect, useRef } from "react";

export const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  // 简化语言配置，直接包含所有信息
  const i18n = [
    { locale: "zh-CN", name: "简体中文", flag: "🇨🇳" },
    { locale: "zh-TW", name: "繁體中文", flag: "🇨🇳" },
    { locale: "en-US", name: "English", flag: "🇺🇸" },
    { locale: "ja-JP", name: "日本語", flag: "🇯🇵" },
  ];

  const currentLang = i18n.find((l) => l.locale === locale) || i18n[0];

  // 点击外部关闭下拉菜单
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              onClick={() => {
                setIsOpen(false);
                router.push(`/${lang.locale}`);
              }}
              aria-label={`Change language to ${lang.name}`}
              role="menuitem"
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.language}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
