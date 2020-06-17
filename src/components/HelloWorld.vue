<template>
  <li>{{item}}</li>
</template>

<script>
export default {
  name:'HelloWorld',
  props:['item'],
}
</script>

<style>
  li{
    list-style: none;
  }
</style>