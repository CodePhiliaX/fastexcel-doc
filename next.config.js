import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra({
  basePath: '/fastexcel',
  assetPrefix: '/fastexcel',
  i18n: {
    locales: ["zh-CN", "zh-TW", "en-US", "ja-JP"],
    defaultLocale: "zh-CN",
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/fastexcel/zh-CN/",
  //       permanent: true,
  //       // basePath: false
  //     },
  //     {
  //       source: "/fastexcel",
  //       destination: "/fastexcel/zh-CN/",
  //       permanent: true,
  //       // basePath: false
  //     }
  //   ];
  // },
});
