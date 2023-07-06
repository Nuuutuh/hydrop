import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/global.css';
import '/node_modules/primeflex/primeflex.css';
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import '@mdi/font/css/materialdesignicons.css';
import 'primevue/resources/themes/saga-blue/theme.css'; 
import 'primevue/resources/primevue.min.css'; 
import 'primeicons/primeicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Ripple from 'primevue/ripple';

const app = createApp(App);

app.use(router)
   .use(PrimeVue, { ripple: true})
   .directive('ripple', Ripple)
   .mount('#app');
