<template>
  <div class="home">
    <h1>Welcome to JobLink</h1>
    <p>Find your dream job or hire talented individuals.</p>
    <router-link to="/jobs" class="button">Browse Jobs</router-link>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 100px;
}
</style>
