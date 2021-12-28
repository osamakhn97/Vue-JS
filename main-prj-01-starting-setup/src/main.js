
import { createApp } from 'vue';
import route from './router.js';
import App from './App.vue';
const app = createApp({App});
app.mount('#app');
app.use(route);



