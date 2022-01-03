<template>
<base-dialog :show = "!!error" title="An error occured" @close = "handleError">

{{error}}
</base-dialog>
    <section>
        <coach-filter @change-filter = "updateFilter"></coach-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline" @click = 'loadCoaches(true)'>Refresh</base-button>
            <base-button v-if="!isCoach && !isLoading" link to="/register">Register as a Coach</base-button>
        </div>
        <div v-if = "isLoading">
        <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">List of Coaches
        <!-- <li v-for="coach in coaches" :key="coach.id">{{coach.firstName}}</li> -->
        <coach-item v-for="coach in coaches" 
        :key="coach.id"
        :id="coach.id"
        :first-name = "coach.firstName"
        :last-name = "coach.lastName"
        :rate = "coach.hourlyRate"
        :area = "coach.areas">
        </coach-item>
        </ul>
        <h3 v-else>No coaches found</h3>
        </base-card>
    </section>
</template>

<script>
import coachItem from '../../components/coaches/coachItem.vue';
import coachFilter from '../../components/coaches/filterCoaches.vue'
export default {
    data(){
        return{
            error:null,
            isLoading:false,
            activeFilters:{
                frontend:true,
                backend:true,
                career:true,
                

            }
        }
        

    },
    components:{coachItem,coachFilter},
    computed:{
        isCoach(){
            return this.$store.getters['coaches/isCoach']

        },
      
        coaches(){
            const coaches =  this.$store.getters['coaches/coaches'];
            return coaches.filter(coach=>{
                if(this.activeFilters.frontend && coach.areas.includes('frontend')){
                    return true;
                }
                if(this.activeFilters.backend && coach.areas.includes('backend')){
                    return true;
                }
                 if(this.activeFilters.career && coach.areas.includes('career')){
                    return true;
                }
                return false;
            })

        },
         hasCoaches(){
        return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    }
    },
    methods:{
        updateFilter(updatedFilters){
            this.activeFilters = updatedFilters
        },
        async loadCoaches(refresh = false){
            this.isLoading = true;
            try{
                await this.$store.dispatch('coaches/loadCoaches',{forceRefresh:refresh});
            }
            catch(e){
                this.error = e.message || "Something went wrong"

            }
            this.isLoading = false;
        },
        handleError(){
            this.error = null;

        }
    },
    created(){
        // console.log(this.isCoach)
        this.loadCoaches();
    }
   
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>