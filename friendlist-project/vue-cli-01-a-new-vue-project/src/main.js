import { createApp } from 'vue';
import App from './App.vue';
import friendContat from './components/FriendContact.vue'

const app = createApp(App);
app.component('friend-contact',friendContat);
app.mount('#app');
