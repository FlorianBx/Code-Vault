import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import ShowSnippet from "../views/SnippetView.vue";
import CreateSnippet from "../views/CreateSnippetView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, meta: { requiresAuth: false } },
  { path: "/register", component: Register, meta: { requiresAuth: false } },
  {
    path: "/snippet/:id",
    component: ShowSnippet,
    meta: { requiresAuth: false },
  },
  {
    path: "/create-snippet",
    component: CreateSnippet,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authStore.isLoggedIn) {
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;
