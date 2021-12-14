const app = Vue.createApp({
  data() {
    return { 
      enteredValue: "",
      goals: [],
      disp: true
    
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredValue);
      console.log(this.goals);
      this.enteredValue = ""
    },
    removeGoal(ind){
      this.goals.splice(ind,1);
    },
    ren(){
      if(this.disp && this.goals.length !== 0){
        this.disp = false
      }
      else if(!this.disp){
        this.disp = true
      }
    }
  },
  computed: {
    show(){
      if(this.disp === false){
        return "hide"
      }

      else {
        return "show"
      }


    }
  }
});

app.mount('#user-goals');
