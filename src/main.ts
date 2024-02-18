import { createApp } from "vue";
import App from "./App.vue";
import 'primevue/resources/themes/aura-light-green/theme.css'
import VueTelegram from 'vue-tg'
import router from "./router";
import PrimeVue from 'primevue/config';

createApp(App).use(VueTelegram).use(router).use(PrimeVue).mount("#app");
