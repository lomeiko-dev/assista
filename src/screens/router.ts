import { createWebHistory, createRouter } from "vue-router";
import HomeScreen from 'screens/HomeScreen.vue'
import LoginScreen from 'screens/LoginScreen.vue'
import RegistrationCustomerScreen from 'screens/RegistrationCustomerScreen.vue'
import RegistrationExecutorScreen from 'screens/RegistrationExecutorScreen.vue'
import CreateOrderScreen from 'screens/CreateOrderScreen.vue'
import RegistrationScreen from 'screens/RegistrationScreen.vue'

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
    path: "/registration",
    name: "RegistrationScreen",
    component: RegistrationScreen
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