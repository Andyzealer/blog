import { setSideBar } from './sidebar.js'
export default {
  title: "VitePress",
  description: "Just playing around.",
  base: "/blog/",
  themeConfig: {
    siteTitle: "Andy's Blog",
    nav: [
      { text: "GuideBook", link: "/guide" },
      { text: "Changelog", link: "https://github.com/Andyzealer" },
    ],
    sidebar: setSideBar()
  },
};

