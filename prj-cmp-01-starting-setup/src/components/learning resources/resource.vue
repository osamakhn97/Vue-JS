<template>

    <base-card>
    <base-button @click="changeTab('resource')" :mode= "changeRes">Resources</base-button>
    <base-button @click="changeTab('add-resource')" :mode= "changeAdd">Add Resource</base-button>
    </base-card>

<keep-alive>
<component :is="isActiveRes"></component>
</keep-alive>
</template>

<script>
import addResource from './addResource.vue';
import storedResource from './storedResources.vue'
export default{
    components:{
        addResource,
        storedResource
    },
  

    data(){
        return {
            
            isActive : 'resource',
             storedResources:[
            {id:"my-course1",
            title:"Learn Google",
            description:"How to use google",
            link:"https://google.com"
            },
             {id:"my-course2",
            title:"Learn Vue JS",
            description:"How to learn Vue JS",
            link:"https://vuejs.org"
            },

        ]
        }
    },
    provide(){
   return {
     resources:this.storedResources,
     submission:this.submission
  
   }
},
    methods:{
        changeTab(res){
            this.isActive = res

        },
        submission(title,desc,url){
            let obj = {
                id: new Date().toISOString(),
                title:title,
                description:desc,
                link:url
            }
            
            this.storedResources.unshift(obj);
            this.isActive = 'resource'
        },
      
    },
    computed:{
        changeRes(){
            return this.isActive === 'resource' ? null: 'flat'
        },
        changeAdd(){
            return this.isActive === 'add-resource' ? null: 'flat'
        },
        isActiveRes(){
            return this.isActive === 'resource' ? 'stored-resource': 'add-resource'
        }
    }


}

</script>

