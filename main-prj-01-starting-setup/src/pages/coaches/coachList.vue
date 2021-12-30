<template>
    <section>
        <coach-filter @change-filter = "updateFilter"></coach-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline">Refresh</base-button>
            <base-button v-if="isCoach" link to="/register">Register as a Coach</base-button>
        </div>
        <ul v-if="hasCoaches">List of Coaches
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
            activeFilters:{
                frontend:true,
                backend:true,
                career:true

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
        return this.$store.getters['coaches/hasCoaches'];
    }
    },
    methods:{
        updateFilter(updatedFilters){
            this.activeFilters = updatedFilters
        }
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