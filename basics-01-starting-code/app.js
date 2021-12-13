const app = Vue.createApp({
    data(){
        return {
            courseGoalA: "Finish the course and learn vue",
            courseGoalB: "Finish the course and master vue",
            vueLink:"https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463138#overview"
        };
    },
    methods: {
        outputGoal(){
            const num = Math.random()
                if(num>0.5){
                    return this.courseGoalA
                }
                else{
                    return this.courseGoalB
                }
        }
    }
});

app.mount('#user-goal');