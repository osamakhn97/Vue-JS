<template>
    <base-card>
    <h2>Coach Filter</h2>
    <span class="filter-option">
    <input type="checkbox" id="frontend" checked @change="setFilters">
    <label for="frontend">Frontend</label>
    </span>
     <span class="filter-option">
    <input type="checkbox" id="backend" checked @change="setFilters">
    <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
    <input type="checkbox" id="career" checked @change="setFilters">
    <label for="career">career</label>
    </span>
    </base-card>
</template>
<script>

export default {
    emits:['change-filter'],
    data(){
        return {

            filters:{

                frontend:true,
                backend:true,
                career:true
            }
        };
    },
    methods:{
        setFilters(e){
            const inputId = e.target.id;
            const isActive = e.target.checked;
            const updatedFilters = {
                ...this.filters, 
                [inputId]:isActive
            }
            this.filters = updatedFilters

            this.$emit('change-filter',updatedFilters)


        }
    }
}
</script>