import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Navbar from "./components/navbar";

const config: DocsThemeConfig = {
  logo: false,
  navbar: {
    component: Navbar,
  },
  navigation: false,
  primaryHue: 235,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – EasyExcel+",
    };
  },
  project: {
    link: "https://github.com/CodePhiliaX/easyexcel-plus",
  },
  docsRepositoryBase:
    "https://github.com/CodePhiliaX/easyexcel-plus/tree/main/docs",
  footer: {
    text: `© ${new Date().getFullYear()} EasyExcel+. All rights reserved.`,
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="EasyExcel+ - 让Excel处理更简单" />
      <meta
        property="og:description"
        content="高性能、易用的Java Excel处理工具"
      />
    </>
  ),
  darkMode: false,
};

export default config;
