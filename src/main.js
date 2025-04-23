import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueSplide from "@splidejs/vue-splide";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
createApp(App).use(router).use(VueSplide).mount("#app");
