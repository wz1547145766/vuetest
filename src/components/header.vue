<template>
   <div class="header">
        <img class="headerLogo" :src="logo" alt="">
        <input class="headerInput" v-model="input" placeholder="请输入内容">
        <button class="headerButton" type="submit">查询</button>
        <div class="userform" style="float:right; margin-right:60px;  margin-top: 20px;">
          <p class="userform">登录</p>
          <p class="userform">注册</p>
        </div>
       
      </div>
</template>

<script>
import logo from '@/assets/logo2.png'

export default {
    name:"headermenu",
    data() {
        return {
        input: '',
        logo:logo,
    }
  },
}
</script>

<style>
   input{
     border: 1px solid #dcdfe6;
   }
    .header{
     height:100px;
     width: 1200px;
     position: relative;
     background-color: white;
     box-sizing: border-box;
     border-bottom: 1px solid gray;

   }
   .headerLogo{
     /* margin-right: 0px; */
     position: relative;
     left: 30px;
     widows: 80px;
     height: 80px;
   }
   .headerInput{
     border-radius:4px;
     height: 40px;
     line-height: 40px;
     width: 500px;
     color:#606266;
     box-sizing: border-box;
     padding: 0 15px; 
     margin: 0px;
     position: relative;
     left: 50px;
     bottom: 20px;
   }
   .headerButton{
     position: relative;
     left: 30px;
     bottom:18px;
     height: 40px;
     line-height: 40px;
     width: 100px;
     color: #fff;
     background-color: #67c23a;
     border: 1px solid #67c23a;
     border-radius: 4px;
   }
   .userform{
    float: right;
    margin-right: 20px;
    font-family:华文细黑;
    font-size: 24px;
   }
</style>