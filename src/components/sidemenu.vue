<template>
    <div class="sidemenu">
         <el-radio-group v-model="isCollapse" style="margin-bottom: 20px; line-height:400px">
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" style="width:200px;">
  <el-menu-item index="1" style="height:100px; line-height:100px">
    <template slot="title">
      <i class="el-icon-sunny"></i>
      <span slot="title">天气查询</span>
    </template>
  </el-menu-item>
  <el-menu-item @click="ajax" index="2" style="height:100px; line-height:100px; ">
    <i class="el-icon-reading"></i>
    <span slot="title">实时新闻</span>
  </el-menu-item>
  <el-menu-item index="3" style="height:100px; line-height:100px">
    <i class="el-icon-document"></i>
    <span slot="title">那年今日</span>
  </el-menu-item>
  <el-menu-item index="4" style="height:100px; line-height:100px">
    <i class="el-icon-question"></i>
    <span slot="title">作者声明</span>
  </el-menu-item>
</el-menu>
    </div>
</template>

<script>
export default {
    name:"sidemenu",
    data(){
        return{
            isCollapse: false
        }
    }, 
    methods:{
      // ajax : axios.create({
      //   baseURL: 'http://127.0.0.1:8080/router'
      // })
      ajax: function(){
        alert("click")
      }
    } 
}
</script>

<style>
  .sidemenu{
    max-width: 200px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
  }
</style>