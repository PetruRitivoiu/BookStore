import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import db from './components/firebaseInit.js'

Vue.use(VueAxios, axios)

let app = new Vue({
  el: '#app',
  data: {
    title: 'Book Store',
    author: '',
    books: []
  },
  created () {
    console.log('Created event')
  },
  methods: {
    getBooksByAuthor (author, books) {
      let context = this
      let ref = db.ref(author)

      ref.on('value', function (snapshot) {
        context.books = snapshot.val()
      })
    },
    editBook (book) {
      alert('edit ' + book.title)
    },
    deleteBook (book) {
      alert('delete ' + book.title)
    }
  }
})

export { app }
