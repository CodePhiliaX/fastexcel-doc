import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Navbar from "./components/navbar";

const config: DocsThemeConfig = {
  logo: <span>FastExcel</span>,
  navbar: {
    component: Navbar,
  },
  navigation: false,

  project: {
    link: "https://github.com/CodePhiliaX/fastexcel",
  },
  docsRepositoryBase:
    "https://github.com/CodePhiliaX/fastexcel/tree/main/docs",
  footer: {
    content: `© ${new Date().getFullYear()} FastExcel. All rights reserved.`,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="FastExcel - 让Excel处理更简单" />
      <meta
        property="og:description"
        content="高性能、易用的Java Excel处理工具"
      />
    </>
  ),
  darkMode: false,
  i18n: [
    { locale: "zh-CN", name: "简体中文" },
    { locale: "zh-TW", name: "繁體中文" },
    { locale: "en-US", name: "English" },
    { locale: "ja-JP", name: "日本語" },
  ],
};

export default config;
