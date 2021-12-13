
const app = Vue.createApp({
    data(){
        return {
            boxA : false,
            boxB : false,
            boxC : false


        }
    },

    methods:{
        selectStyle(box){
            if(box === "A"){
                this.boxA = !this.boxA;
                

            }
            else if(box === "B"){
                this.boxB = !this.boxB;

            }
            else{
                this.boxC = !this.boxC;

            }



        }
    }
})

app.mount('#styling')