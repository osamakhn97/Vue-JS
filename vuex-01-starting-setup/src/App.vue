<template>
  <base-container title="Vuex" v-if="getState" >
 <the-counter></the-counter>
 <favourite-value></favourite-value>
 <button-counter></button-counter>
  <button @click="inc">Add 10</button>
  </base-container>
  <base-container title="auth">
  <auth></auth>

  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import theCounter from './components/counter.vue';
import buttonCounter from './components/buttonCounter.vue';
import favouriteValue from './components/favouriteValue';
import auth from './components/auth.vue';
import {mapGetters} from 'vuex'

export default {
  components: {
    BaseContainer,
    theCounter,
    buttonCounter,
    favouriteValue,
    auth
  },
 computed:{
    ...mapGetters(['getState'])
  },
  methods:{
    inc(){
      // this.$store.state.counter++
      this.$store.commit({
        type:'increase',
        value:10
      })
    }
  },
  
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>