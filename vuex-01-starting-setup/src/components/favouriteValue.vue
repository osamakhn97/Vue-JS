<template>
    <!-- <h3>{{counter}}</h3> -->
     <h3>{{normalizedCounter}}</h3>
    <p>We do moere.....</p>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
    
computed:{
//     counter(){

    
//     return this.$store.getters.normalizedCounter
// }
...mapGetters(['normalizedCounter'])
}
}
</script>
