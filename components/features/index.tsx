import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "操作简单",
    description:
      "Easyexcel Plus提供了直观且易于理解的 API，无论是新手还是经验丰富的开发人员，都能迅速上手并利用高效的数据处理任务",
    icon: "/images/option-easy.svg",
  },
  {
    title: "Chat to Excel",
    description:
      "用户可以通过Easyexcel Plus的简单聊天对话，实现对 Excel 文件的创建、编辑、查询和分析",
    icon: "/images/chat-excel.svg",
  },
  {
    title: "高化规处理",
    description:
      "使用 Easyexcel Plus仅需一行代码即可轻松解析复杂的 Excel 文件，转换为 Java 对象，简化开发流程，提高编码效率",
    icon: "/images/high-performance.svg",
  },
  {
    title: "稳定的高性能",
    description:
      "Easyexcel Plus能稳定的从包含大量数据的工作表中生成或读取数据，即使是100万的数据，也能轻松搞定",
    icon: "/images/stable-performance.svg",
  },
];

export const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      {features.map((feature, index) => (
        <div key={index} className={styles.featureCard}>
          <Image
            src={feature.icon}
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
