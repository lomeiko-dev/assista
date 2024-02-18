import { createWebHistory, createRouter } from "vue-router";
import HomeScreen from 'pages/HomeScreen.vue'
import LoginScreen from 'pages/LoginScreen.vue'
import RegistrationCustomerScreen from 'pages/RegistrationCustomerScreen.vue'
import RegistrationExecutorScreen from 'pages/RegistrationExecutorScreen.vue'
import CreateOrderScreen from 'pages/CreateOrderScreen.vue'

const routes = [
  {
    path: "/",
    name: "HomeScreen",
    component: HomeScreen,
  },
  {
    path: "/login",
    name: "LoginScreen",
    component: LoginScreen,
  },
  {
    path: "/registration/customer",
    name: "RegistrationCustomerScreen",
    component: RegistrationCustomerScreen,
  },
  {
    path: "/registration/executor",
    name: "RegistrationExecutorScreen",
    component: RegistrationExecutorScreen,
  },
  {
    path: "/create/order",
    name: "CreateOrderScreen",
    component: CreateOrderScreen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;