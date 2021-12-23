<template>
<button @click="save">Save Changes</button>
<router-view></router-view>
  <ul>
    <teams-item
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
  
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  data(){
return {
  savedChanges:false
}
  },
  components: {
    TeamsItem,
  },
  inject: ['teams'],
  methods:{
    save(){
      this.savedChanges = true
    }
  },

  beforeRouteLeave(to,from,next){
    console.log(to,from);
    if(this.savedChanges){
      next()
    }
    else{
      const decision = confirm("Are you sure, you want to leave the changes unsaved");
      next(decision);
    }

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>