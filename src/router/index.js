import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShopView from "../views/ShopView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import registerSellerView from "../views/SellerRegisterView.vue";
import ForPassGet from "../views/ForgetPassView.vue";
import CartView from "../views/CartView.vue";
import DetalisPage from "../views/DetalisPage.vue"
import MyAccountView from "../views/MyAccountView.vue"
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
    path: "/register-seller",
    name: "Seller",
    component: registerSellerView,
  },
  {
    path: "/forget-pass",
    name: "Reste Password",
    component: ForPassGet,
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
