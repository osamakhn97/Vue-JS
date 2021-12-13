const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:"",
      confirmedName: ""
    };
  },
  methods:{
    add(){
      this.counter = this.counter+1
    },
    sub(){
      if(this.counter>0){
        this.counter --
      }
    },
    setname(e){
      this.name = e.target.value


    },
    confirm(){
      this.confirmedName =  this.name;
      alert(this.name)

    },
    reset(){
      this.name = ""
    },
  
  },
  computed:{
    fullName(){
      if(this.name === ""){
        return ""
      }
      else{
        return `${this.name} Khan`
      }
    }
  },
  watch:{
    counter(value){
      if(value>10){
         this.counter = 0;
      }
    }
    // name(){
    //   console.log("My name is " + this.name )
    // }
  }
});

app.mount('#events');
