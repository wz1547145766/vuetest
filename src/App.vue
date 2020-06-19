<template>
    <div class="mainBody">
      <headermenu/>
      <sidemenu/>
      <maincontext/>

    </div>
    
</template>

<script>
import sidemenu from './components/sidemenu'
import headermenu from './components/header'
import maincontext from './components/maincontext'

export default {
  components:{
    sidemenu,
    headermenu,
    maincontext
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