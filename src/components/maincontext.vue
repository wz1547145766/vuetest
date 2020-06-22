<template>
    <div class="mainContext">
        <div class="weather">
            <i class="el-icon-sunny"></i>
            <p>今日天气:{{weather}}</p>
        </div>
        <div class="sevenweather">
            <ul>
                <li v-for="(item, index) in seven" :key="index">
                    <div>{{item.date}}</div>
                    <div>{{item.wind}}</div>
                    <div class="icons" v-html="item.imgsrc">{{item.imgsrc}}</div>
                    <div>{{item.temp}}</div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name:"maincontext",
    data(){
        return{
            weather:"晴",
            seven:[
                {date:"五月十日",temp:"12", wind:"东三级", imgsrc:"<i class=\"el-icon-sunny\"></i>"},
                {date:"五月十日",temp:"12", wind:"东三级", imgsrc:"<i class=\"el-icon-sunny\"></i>"},
                {date:"五月十日",temp:"12", wind:"东三级", imgsrc:"<i class=\"el-icon-sunny\"></i>"},
                {date:"五月十日",temp:"12", wind:"东三级", imgsrc:"<i class=\"el-icon-sunny\"></i>"},
                {date:"五月十日",temp:"12", wind:"东三级", imgsrc:"<i class=\"el-icon-sunny\"></i>"},
                {date:"五月十日",temp:"12", wind:"东三级", imgsrc:"<i class=\"el-icon-sunny\"></i>"},
                {date:"五月十日",temp:"12", wind:"东三级", imgsrc:"<i class=\"el-icon-sunny\"></i>"},
            ]
        }
    }
}
</script>

<style>
    li{
        list-style: none;
    }
    .mainContext{
        max-width: 998px;
        height: 400px;
        position: relative;
        left: 200px;
        bottom: 400px;
        /* background-color: black; */
        border-right:1px solid #e7e9ee;
        
    }

    .weather{
        max-width: 200px;
        position: relative;
        left: 50px;
    }

    .weather i{
        font-size: 200px;
        position: relative;
        text-align: center;
        top: 50px;
        
    }
    .weather p{
        position: relative;
        font-size: 20px;
        /* top: 100px; */
        text-align: center;
        top: 50px;
    }
    .sevenweather{
        max-width: 700px;
        height: 400px;
        /*border: 1px solid black;*/
        position: relative;
        left:297px;
        bottom: 270px;
        text-align: center;

    }
    .sevenweather ul{
        position: relative;
        width: 600px;
        padding: 0px;
        display: table;
        margin-left: auto;
        margin-right: auto;
        margin-top: 80px;
    }
    .sevenweather li{
        white-space:nowrap; 
        width: 80px;
        float: left;
        text-align: center;
        /* margin-left: 30px; */
    }
    .sevenweather li div{
        margin-top: 30px;
    }
    .icons{
        font-size: 30px;
    }
</style>

