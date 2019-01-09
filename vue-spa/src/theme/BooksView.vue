<template>
  <div class="container" id="books-view" v-cloak>

    <input class="form-control" type="text" v-model="author" placeholder="author" v-on:keydown.enter="getBooksByAuthor(author)">
    <input class="form-control success-btn" type="submit" value="Search" v-on:click="getBooksByAuthor(author)"/>

    <br/>

    <h4 v-if="author">Search results for {{author}}</h4>

    <hr/>

    <ul>
      <li v-for="book in books">
        <div>
          <button @click=editBook(book)>Edit</button>
          <button @click=deleteBook(book)>Delete</button>
          <br/>
          Author: {{book.title}} <br/>
          Country: {{book.country}} <br/>
          Language: {{book.language}} <br/>
          Link: {{book.link}} <br/>
          Pages: {{book.pages}} <br/>
          Title: {{book.title}} <br/>
          Year: {{book.year}}
        </div>
        <hr/>
      </li>
  </ul>

</div>
</template>

<script>
import db from '../components/firebaseInit'

export default {
  data() {
    return {
      title: 'Book Store',
      author: '',
      books: []
    }
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
}
</script>

<style>
</style>
