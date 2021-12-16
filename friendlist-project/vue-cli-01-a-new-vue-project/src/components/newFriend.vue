<template>
  <form @submit.prevent = "submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model = "enteredName" />
    </div>
    <div>
      <label for="">age</label>
      <input type="number" v-model = "enteredAge" />
    </div>
     <div>
      <label for="">Contact</label>
      <input type="tel"  v-model = "enteredContact"/>
    </div>
    <div>
        <button>Add Contact</button>
    </div>
  </form>
</template>
<script>
export default{
emits:['add-contact'],
    data(){
        return {
            enteredName:"",
            enteredAge:"",
            enteredContact:"",
        }
    },
    methods:{
        submitData(){
            this.$emit('add-contact',this.enteredName,this.enteredAge,this.enteredContact)
        }
    }
}
</script>
