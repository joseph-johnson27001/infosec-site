import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PrivacyPage.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("../views/TermsPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top on route change
    return { top: 0, behavior: "instant" };
  },
});

export default router;
