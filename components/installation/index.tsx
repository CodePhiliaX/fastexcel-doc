import React from 'react';
import { CodeBlock } from '../code-block';
import styles from './index.module.css';

export const Installation: React.FC = () => {
  return (
    <div className={styles.installation}>
      <h2 className={styles.sectionTitle}>如何安装使用</h2>
      <p className={styles.sectionSubtitle}>安装简单，快速上手</p>
      <div className={styles.codeBlocks}>
        <CodeBlock type="maven" />
        <CodeBlock type="gradle" />
      </div>
    </div>
  );
}; 