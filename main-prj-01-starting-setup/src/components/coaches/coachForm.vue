<template>
    <form @submit.prevent="submit">
        <div class="form-control" :class="{invalid:!firstName.isValid}" >
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model.trim="firstName.val" @blur="clear('firstName')">
            <p v-if="!firstName.isValid">Please enter the first nname.</p>

        </div>
        <div class="form-control" :class="{invalid:!lastName.isValid}">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model.trim="lastName.val" @blur="clear('lastName')">
            <p v-if="!lastName.isValid">Please enter the last name</p>
            
        </div>
        <div class="form-control" :class="{invalid:!description.isValid}">
            <label for="description">Description</label>
            <textarea  id="description"  rows="5" v-model.trim="description.val" @blur="clear('description')"></textarea>
            <p v-if="!description.isValid">Please enter the description</p>
        </div>
         <div class="form-control" :class="{invalid:!rate.isValid}">
            <label for="HourlyRate">Hourly Rate</label>
            <input type="number" id="hourlyRate" v-model.number="rate.val" @blur="clear('rate')">
            <p v-if="!rate.isValid">enter the hourly rate</p>
        </div >
        <div class="form-control" :class="{invalid:!areas.isValid}">

        <div>
            <input type="checkbox"  id="frontend" value="frontend" v-model="areas.val" @blur="clear('areas')">
            <label for="frontend">Frontend</label>
        </div>
        <div>
            <input type="checkbox"  id="backend" value="backend" v-model="areas.val" @blur="clear('areas')">
            <label for="backend">Backend</label>
        </div>
        <div>
            <input type="checkbox"  id="career" value="career" v-model="areas.val" @blur="clear('areas')">
            <label for="career">Career Advisory</label>
        </div>
          <p v-if='!areas.isValid'> Please Select atleast one field</p>
        </div>
      
        <p v-if="!formIsValid">Please enter the above data correctly</p>
        <base-button>Submit</base-button>
    </form>
</template>
<script>
export default {
    emits:['sava-data'],
    data(){
        return{
            firstName:{val:'',isValid:true},
            lastName:{val:'',isValid:true},
            description:{val:'',isValid:true},
            rate:{val:null,isValid:true},
            areas:{val:[],isValid:true},
            formIsValid:true

        }
    },

    methods:{
        validate(){
            if(this.firstName.val === ''){
                this.firstName.isValid = false;
                this.formIsValid = false;
            }
            if(this.lastName.val === ''){
                this.lastName.isValid = false;
                this.formIsValid = false;
            }
            if(this.description.val === ''){
                this.description.isValid = false;
                this.formIsValid = false;
            }
            if(!this.rate.val || this.rate.val<0 ){
                this.rate.isValid = false;
                this.formIsValid = false

            }
             if(this.areas.val.length === 0 ){
                this.areas.isValid = false;
                this.formIsValid = false

            }
            

        },
        
        submit(){
            this.formIsValid = true;
            this.validate();
            if(!this.formIsValid){
                return
            }
            const FormData = {
                first:this.firstName.val,
                last:this.lastName.val,
                desc:this.description.val,
                rate:this.rate.val,
                areas:this.areas.val
            }
            // console.log(FormData)
            this.$emit('save-data',FormData);
        },
        clear(input){
            this[input].isValid = true

        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>