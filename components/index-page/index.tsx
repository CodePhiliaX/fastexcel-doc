import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import { Features } from "../features";
import { Installation } from "../installation";
import { Contributors } from "../contributors";
import { Testimonials } from "../testimonials";
import Footer from '../footer';

const IndexPage: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>新一代 JAVA 解析 EXCEL 工具</h1>
          <p className={styles.subtitle}>
            EasyExcel Plus是一个基于Java的、快速、简洁、解决大文件内存溢出的Excel处理工具。
            他能让你在不用考虑性能、内存的等因素的情况下，快速完成Excel的读、写等功能
          </p>
          <div className={styles.buttonGroup}>
            <Link href="/docs" className={styles.primaryButton}>
              产品使用文档 →
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
