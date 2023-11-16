import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import ShowSnippet from "../views/SnippetView.vue";
import CreateSnippet from "../views/CreateSnippetView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/snippet/:id", component: ShowSnippet },
  { path: "/create-snippet", component: CreateSnippet },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
