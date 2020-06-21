<template>
    <div class="mainBody">
      <headermenu/>
      <sidemenu/>
      <!-- <router-view/> -->
      <news/>
    </div>
    
</template>

<script>
import axios from 'axios'
import sidemenu from './components/sidemenu'
import headermenu from './components/header'
import news from './components/news'

export default {
  components:{
    sidemenu,
    headermenu,
    news,
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