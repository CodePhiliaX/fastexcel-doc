import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra({
  basePath: '/fastexcel',
  i18n: {
    locales: ["zh-CN", "zh-TW", "en-US", "ja-JP"],
    defaultLocale: "zh-CN",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/zh-CN/",
        permanent: true,
        // basePath: false
      },
   
    ];
  },
});
