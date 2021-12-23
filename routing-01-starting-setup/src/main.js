import { createApp } from 'vue';
import {createRouter} from 'vue-router'
import {createWebHistory} from 'vue-router'

// import {createRouter,createWebHistory} from 'vue-router';
import App from './App.vue';
import UsersList from './components/users/UsersList.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import userFooter from './components/users/userFooter.vue';
import teamFooter from './components/teams/teamFooter.vue';
const router = createRouter({
history:createWebHistory(),
routes:[
{
   path:'/',
   redirect:'/teams'
},    
{
    path:'/users',
    components:{default:UsersList,footer:userFooter}
    // alias:'/'
},
{   
    name:'teams',
    path:'/teams',
    components:{default:TeamsList,footer:teamFooter},
    children:[
        {   
            name:'teammembers',
            path:':teamId',
            component:TeamMembers,
            props:true
        },
    ]
},

{
    path:'/:notFound(.*)',
    redirect:'/teams'
}
],
linkActiveClass:'active',
scrollBehavior(to,from,savedPosition){
    if(savedPosition){
        return savedPosition
    }
    else{
        return {top:0, left:0}
    }
}

});
// router.beforeEach(function(to,from,next){
//     console.log(from,to)
//     if(to.name === "teammembers"){
//         next()
//     }
//     else{
//         next( {   
//             name:'teammembers',
//             params:{teamId:'t2'}
//         })
//     }
    

// })
const app = createApp(App);
app.use(router);

app.mount('#app');
