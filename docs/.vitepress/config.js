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
          text: 'HTML',
          items: [
            { text: 'html', link: '/html/html' },
          ]
        }
      ]
  },
};
