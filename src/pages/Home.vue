<template>
    <div id="home">
        <v-header></v-header>
        <el-row class="introduce-content" type="flex"  align="center">
            <el-col  class="content-box">
                <el-row 
                style="font-size: 50px;color: #FFFFFF;padding: 80px 0 5px;">
                    <el-col>让教学方式更丰富</el-col>
                </el-row>  
                <el-row style="top:40px">
                    <el-col>
                        <img src="../../static/images/icons/play.png">
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
            <el-col  class="content-box" style="margin-bottom: 70px;">
                <el-row>
                    <el-col><h1>为你提供多种课堂互动方式</h1></el-col>
                </el-row>
                <el-row class="container">
                    <el-col :span="6" v-for="(item, index) in icons1" :key="item.id" :offset="index > 0 ? 3 : 0">
                        <el-card :body-style="{margin:'20px',padding: '20px' }">
                            <img :src="item.img" class="icons">
                            <div style="padding: 14px;">
                                <h3>{{item.title}}</h3>
                                <span>{{item.note}}</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row class="container">
                    <el-col :span="6" v-for="(item, index) in icons1" :key="item.id" :offset="index > 0 ? 3 : 0">
                        <el-card :body-style="{margin:'20px', padding: '20px' }">
                        <img :src="item.img" class="icons">
                        <div style="padding: 14px;">
                            <h3>{{item.title}}</h3>
                            <span>{{item.note}}</span>
                        </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>  
        </el-row>  

        <el-row class="content3" type="flex" align="center">
            <el-col  class="content-box" style="width:100%">
                <el-row>
                    <el-col><h1>随处可用的便捷体验</h1></el-col>
                </el-row>
                <el-row  class="container">
                    <el-col :span="12">
                        <div class="teacher">
                            <img src="../../static/images/img1.png" style="width:520px;height:450px"/>
                            
                        </div>
                    </el-col>
                    <el-col :span="6" style="margin-left:20px;width:180px;">
                        <div class="teacher-info">
                            <h4>老师</h4>
                            <p>实时了解<br>学习进度<br>方便教学</p>
                        </div>
                        <div class="student-info">
                            <h4>学生</h4>
                            <p>参与课堂互动<br>无需任何下载</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="student">
                            <img src="../../static/images/img2.png" style="width:260px;height:450px;"/>
                            
                        </div>
                    </el-col>
                </el-row>
            </el-col>  
        </el-row> 

        <el-row class="content4" type="flex" align="center">
            <el-col class=new-content>
            <v-slider></v-slider>
            </el-col>     
        </el-row>   
        <v-footer></v-footer>

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
            icons1:[
                {
                    img:'../../static/images/icons/icon1.png',
                    title:'多种课堂互动方式',
                    note:'点赞，弹幕，在线点名，红包......使课堂互动更多样'
                },
                {
                    img:'../../static/images/icons/icon2.png',
                    title:'多种课堂互动方式',
                    note:'点赞，弹幕，在线点名，红包......使课堂互动更多样'
                },
                {
                    img:'../../static/images/icons/icon3.png',
                    title:'多种课堂互动方式',
                    note:'点赞，弹幕，在线点名，红包......使课堂互动更多样'
                },
            ],
            icons2:[
                {
                    img:'../../static/images/icons/icon1.png',
                    title:'多种课堂互动方式',
                    note:'点赞，弹幕，在线点名，红包......使课堂互动更多样'
                },
                {
                    img:'../../static/images/icons/icon2.png',
                    title:'多种课堂互动方式',
                    note:'点赞，弹幕，在线点名，红包......使课堂互动更多样'
                },
                {
                    img:'../../static/images/icons/icon3.png',
                    title:'多种课堂互动方式',
                    note:'点赞，弹幕，在线点名，红包......使课堂互动更多样'
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
        background-color: burlywood;
    }
    .introduce-content{
        width:100%;
        height: 600px;
        position: relative;
        background-image: url(../../static/images/bg1.jpg);
        background-color: #fff;
        background-position: center top;
        min-width: 1170px;
    }
    .content-box{
        position: relative;
        top: 100px;
        width: 100%;
        max-width: 1170px;
        min-width: 1170px;
        margin: 0 auto;
        text-align: center;
        margin-top: 50px;
        
    }
    .content-box .container{
        margin:45px;
    }
    .content-box .container .teacher-info{
        padding:30px;
        text-align: left;
        font-size:20px;
        color: rgb(56, 49, 49);
        text-align: left;
    }
    .content-box .container .student-info{
        padding:30px;
        text-align: right;
        font-size:20px;
        color: rgb(56, 49, 49);
        text-align: right;
    }
    .new-content{
        position: relative;
        top: 100px;
        width: 100%;
        max-width: 1240px;
        min-width: 1240px;
        margin: 0 auto;
        text-align: center;
        margin-top: 80px;
        margin-bottom: 80px;
    }
</style>

