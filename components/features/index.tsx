import React, { useMemo } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { useTranslation } from "../../hooks/useTranslation";
import { useRouter } from "next/router";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const Features: React.FC = () => {
  const { t } = useTranslation();
  const { basePath } = useRouter();
  const features: Feature[] = useMemo(
    () => [
      {
        title: t("features.optionEasy"),
        description: t("features.optionEasyDescription"),
        icon: "/images/option-easy.svg",
      },
      {
        title: t("features.chatExcel"),
        description: t("features.chatExcelDescription"),
        icon: "/images/chat-excel.svg",
      },
      {
        title: t("features.highPerformance"),
        description: t("features.highPerformanceDescription"),
        icon: "/images/high-performance.svg",
      },
      {
        title: t("features.stablePerformance"),
        description: t("features.stablePerformanceDescription"),
        icon: "/images/stable-performance.svg",
      },
    ],
    [t]
  );
  return (
    <div className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <Image
            src={`${basePath}${feature.icon}`}
            alt={feature.title}
            width={40}
            height={40}
            priority
          />
          <h3 className={styles.featureTitle}>{feature.title}</h3>
          <p className={styles.featureDescription}>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
