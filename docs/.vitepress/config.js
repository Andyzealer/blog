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
    sidebar:[
        {
          text: 'Guide',
          collapsed: true,
          items: [
            { text: 'guide', link: '/guide/' },
            { text: 'one', link: '/guide/one' },
          ]
        }
      ]
  },
};
