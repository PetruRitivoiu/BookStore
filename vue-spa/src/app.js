import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import AppLayout from './theme/Layout.vue'

const app = new Vue({
  render: h => h(AppLayout)
})

export { app }
