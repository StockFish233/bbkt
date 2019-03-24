<template>
    <div id="home">
        <v-header></v-header>
        <el-row class="content1">
            <el-col  class="content-box">
                <el-row type="flex"  
                style="font-size: 50px;color: #FFFFFF;padding: 80px 0 5px;">
                    <el-col>让教学方式更丰富</el-col>
                </el-row>  
                <el-row style="top:40px">
                    <el-col>
                        <img src="http://sfe.ykt.io/o_1c9o7oa6p1vhu1qbp1dl61oig5u59.png">
                    </el-col>
                </el-row> 
                <el-row style="top:70px">
                    <el-col>
                        <el-button type="primary" style="width:120px;height:50px;font-size:20px">下载</el-button>
                    </el-col>
                </el-row>              
            </el-col>   
        </el-row>  
        <el-row class="content2" type="flex" align="center">
            <el-col  class="content-box">
                <el-row>
                    <el-col><h1>为你提供课堂互动的一切</h1></el-col>
                </el-row >
                <el-row>
                    <el-col :span="6" v-for="item in icons">
                        <div class="feature-icon">
                            <img :src="item.img" alt="item.title" class="icon">
                        </div>
                        <h3>{{item.title}}</h3>
                    </el-col>
                </el-row>
            </el-col>  
        </el-row>  
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'

export default {
    name:'Home',
    components:{
        'v-header':Header,
        'v-footer':Footer,
        'v-slider':Slider,
    },
    data(){
        return{
            icons:[
                {
                img:'http://portal.teachermate.com.cn:80/wp-content/themes/teachermate/dist/images/statistics.png',
                title:'课堂统计'
                }, {
                img:'http://portal.teachermate.com.cn:80/wp-content/themes/teachermate/dist/images/statistics.png',
                title:'课堂统计'
                }, {
                img:'http://portal.teachermate.com.cn:80/wp-content/themes/teachermate/dist/images/statistics.png',
                title:'课堂统计'
                }, {
                img:'http://portal.teachermate.com.cn:80/wp-content/themes/teachermate/dist/images/statistics.png',
                title:'课堂统计'
                },{
                img:'http://portal.teachermate.com.cn:80/wp-content/themes/teachermate/dist/images/statistics.png',
                title:'课堂统计'
                }, {
                img:'http://portal.teachermate.com.cn:80/wp-content/themes/teachermate/dist/images/statistics.png',
                title:'课堂统计'
                }, {
                img:'http://portal.teachermate.com.cn:80/wp-content/themes/teachermate/dist/images/statistics.png',
                title:'课堂统计'
                }, {
                img:'http://portal.teachermate.com.cn:80/wp-content/themes/teachermate/dist/images/statistics.png',
                title:'课堂统计'
                },
            ],
        }
    }   
}
</script>
<style>
    .home{
        width:100%;
        margin: 0;
        padding:0;
        top:0;
        box-sizing: border-box;
    }
    .content1{
        width:100%;
        height: 600px;
        position: relative;
        background-image: url(../../static/images/bg1.jpg);
        background-color: #fff;
        background-attachment: initial;
        background-size: initial;
        background-origin: initial;
        background-clip: initial;
        background-position: center top;
        background-repeat: no-repeat;
        
    }
    .content-box{
        position: relative;
        top: 100px;
        width: 100%;
        max-width: 1170px;
        min-width: 1170px;
        margin: 0 auto;
        text-align: center;
    }
    .content-box .feature-icon{
        margin: 0 auto;
        height: 80px;
        width: 80px;
        border-radius: 5px;
    }
    .content-box .icon{
        width: 74px;
        height: 53px;
    }
</style>

