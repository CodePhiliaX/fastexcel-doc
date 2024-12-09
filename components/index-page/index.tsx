import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { Features } from "../features";
import { Installation } from "../installation";
import { Contributors } from "../contributors";
import { Testimonials } from "../testimonials";
import Footer from "../footer";
import { useTranslation } from "../../hooks/useTranslation";
import { useRouter } from "next/router";
import Image from "next/image";

const IndexPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.title}>{t("common.title")}</div>

          <p className={styles.subtitle}>{t("common.subtitle")}</p>
          <div className={styles.buttonGroup}>
            <Link href="/docs" className={styles.primaryButton}>
              {t("common.documentation")} →
            </Link>
          </div>
        </div>

        <Features />
        <Installation />
        <Contributors />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
