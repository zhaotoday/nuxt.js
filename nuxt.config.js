
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
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
    postcss: {
      preset: {
        autoprefixer: {
          browsers: ['last 2 versions', '> 5%']
        }
      }
    },
    // publicPath: 'https://my-app.lrcdn.cn'
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
