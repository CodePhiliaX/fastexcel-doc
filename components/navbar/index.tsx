import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { useRouter } from "nextra/hooks";
import { useTranslation } from "../../hooks/useTranslation";

const Navbar = () => {
  const router = useRouter();
  const { locale = "zh-CN", basePath } = router;
  const { t } = useTranslation();

  const isZhCN = locale === "zh-CN";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src={`${basePath}/images/logo.svg`}
            alt="FastExcel"
            width={136}
            height={40}
            priority
          />
        </Link>

        <div className={styles.navLinks}>
          <Link href={`/${locale}/docs`} className={styles.navLink}>
            {t("navbar.documentation")}
          </Link>
          <Link href={`/${locale}/contact`} className={styles.navLink}>
            {t("navbar.contact")}
          </Link>
          <a
            href="https://github.com/CodePhiliaX/fastexcel"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            Github
          </a>
          <a
            href={isZhCN ? "https://chat2db-ai.com" : "https://chat2db.ai"}
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
