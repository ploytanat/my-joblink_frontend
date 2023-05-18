<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item is-size-4">
          YouBlog
        </router-link>
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div v-if="!user" class="navbar-item">
            <router-link to="/signin">
              <strong>Signin</strong>
            </router-link>
          </div>
          <div v-if="!user" class="navbar-item">
            <router-link to="/signup">
              <strong>Signup</strong>
            </router-link>
          </div>
  </div>
  <div v-if="user" class="navbar-item has-dropdown is-hoverable">
           
              <a class="navbar-item" @click="logout()">Log out</a>
          </div>
</nav>
<router-view :key="$route.fullPath" @auth-change="onAuthChange" :user="user" />

</div>
  
</template>

<script>
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    this.onAuthChange();
  },
  methods: {
    onAuthChange() {
      const token = localStorage.getItem("token");
      if (token) {
        this.getUser();
      }
    },
    getUser() {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      axios.get("http://localhost:3000/user/me", config)
      .then((res) => {
        this.user = res.data;
      });
    },

    logout() {
      localStorage.removeItem("token");
      location.reload();
    },
  },
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
