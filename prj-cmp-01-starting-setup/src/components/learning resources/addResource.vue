<template>
<base-dialog title="Invalid input" v-if="isInvalid" @close = 'validate'>
<template #default>
    <p>Sorry you have entered invalid value, please try again</p>
</template>
<template #actions>
<base-button @click="validate">Ok</base-button>
</template>
</base-dialog>
    <base-card>
    <form @submit.prevent="submitData">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="text" name="text" ref="titleInput">
        </div>
          <div class="form-control">
            <label for="Description">Description</label>
            <textarea name="description" id="description" ref="descInput"/>
        </div>
         <div class="form-control">
            <label for="link">Link</label>
            <input type="link" name="link" id="link" ref="linkInput"/>
        </div>
        <base-button type = "submit">Submit</base-button>
    </form>

    </base-card>
</template>
<script>
export default{
    inject:['submission'],
    data(){
      return{
        isInvalid:false
      }
    },
    methods:{
        submitData(){
            const title = this.$refs.titleInput.value;
            const desc = this.$refs.descInput.value;
            const link = this.$refs.linkInput.value;
            if(title.trim() === "" || desc.trim() ==="" || link.trim() === "" ){
              this.isInvalid = true
              return
            }

            this.submission(title,desc,link);
        },
          validate(){
            this.isInvalid = false
        }



    }
}
</script>



<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>