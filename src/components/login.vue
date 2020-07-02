<template>
    <div class="mainContext">
        <form>
            <table>
                <tr>
                    <td>
                        <label class="form" for="username">用户名</label>
                    </td>
                    <td>
                        <input class="form" id="username" type="text">
                    </td>
                </tr>
                <tr>
                    <td>
                         <label class="form" for="password">密码</label>
                    </td>
                    <td>
                        <input class="form" id="password" type="password">
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><button class="subutton" type="submit">提交</button></td>
                </tr>
            </table>
            
           
        </form>
    </div>        
</template>

<script>
export default {
    name:"login",
    data(){
        return{

        }
    },
    
}
</script>

<style>
    table{
        margin: auto;
        padding: 0px;
        position:absolute;
        left: 25%;
        top: 50%;
    }

    td{
        text-align-last:justify,
    }

   .form{
     border-radius:4px;
     height: 40px;
     line-height: 40px;
     width: 200px;
     color:#606266;
     box-sizing: border-box;
     padding: 0 15px; 
     margin: 0px;
     position: relative;
     left: 50px;
     bottom: 20px;
   }
   
   .subutton{
     width: 93%;
     left: 25%;     
     position: relative;
     bottom:18px;
     height: 40px;
     line-height: 40px;
     color: #fff;
     background-color: #67c23a;
     border: 1px solid #67c23a;
     border-radius: 4px;
   }   
</style>