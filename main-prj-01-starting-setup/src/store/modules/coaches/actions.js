export default{
    async registerCoach(context,data){
        const coachId = context.rootGetters.userId;
        const coachData = {
            firstName:data.first,
            lastName:data.last,
            areas:data.areas,
            description:data.desc,
            hourlyRate:data.rate,
        }
        const token = context.rootGetters.token

        const response = await fetch(`https://learn-vue-32ba4-default-rtdb.firebaseio.com/coaches/${coachId}.json?auth=${token}`,{
            method:'PUT',
            body:JSON.stringify(coachData)
        });
        // const responseData = await response.json();

        if(!response.ok){
            //error
        }
        // console.log(coachData)
        context.commit('registerCoach',{
            ...coachData,
            id:coachId
        })

    },
   async loadCoaches(context,payload){
       if(!payload.forceRefresh && !context.getters.shouldUpdate){
           return;

       }

     const response = await fetch (`https://learn-vue-32ba4-default-rtdb.firebaseio.com/coaches.json`);

     const responseData = await response.json();

     if(!response.ok){
         //error
         const error = new Error(responseData.message || "failed to fetch " );
         throw error;

     }
     const coaches = [];
     for (const key in responseData){
         const coach = {
             id:key,
            firstName:responseData[key].firstName,
            lastName:responseData[key].lastName,
            description:responseData[key].description,
            hourlyRate:responseData[key].hourlyRate,
            areas:responseData[key].areas,
        };
        coaches.push(coach)
        console.log(coaches);
     }
     context.commit('setCoaches',coaches);
     context.commit('setFetchTimestamp');



    }
}