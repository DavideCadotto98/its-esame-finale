import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/js/all.min.js";
// import Example from "./components/Example.vue";

const app = createApp(App);

app
  // .component('Example', Example)
  .use(store)
  .use(router)
  .mount("#app");
