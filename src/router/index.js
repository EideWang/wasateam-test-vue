import { createRouter, createWebHistory } from "vue-router";
import Interviewees from "../views/Interviewees.vue";

const routes = [
  {
    path: "/",
    name: "Interviewees",
    component: Interviewees,
  },
  {
    path: "/information",
    name: "Information",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Information.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
