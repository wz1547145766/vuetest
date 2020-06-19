<template>
    <div class="mainBody">
      <headermenu/>
      <sidemenu/>

    </div>
    
</template>

<script>
import sidemenu from './components/sidemenu'
import headermenu from './components/header'

export default {
  components:{
    sidemenu,
    headermenu,
  },
}
</script>

<style>
   .mainBody{
     max-width: 1200px;
     /* position: absolute; */
     margin: auto;
   }
</style>