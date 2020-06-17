<template>
    <div id="app">

          {{info}}
          <router-view/>

          <ol>
          <HelloWorld v-for="(item, index) in items" :key="index" :item="item"></HelloWorld>
          </ol>
    </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components:{
    HelloWorld
  },
  data(){
    return {
      info:null,
      items:[
        "1",
        "2",
        "3",
      ]

    }
  },
  methods:{
    
  },
  computed(){

  },
  mounted(){
      axios.get('/index').then(response => (this.info = response))
  }
}
</script>

