import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { locale = "zh-CN" } = router;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/images/logo.svg"
            alt="EasyExcel Plus"
            width={136}
            height={40}
            priority
            onError={(e) => {
              console.error("Logo failed to load");
              // 可选：设置一个默认图片
              // e.currentTarget.src = '/fallback.png';
            }}
          />
        </Link>

        <div className={styles.navLinks}>
          <Link href={`/${locale}/docs`} className={styles.navLink}>
            使用文档
          </Link>
          <Link href={`/${locale}/contact`} className={styles.navLink}>
            联系我们
          </Link>
          <a
            href="https://github.com/CodePhiliaX/easyexcel-plus"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            Github
          </a>
          <a
            href="https://chat2db.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            🔥Chat2DB
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
