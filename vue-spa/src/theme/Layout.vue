<template>
  <div>
    <!-- Nav -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <router-link class="navbar-brand" to="/books-view">Book Store</router-link>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/books-view">Search</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/books-manage-view">Manage</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="#">About</router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>

    <!-- Footer -->
    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
            <ul class="list-inline mb-2">
              <li class="list-inline-item">
                <a href="#">About</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <a href="#">Contact</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <a href="#">Terms of Use</a>
              </li>
              <li class="list-inline-item">&sdot;</li>
              <li class="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
            <p class="text-muted small mb-4 mb-lg-0">&copy; Book Store 2019. All Rights Reserved.</p>
          </div>
          <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item mr-3">
                <a href="#">
                  <i class="fab fa-facebook fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item mr-3">
                <a href="#">
                  <i class="fab fa-twitter-square fa-2x fa-fw"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <i class="fab fa-instagram fa-2x fa-fw"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import BooksView from "./BooksView.vue";
import BooksManageView from "./BooksManageView.vue";

export default {
  components: {
    "books-view": BooksView,
    "books-manage-view": BooksManageView
  }
};
</script>

<style>
</style>
