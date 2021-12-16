<template>
 <header>
    <h1>Friends</h1> 
</header>
      
    <section>
       <ul>
         <friend-contact 
         v-for="item in obj"
         :key = "item.contact"
         :id = "item.id"
         :user-name = "item.name" 
         :user-age = "item.age"
         :cell-n = "item.contact"
         :is-fav = "item.isFav"
         @toggle-fav = "toggleFunction"

         
         ></friend-contact>
       
         </ul>

    </section>
</template>
<script>
export default {
   data(){
       return {
           obj : [
               {   
                   id:'ssdsa2',
                   name:'Ali',
                   age:"22",
                   contact:"0072",
                   isFav:true
               },
                  {
                   id:'ss2323',
                   name:'Ahmed',
                   age:"21",
                   contact:"4354645",
                   isFav:false
               }
           ]
       }
   },
   methods:{
       toggleFunction(val){
           const friend = this.obj.find(e=> e.id === val);
           friend.isFav = !friend.isFav


       }
   }

}

</script>
<style>
* {
  box-sizing: border-box;
  text-decoration: none;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

#app header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: rgb(245, 241, 241);
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}


</style>
