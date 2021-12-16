<template>

    <li>
        <h2>{{userName}} {{isFav ? "(Favourite)" : ""}}</h2>
        <button @click = "toggleDetails">{{hidden ? "Hide" : "Show" }} Details</button>
        <button @click = "toggleFav">Favourite</button>
        <ul v-if = "hidden">
            <li><strong>Phone:</strong>{{cellN}}</li>
            <li><strong>Age:</strong>{{userAge}}</li>
        </ul>


    </li>
</template>
<script>
export default{
    // props: [
    //     'userName',
    //     'userAge',
    //     'cellN',
    //     'isFav'
    // ]
    props :{
        id:{
            type:String,
            required:true,
        },
        userName:{
            type:String,
            required:true,
        },
        userAge:{
            type:String,
            required:true,
        },
        cellN:{
            type:String,
            required:true,
        },
        isFav:{
            type:Boolean,
            required:false,
            default :false
        }
    }, 
    data(){
        return {
            hidden:false,
            
        }
    },
    methods:{
        toggleDetails(){
            this.hidden = !this.hidden
        },
        toggleFav(){
            // this.fav = !this.fav
            this.$emit('toggle-fav',this.id)
            
        }
    }
};
</script>
