import {createRouter,createWebHistory} from 'vue-router';
import coachList from './pages/coaches/coachList.vue';
import coachDetails from './pages/coaches/coachDetails.vue';
import coachRegistration from './pages/coaches/coachRegistration.vue';
import contactCoach from './pages/requests/contactCoach.vue';
import requests from './pages/requests/requests.vue';
import notFound from './pages/notFound.vue';

const route = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/coaches'},
        {path:'/coaches',component:coachList},
        {path:'/coaches/:id',component:coachDetails,
        props:true,
        children:[
            {path:'contact',component:contactCoach}
        ]},
        {path:'/register',component:coachRegistration},
        {path:'/requests',component:requests},
        {path:'/:notFound(.*)',component:notFound}

    ]
})
export default route;