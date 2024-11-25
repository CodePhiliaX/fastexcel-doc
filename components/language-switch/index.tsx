import { useRouter } from 'next/router';
import styles from './index.module.css';

const languages = {
  'zh-CN': '简体中文',
  'en': 'English',
  'zh-TW': '繁體中文'
};

export const LanguageSwitch: React.FC = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleLanguageChange = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale });
  };

  return (
    <div className={styles.languageSelector}>
      <select 
        onChange={(e) => handleLanguageChange(e.target.value)}
        value={router.locale}
        className={styles.select}
      >
        {Object.entries(languages).map(([locale, label]) => (
          <option key={locale} value={locale}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}; 