<template>
    <form @submit.prevent="submit">
        <div class="form-control">
            <label for="email">Your E-mail</label>
            <input type="email"  id="email" v-model="email">
        </div>
        <div class="form-control">
            <label for="message">Your Message</label>
            <textarea  id="message"  rows="5" v-model="message"></textarea>
        </div>
        <p v-if="!formIsValid" class="errors">Please enter the valid input</p>
        <div class="actions">
            <base-button>Submit</base-button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            email:'',
            message:'',
            formIsValid:true
        }
    },
    methods:{
        submit(){
            this.formIsValid = true;
            if(this.email === '' || !this.email.includes('@') || this.message === ''){
                this.formIsValid = false;
                return;
            }
            // console.log(this.email, this.message)
            this.$store.dispatch('requests/contactCoach',{
                email:this.email,
                message:this.message,
                coachId:this.$route.params.id
            })
            this.$router.replace('/');
            // console.log(this.$store.getters['requests/getRequests'])


        }
    }

}
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>