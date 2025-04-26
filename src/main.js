import { createApp } from 'vue'
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './registerServiceWorker'
import router from './router'
import VueSplide from "@splidejs/vue-splide";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
createApp(App).use(router).use(Toast, {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnHover: true
}).use(VueSplide).mount("#app");
