import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({

  lang: "zh-CN",
  title: "《李语》",
  description: "王の语录",

  theme: hopeTheme({
  hostname: "https://li.escaped.icu",

  author: {
    name: "热心市民",
    url: "https://li.escaped.icu",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/li.png",

  repo: "???/???",

  docsDir: "src",

  // 导航栏
  navbar: [
  {
    text: "首页",
    icon: "laptop-code",
    link: "/",
  },
  {
    text: "免责声明",
    icon: "book",
    link: "/about",
  },
  ],

  // 侧边栏
  sidebar: [
  {
    text: "首页",
    icon: "home",
    link: "/",
  },
  {
    text: "目录",
    icon: "book",
    link: "/yulu/",
    children: [
      {
        text: "总篇",
        link: "/yulu/all"
      },
      {
        text: "日常篇",
        link: "/yulu/daily",
      },
      {
        text: "上课篇",
        link: "/yulu/class",
      },
      {
        text: "训人篇",
        link: "/yulu/xunren",
      },
    ]
  },
  ],

  // 页脚
  footer: "Powered By EscaWorkTeam",
  displayFooter: true,
  
  copyright: "Copyright 2023-present ©热心市民",

  metaLocales: {

  },
  
  editLink: false,

  encrypt: {
    config: {
      "/yulu/": ["yi"],
    },
  },

  plugins: {
    blog: false,
    comment: {
       provider: "Waline",
       serverURL: "https://waline.escateam.icu",
    },

    components: {
      // 你想使用的组件
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VPBanner",
        "VPCard",
        "VidStack",
        "XiGua",
      ],
    },
    mdEnhance: {
      alert: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      tasklist: true,
      footnote: true,
      spoiler: true,
      chart: true,
      markmap: true,
      flowchart: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
}),
});
