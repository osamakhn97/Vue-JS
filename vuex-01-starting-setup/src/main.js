import { createApp } from 'vue';
import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    inc(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    logIn(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter > 100) {
        return 100;
      }
      if (finalCounter < 0) {
        return 0;
      }
      return finalCounter;
    },
    getState(state){
        return state.isLoggedIn
    }
  },
  actions: {
    inc(context) {
      setTimeout(() => {
        context.commit('inc');
      }, 3000);
    },
    logIn(context){
        context.commit('logIn')
    },
    logOut(context){
        context.commit('logOut')
    }
  },
});
import App from './App.vue';

const app = createApp(App);
app.use(store);
app.mount('#app');
