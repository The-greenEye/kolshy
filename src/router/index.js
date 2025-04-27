import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import CartView from "../views/CartView.vue";
import DetalisPage from "../views/DetalisPage.vue"
import MyAccountView from "../views/MyAccountView.vue"
import InvoiceView from "../views/InvoiceView.vue"
import ContectUsView from "../views/Contect_UsView.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/page-detalist",
    name: "detalist",
    component: DetalisPage,
  },
  {
    path: "/my-account",
    name: "setting",
    component: MyAccountView,
  },
  {
    path: "/my-invoice",
    name: "Invoice",
    component: InvoiceView,
  },
  {
    path: "/contect-us",
    name: "Get Support",
    component: ContectUsView,
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
