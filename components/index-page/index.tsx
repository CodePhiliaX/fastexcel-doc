import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { CodeBlock } from "../code-block";
import { Contributors } from "../contributors";
import { Testimonials } from "../testimonials";
import Footer from '../footer';

const features = [
  {
    title: "操作简单",
    description:
      "Easyexcel Plus提供了直观且易于理解的 API，无论是新手还是经验丰富的开发人员，都能迅速上手并利用高效的数据处理任务",
    icon: "🔍",
  },
  {
    title: "Chat to Excel",
    description:
      "用户可以通过Easyexcel Plus的简单聊天对话，实现对 Excel 文件的创建、编辑、查询和分析",
    icon: "💬",
  },
  {
    title: "高化规处理",
    description:
      "使用 Easyexcel Plus仅需一行代码即可轻松解析复杂的 Excel 文件，转换为 Java 对象，简化开发流程，提高编码效率",
    icon: "📈",
  },
  {
    title: "稳定的高性能",
    description:
      "Easyexcel Plus能稳定的从包含大量数据的工作表中生成或读取数据，即使是100万的数据，也能轻松搞定",
    icon: "⚡",
  },
];

const IndexPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>新一代 JAVA 解析 EXCEL 工具</h1>
          <p className={styles.subtitle}>
            EasyExcel
            Plus是一个基于Java的、快速、简洁、解决大文件内存溢出的Excel处理工具。他能让你在不用考虑性能、内存的等因素的情况下，快速完成Excel的读、写等功能
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/docs" className={styles.primaryButton}>
              产品使用文档 →
            </Link>
            {/* <Link href="/chat" className={styles.secondaryButton}>
              体验Chat新功能→
            </Link> */}
          </div>
        </div>

        {/* Features Section */}
        <div className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Installation Section */}
        <div className={styles.installation}>
          <h2 className={styles.sectionTitle}>如何安装使用</h2>
          <p className={styles.sectionSubtitle}>安装简单，快速上手</p>
          <div className={styles.codeBlocks}>
            <CodeBlock type="maven" />
            <CodeBlock type="gradle" />
          </div>
        </div>

        {/* Contributors Section */}
        <Contributors />

        {/* Testimonials Section */}
        <Testimonials />
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
