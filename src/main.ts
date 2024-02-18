import { createApp } from "vue";
import "primevue/resources/themes/aura-light-green/theme.css";

import App from "app/App.vue";
import VueTelegram from "vue-tg";
import router from "pages/router";
import PrimeVue from "primevue/config";

createApp(App)
    .use(VueTelegram)
    .use(router)
    .use(PrimeVue)
    .mount("#app");
