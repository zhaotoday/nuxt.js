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
  plugins: [
    '~/plugins/combined-inject.js'
  ],

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

    },
    // publicPath: 'https://abc.com',
    postcss: [
      require('autoprefixer')({
        browsers: [
          'last 3 versions',
          'ie >= 10',
          'ie_mob >= 10',
          'ff >= 30',
          'chrome >= 34',
          'safari >= 6',
          'ios >= 6',
          'android >= 4.4'
        ]
      })
    ]
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
