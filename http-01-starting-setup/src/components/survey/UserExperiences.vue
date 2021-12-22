<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="getData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && err">{{err}}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No data found, try adding some new data</p>
     
      <ul v-else-if="!isLoading && results && results.length>0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
 data(){
   return{
     results:[],
     isLoading:false,
     err:null
   }
 },
  components: {
    SurveyResult,
  },
  methods:{
    getData(){
      this.isLoading = true
       fetch('https://learn-vue-32ba4-default-rtdb.firebaseio.com/surveys.json')
       .then(res=>{
         if(res.ok){
           return res.json()
         }

       }).then(e=>{
         this.isLoading = false
         const results = [];
         for(const key in e ){
           results.push({
             id:key,
             name:e[key].name,
             rating:e[key].rating
           })
           this.results = results;
         }
         

       }).catch(e=>{
         this.isLoading = false
         console.log(e)
         this.err = "Oops!! something went wrong, please try again later :("
       })
    }
  },
  mounted(){
    this.getData();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>