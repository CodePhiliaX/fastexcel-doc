import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

export default withNextra({
  i18n: {
    locales: ["zh-CN", "zh-TW", "en-US", "ja-JP"],
    defaultLocale: "zh-CN",
  },
  async redirects() {
    return [
      {
        source: "/en/:path*",
        destination: "/en-US/:path*",
        permanent: true,
      },
    ];
  },
  
});
