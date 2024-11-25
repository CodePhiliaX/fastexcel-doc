import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="EasyExcel Plus"
              width={136}
              height={40}
              priority
            />
          </Link>
          <p className={styles.copyright}>
            @2024 EasyExcel Plus. All rights reserved.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.languageSelector}>
            <span className={styles.flag}>🇺🇸</span>
            <span className={styles.language}>English</span>
          </div>

          <Link href="/docs" className={styles.footerLink}>
            使用文档
          </Link>

          <Link href="/contact" className={styles.footerLink}>
            联系我们
          </Link>

          <a 
            href="https://github.com/CodePhiliaX/easyexcel-plus" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.footerLink}
          >
            Github
          </a>

          <a 
            href="https://chat2db.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.footerLink}
          >
            🔥Chat2DB
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 