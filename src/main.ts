import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/global.css';
import '/node_modules/primeflex/primeflex.css';
import { PrimeVue } from '@/plugins'
import '@mdi/font/css/materialdesignicons.css';
import "primeflex/primeflex.css";
import '@fortawesome/fontawesome-free/css/all.css';
import Ripple from 'primevue/ripple';

const app = createApp(App);

app.use(router)
   .use(PrimeVue, { ripple: true})
   .directive('ripple', Ripple)
   .mount('#app');
