<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Touring Club
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              :class="currentRoute == 'locality' ? 'active' : ''"
              aria-current="page"
              :to="{
                name: 'Localities',
              }"
            >
              Località</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Attrazioni</a>
          </li>
        </ul>
        <button class="btn btn-outline" type="button">Login</button>
        <button class="btn btn-secondary" type="button">Acquista pass</button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Navbar",
  setup() {
    const route = useRoute();
    const currentRoute = route.name;
    return { currentRoute };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
