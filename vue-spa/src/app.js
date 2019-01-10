import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import AppLayout from './theme/Layout.vue'
import router from './router'

const app = new Vue({
  el: '#app',
  router,
  render: h => h(AppLayout)
})

export { app, router }
