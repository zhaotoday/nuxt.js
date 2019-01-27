const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/global/index.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.splice(routes.findIndex(item => item.name === 'index'), 1, {
        name: 'index',
        path: '/',
        component: resolve(__dirname, 'pages/index/index.vue')
      })

      routes.splice(routes.findIndex(item => item.name === '404'), 1, {
        name: '404',
        path: '*',
        component: resolve(__dirname, 'pages/404/index.vue')
      })
    }
  }
}
