import Vue from 'vue'

import db from './components/firebaseInit.js'

let app = new Vue({
  data: {
    hello: 'Hello World!',
  }
})

export { app }
