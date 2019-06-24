<template>
  <div class="container">
    <h2 align="center">{{title}}</h2>
    </br>

    <div class="container">
      <input class="form-control" type="text" v-model="book.author" placeholder="author">
      <input class="form-control" type="text" v-model="book.country" placeholder="country">
      <input class="form-control" type="text" v-model="book.imageLink" placeholder="imageLink">
      <input class="form-control" type="text" v-model="book.language" placeholder="language">
      <input class="form-control" type="text" v-model="book.link" placeholder="link">
      <input class="form-control" type="text" v-model="book.pages" placeholder="pages">
      <input class="form-control" type="text" v-model="book.title" placeholder="title">
      <input class="form-control" type="text" v-model="book.year" placeholder="year">

      <input id="addOrEditButton" class="form-control success-btn" type="submit" value="Submit" v-on:click="addOrEditBook()">
    </div>
  </div>
</template>

<script>
import vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import db from "../components/firebaseInit";
vue.use(VueAxios, axios);

export default {
  data() {
    return {
      book: {
        author: "",
        country: "",
        imageLink: "",
        language: "",
        link: "",
        pages: "",
        title: "",
        year: ""
      },
      edit: false,
      title: "Add a new book"
    };
  },
  created() {
    let currentBook = this.$route.params.currentBook;

    if (currentBook) {
      this.book.author = currentBook.author;
      this.book.country = currentBook.country;
      this.book.imageLink = currentBook.imageLink;
      this.book.link = currentBook.link;
      this.book.pages = currentBook.pages;
      this.book.title = currentBook.title;
      this.book.year = currentBook.year;

      this.title = "Edit an existing book";
      this.edit = true;
    }

    console.log("BooksManageView component created");
  },
  methods: {
    addOrEditBook() {
      if (!this.edit) {
        this.addBook();
      } else {
        this.editBook();
      }

      this.$router.push({ name: "books-view" });
    },
    addBook() {
      vue.axios.post("http://localhost:5000/book", this.book).then(response => {
        console.log("Book added successfully " + response.data);
      });
    },
    editBook() {
      vue.axios.put("http://localhost:5000/book/edit", this.book).then(response => {
        console.log("Book edited successfully " + response.data);
      })
    }
  }
};
</script>

<style>
</style>
