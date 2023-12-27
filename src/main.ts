import { createApp } from "vue";
import { createPinia } from "pinia";
// import { useAuthStore } from "./stores/authStore";

import router from "./router";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(router);

app.mount("#app");

// const authStore = useAuthStore(pinia);
// authStore.initializeAuth();
// authStore.listenToAuthChanges();
