export default {
  title: "VitePress",
  description: "Just playing around.",
  base:".",
  themeConfig: {
    siteTitle: "Andy's Blog",
    base: "/blog/",
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
        },
        {
          text: 'Section Title B',
          items: [
            { text: 'Item C', link: '/item-c' },
            { text: 'Item D', link: '/item-d' },
          ]
        }
      ]
  },
};
