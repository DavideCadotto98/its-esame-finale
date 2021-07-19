import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Attraction from "../views/Attraction.vue";
import Locality from "../views/Locality.vue";
import Localities from "../views/Localities.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/attraction/:id",
    name: "Attraction",
    component: Attraction,
  },
  {
    path: "/locality/:id",
    name: "Locality",
    component: Locality,
  },
  {
    path: "/locality",
    name: "Localities",
    component: Localities,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
