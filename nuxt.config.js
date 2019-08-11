
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
    'assets/css/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/bus'},
    { src: '~/plugins/vue-datetime.js', ssr: false },
    { src: '~/plugins/vue-carousel.js', ssr: false },
    { src: '~/plugins/vue-spinners.js', ssr: false },
    { src: '~plugins/vue-scrollto.js'}
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    'nuxt-material-design-icons',
    ['nuxt-vue-material', {
      css: true,
      theme: 'null'
    }],
  ],

  /*
  ** Toast module configuration
  ** See https://github.com/nuxt-community/modules/tree/master/packages/toast
  */

  toast: {
    position: 'top-right',
    duration: 5000,
    // register: [ // Register custom toasts
    //   {
    //     name: 'my-error',
    //     message: 'Oops...Something went wrong',
    //     options: {
    //       type: 'error'
    //     }
    //   }
    // ]
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  auth: {
    strategies: {
    local: {
      endpoints: {
        login: { url: 'http://store.flawlessrd.com/public/api/customer/login', method: 'post', propertyName: 'token' },
        logout: { url: 'http://store.flawlessrd.com/public/api/customer/logout', method: 'get' },
        user: { url: 'http://store.flawlessrd.com/public/api/customer/get', method: 'get', propertyName: 'data' }
        },
      tokenRequired: true,
      tokenType: 'bearer'
      }
    },
    redirect: {
    login: '/',
    logout: '/',
    callback: '/',
    home: '/'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
