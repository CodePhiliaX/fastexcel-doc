import React from "react";
import styles from "./index.module.css";
import { useTranslation } from "../../hooks/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";

interface Contributor {
  name: string;
  avatar: string;
  github: string;
}

const contributors: Contributor[] = [
  {
    name: "玉霄",
    avatar: "/avatars/chat2db.png",
    github: "https://github.com/Chat2DB-Pro",
  },
  {
    name: "庄家钜",
    avatar: "/avatars/zjj.jpeg",
    github: "https://github.com/zhuangjiaju",
  },
  {
    name: "龚宣璋",
    avatar: "/avatars/gongxuanzhang.jpeg",
    github: "https://github.com/gongxuanzhang",
  },
  {
    name: "潘舒新",
    avatar: "/avatars/psxjoy.jpeg",
    github: "https://github.com/psxjoy",
  },
  {
    name: "闫鑫",
    avatar: "/avatars/tmlx1990.png",
    github: "https://github.com/tmlx1990",
  },
  {
    name: "陈杰阳",
    avatar: "/avatars/jieyangxchen.jpeg",
    github: "https://github.com/jieyangxchen",
  },
  {
    name: "张国权",
    avatar: "/avatars/zgq.jpg",
    github: "https://github.com/openai0229",
  },
];

export const Contributors: React.FC = () => {
  const { t } = useTranslation();
  const { basePath } = useRouter();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("contributors.title")}</h2>
      <p className={styles.subtitle}>{t("contributors.subtitle")}</p>

      <div className={styles.contributorGrid}>
        {contributors.map((contributor, index) => (
          <div key={index} className={styles.contributorItem}>
            <img
              src={`${basePath}${contributor.avatar}`}
              alt={contributor.name}
              className={styles.avatar}
            />
            <Link className={styles.name} href={contributor.github} target="_blank">
              {contributor.name}
            </Link>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/CodePhiliaX/fastexcel"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubButton}
      >
        {t("contributors.githubButton")} →
      </a>
    </div>
  );
};
