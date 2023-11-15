import { createApp } from "vue";
import { scrollTo } from "./directives/ScrollTo";
import router from "./router";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.directive("scroll-to", scrollTo);
app.mount("#app");
// createApp(App).directive('scroll-to', scrollTo).mount('#app')
