import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView/HomeView.vue";
import Login from "../views/LoginView/LoginView.vue";
import Register from "../views/RegisterView/RegisterView.vue";
import ShowSnippet from "../views/SnippetView/SnippetView.vue";
import CreateSnippet from "../views/CreateSnippetView/CreateSnippetView.vue";

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
