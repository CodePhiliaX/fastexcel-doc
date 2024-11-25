import React from 'react';
import { CodeBlock } from '../code-block';
import styles from './index.module.css';
import { useTranslation } from '../../hooks/useTranslation';

export const Installation: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.installation}>
      <h2 className={styles.sectionTitle}>{t("installation.title")}</h2>
      <p className={styles.sectionSubtitle}>{t("installation.subtitle")}</p>
      <div className={styles.codeBlocks}>
        <CodeBlock type="maven" />
        <CodeBlock type="gradle" />
      </div>
    </div>
  );
}; 