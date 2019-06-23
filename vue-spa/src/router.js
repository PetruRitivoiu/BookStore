import Vue from 'vue'
import VueRouter from 'vue-router'
import BooksView from './theme/BooksView.vue'
import BooksManageView from './theme/BooksManageView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {path: '/', name: 'Default', component: BooksView},
    {path: '/books-view', name: 'books-view', component: BooksView, props: true},
    {path: '/books-manage-view', name: 'books-manage-view', component: BooksManageView, props: true}
  ]
})

export default router
