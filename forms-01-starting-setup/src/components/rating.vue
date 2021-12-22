<template>
    <ul>
        <li>
            <button :class="{active:modelValue === 'poor'}"   type="button" @click="activate('poor')">Poor</button>
        </li>
        <li>
            <button :class="{active:modelValue === 'average'}"  type="button" @click="activate('average')">Average</button>
        </li>
        <li>
            <button :class="{active:modelValue === 'great'}"  type="button" @click="activate('great')">Great</button>
        </li>
    </ul>
</template>
<script>
export default{
    props:['modelValue'],
    emits:['update:modelValue'],
    // data(){
    //     return {
    //         isActive:this.modelValue
            
    //     }
    // },
    methods:{
        activate(item){
        //   this.isActive = item
          this.$emit('update:modelValue',item)
         
          
          

        }
    }
}


</script>

<style  scoped>
ul {
    list-style : none;
    display:flex;
    
}
.active {
    border:2px solid seagreen
}
button{
    background: transparent;
}
</style>