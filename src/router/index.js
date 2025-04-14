import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SigninView from "../views/SigninView.vue";
import RegisterView from "../views/RegisterView.vue";
import ShopView from "../views/ShopView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: SigninView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.name || "Kolshy";
  next();
});
export default router;
