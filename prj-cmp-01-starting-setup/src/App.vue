<template>
<the-header title="Remember me"></the-header>
<resource></resource>

</template>
<script>


import theHeader from './components/layouts/header.vue';
import Resource from './components/learning resources/resource.vue';
export default{
    components:{
      Resource,
        theHeader,
        
    }


}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>