import { createApp } from "vue";
import { createPinia } from "pinia";
import { useAuthStore } from "./stores/authStore";

const pinia = createPinia();
import router from "./router";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.use(pinia);

const authStore = useAuthStore();
authStore.initializeAuth();
app.mount("#app");

authStore.listenToAuthChanges();
