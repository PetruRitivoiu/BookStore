<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#">Book Store</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Search</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Add</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
      </ul>
    </nav>

    <!-- <h3 align="center">Add new Book</h3> -->
    <!-- <books-add></books-add> -->
    <!-- <br> -->
    <!-- <hr> -->
    <!-- <br> -->
    <books-view></books-view>
  </div>
</template>

<script>
import BooksView from "./BooksView.vue";
import BooksAdd from "./BooksAdd.vue";

export default {
  components: {
    "books-view": BooksView,
    "books-add": BooksAdd
  }
};
</script>

<style>
</style>
