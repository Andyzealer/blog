export function setSideBar(){
    return [
        {
          text: 'JS',
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
          text: 'CSS',
          link:'/css'
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
        {
          text: '工程化',
          collapsed: false,
          items: [
            { text: '模块化', link: '/工程化/模块机制' },
            { text: 'webpack', link: '/工程化/webpack' },
            { text: 'vite', link: '/工程化/vite' },
          ]
        },
      ]
}