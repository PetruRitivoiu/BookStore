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

    <input class="form-control success-btn" type="submit" value="Add" v-on:click="addBook()"/>
  </div>
</template>

<script>
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
    }
  },
  created () {
    console.log('BooksAdd component created')
  },
  methods: {
    addBook () {
      alert('add ' + this.title)
    },

  }
}
</script>

<style>
</style>
