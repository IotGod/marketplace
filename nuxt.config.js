
require('dotenv').config()
const config = require('./config.json')

const title = process.env.CITY_TITLE ? process.env.CITY_TITLE : config.title;
const description = process.env.CITY_DESCRIPTION ? process.env.CITY_DESCRIPTION : config.description;

module.exports = {
  mode: 'universal',
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/city/' : ''
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: title + ' Marktplatz - Open Marketplace Application}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description}
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
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src:'@/plugins/iota-payment', ssr:  true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-i18n',
    'nuxt-leaflet',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'de',
        name: 'Deutsch'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./translations/en.js'),
        de: require('./translations/de.js')
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  env: {
    cityUrl: process.env.CITY_URL || 'http://localhost:5000',
    cityTitle: title,
    cityDescription: description,
  },
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
