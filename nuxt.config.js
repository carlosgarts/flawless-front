
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-material-design-icons',
    ['nuxt-vue-material', {
      css: true,
      theme: 'null'
    }],
  ],
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
        login: { url: 'http://localhost/proyectos/new/bagisto-master/public/api/customer/login', method: 'post', propertyName: 'token' },
        logout: { url: 'http://localhost/proyectos/new/bagisto-master/public/api/customer/logout', method: 'get' },
        user: { url: 'http://localhost/proyectos/new/bagisto-master/public/api/customer/get', method: 'get', propertyName: 'data' }
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
