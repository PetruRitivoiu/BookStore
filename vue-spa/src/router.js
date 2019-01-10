import Vue from 'vue'
import VueRouter from 'vue-router'
import BooksView from './theme/BooksView.vue'
import BooksAdd from './theme/BooksAdd.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {path: '/', name: 'Default', component: BooksView},
    {path: '/books-view', name: 'books-view', component: BooksView},
    {path: '/books-add', name: 'books-add', component: BooksAdd}
  ]
})

export default router
