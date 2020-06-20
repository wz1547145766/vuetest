<template>
    <div class="mainBody">
      <headermenu/>
      <sidemenu/>
      <router-view/>

    </div>
    
</template>

<script>
import sidemenu from './components/sidemenu'
import headermenu from './components/header'
import axios from 'axios'

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
     /* overflow: hidden; */
   }
</style>