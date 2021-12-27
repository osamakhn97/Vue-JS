<template>
    <button @click="logIn" v-if="!getVal">Login</button>
    <button @click="logOut" v-if="getVal">Logout</button>
</template>
<script>
export default{
    methods:{
        logIn(){
            this.$store.dispatch('logIn')
        },
        logOut(){
            this.$store.dispatch('logOut')
        }
    },
    computed:{
        getVal(){
            return this.$store.getters.getState
        }
    }
}
</script>
