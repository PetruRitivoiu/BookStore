<template>
  <div class="container">
    <input class="form-control" type="text" v-model="author" placeholder="author">
    <input class="form-control" type="text" v-model="country" placeholder="country">
    <input class="form-control" type="text" v-model="imageLink" placeholder="imageLink">
    <input class="form-control" type="text" v-model="language" placeholder="language">
    <input class="form-control" type="text" v-model="link" placeholder="link">
    <input class="form-control" type="text" v-model="pages" placeholder="pages">
    <input class="form-control" type="text" v-model="title" placeholder="title">
    <input class="form-control" type="text" v-model="year" placeholder="year">

    <input class="form-control success-btn" type="submit" value="Add" v-on:click="addBook()">
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
      author: '',
      country: '',
      imageLink: '',
      language: '',
      link: '',
      pages: '',
      title: '',
      year: ''
    };
  },
  created() {
    console.log("BooksAdd component created");
  },
  methods: {
    addBook() {
      let book = {
        'author': this.author,
        'country': this.country,
        'imageLink': this.imageLink,
        'language': this.language,
        'link': this.link,
        'pages': this.pages,
        'title': this.title,
        'year': this.year
      }
      vue.axios.post("http://localhost:5000/book", book).then(response => {
        console.log('Book added successfully ' + response.data)
      });

      this.$router.push({name: 'Default'})
    }
  }
};
</script>

<style>
</style>
