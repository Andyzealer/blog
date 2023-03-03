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
        },
        {
          text: 'HTTP',
          link:'/http'
        },
        {
          text: 'Vue',
          collapsed: false,
          items: [
            { text: 'Vue2', link: '/Vue/vue2' },
            { text: 'Vue3', link: '/Vue/vue3' },
            { text: 'Vuex', link: '/Vue/vuex' },
          ]
        },
      ]
  },
};
