export { middleware } from "nextra/locales";

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    // 修改 matcher 配置，排除静态资源
    "/((?!api|_next|.*\\..*|images|logo.svg|chat-excel.svg|option-easy.svg|high-performance.svg|stable-performance.svg).*)",
  ],
};
