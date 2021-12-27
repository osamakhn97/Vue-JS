<template>
    <button @click="inc">Add 2</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    
      methods:{
    // inc(){
    //   this.$store.commit('inc');
    // this.$store.dispatch('inc');
    // }
    ...mapActions(['inc'])
  }
}
</script>