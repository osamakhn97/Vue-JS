<template>
    <base-card>
    <coach-form @save-data = save></coach-form>
    </base-card>
</template>
<script>
import coachForm from '../../components/coaches/coachForm.vue'
export default {
    components:{
        coachForm
    },
    methods:{
        save(FormData){
            this.$store.dispatch('coaches/registerCoach',FormData);
            this.$router.replace('/')


        }
    }
}
</script>