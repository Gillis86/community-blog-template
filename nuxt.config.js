const axios = require('axios')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'blog-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {href:'https://fonts.googleapis.com/css?family=Open+Sans',rel:'stylesheet'},
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#e95280' },
  plugins: ['~/plugins/scrollTo'],

  modules:[
    ['nuxt-sass-resources-loader',[
      '@/assets/scss/variables.scss',
      '@/assets/scss/general.scss'
    ]],
    '@nuxtjs/axios',
  ],
  axios:{
    baseURL:'http://34.227.160.225/wp-json/wp/v2'
  },


  /*
  ** Build configuration
  */
  build: {
    
    vendor:['babel-polyfill'],
    /*
    ** Run ESLint on save
    */
    extend (config) {
     
    }
  },
  generate: {
    routes: function () {
      return axios.get('http://34.227.160.225/wp-json/wp/v2/posts')
      .then((res) => {
        return res.data.map((d) => {
          return '/' + d.slug
        })
      })
    }
  }
}
