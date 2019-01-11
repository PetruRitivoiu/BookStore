<template>
  <div id="books-view" v-cloak>

    <!-- Masthead -->
    <header class="masthead text-white text-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-9 mx-auto">
            <h1 class="mb-5">Search your favourite author</h1>
          </div>
          <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <div class="form-row">
              <div class="col-12 col-md-9 mb-2 mb-md-0">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Author"
                  v-model="author"
                  v-on:keydown.enter="getBooksByAuthor()"
                >
              </div>
              <div class="col-12 col-md-3">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-block btn-lg btn-primary"
                  v-on:click="getBooksByAuthor()"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Content -->
    <div class="container books-div">
      <div v-for="book in books" class="books-div">
        <div class="row margin-row">
          <div class="col-12 col-md-2 col-lg-1">
            <strong>Author:</strong>
          </div>
          <div class="col-6 col-md-10 col-lg-11">{{book.author}}</div>
        </div>
        <div class="row margin-row">
          <div class="col-12 col-md-2 col-lg-1">
            <strong>Country:</strong>
          </div>
          <div class="col-6 col-md-10 col-lg-11">{{book.country}}</div>
        </div>
        <div class="row margin-row">
          <div class="col-12 col-md-2 col-lg-1">
            <strong>Link:</strong>
          </div>
          <div class="col-6 col-md-10 col-lg-11">
            <a v-bind:href="book.link" target="_blank">{{book.link}}</a>
          </div>
        </div>
        <div class="row margin-row">
          <div class="col-12 col-md-2 col-lg-1">
            <strong>Pages:</strong>
          </div>
          <div class="col-6 col-md-10 col-lg-11">{{book.pages}}</div>
        </div>
        <div class="row margin-row">
          <div class="col-12 col-md-2 col-lg-1">
            <strong>Title:</strong>
          </div>
          <div class="col-6 col-md-10 col-lg-11">{{book.title}}</div>
        </div>
        <div class="row margin-row">
          <div class="col-12 col-md-2 col-lg-1">
            <strong>Year:</strong>
          </div>
          <div class="col-6 col-md-10 col-lg-11">{{book.year}}</div>
        </div>
        <div class="row margin-row">
          <div class="col-12 col-md-12 col-lg-12">
            <button class="btn btn-sm btn-outline-secondary" @click="editBook(book)">Edit</button>
            <button class="btn btn-sm btn-outline-secondary" @click="deleteBook(book)">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <hr>
  </div>
</template>

<script>
import vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import db from "../components/firebaseInit";
vue.use(VueAxios, axios)

export default {
  data() {
    return {
      title: "Book Store",
      author: "",
      books: []
    };
  },
  created() {
    console.log("BooksView component created");
  },
  methods: {
    getBooksByAuthor() {
      let context = this;
      let ref = db.ref(this.author);

      ref.on("value", function(snapshot) {
        context.books = snapshot.val();
      });
    },
    editBook(book) {
      console.log('edit ' + book.title)
      vue.axios.put('http://localhost:5000/book/edit', book).then((response) => {
        alert(response.data)
      })
    },
    deleteBook(book) {
      vue.axios.put('http://localhost:5000/book/delete', book).then((response) => {
        console.log('book deleted successfuly: ' + response.data)
      })
    }
  }
};
</script>

<style>
.books-div {
  margin-top: 20px;
}
.margin-row {
  margin-top: 5px;
}
</style>
