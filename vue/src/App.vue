<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}
.my-list {
  list-style-type: none;
  padding: 0;
}

.my-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.my-card div {
  color: white;
  position: absolute;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.527);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.my-card img {
  width: 400px;
}
.router-link-active {
  font-weight: bold;
}
</style>
