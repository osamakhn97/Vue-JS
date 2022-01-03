<template>
<base-dialog :show = "!!error" title="An error occured" @close = "handleError">

{{error}}
</base-dialog>
    <section>
        <base-card>
        <header>
            <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequest && !isLoading">
            <request-component v-for="req in requests" 
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
            
            
            > 

            </request-component>
        </ul>
        <h3 v-else>You havent received any requests yet!</h3>
        </base-card>
    </section>
</template>
<script>
import requestComponent from '../../components/requests/newRequest.vue'
export default {
    components:{
        requestComponent
    },
    data(){
        return{
            isLoading:false,
            error:null
        }

    },
    computed:{
        requests(){
            return this.$store.getters['requests/getRequests'];
        },
        hasRequest(){
            return this.$store.getters['requests/hasRequests'];
        }
    },
      created(){
        this.loadRequests();
    },
    methods:{
        async loadRequests(){
            this.isLoading = true;
            try{
                await this.$store.dispatch('requests/fetchRequests');

            }catch(e){
                this.error = e.message || "something went wrong :("

            }
           
           this.isLoading = false;
        },
        handleError(){
            this.error = null
        }
    },
  

}
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>