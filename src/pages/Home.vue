<template>
    <div id="home">
        <v-header></v-header>
        <el-row class="introduce-content" type="flex"  align="center">
            <el-col  class="content-box">
                <el-row 
                style="font-size: 50px;color: #FFFFFF;padding: 80px 0 5px;">
                    <el-col>全景式的教学辅助，功能贯穿课前、课中、课后</el-col>
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
                    <el-col :span="6" v-for="(item, index) in icons1" :key="index" :offset="index > 0 ? 3 : 0">
                        <el-card :body-style="{margin:'20px',padding: '20px' }" shadow="hover">
                            <img :src="item.img" class="icons">
                            <div style="padding: 14px;">
                                <h3>{{item.title}}</h3>
                                <span>{{item.note}}</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row class="container">
                    <el-col :span="6" v-for="(item, index) in icons2" :key="index" :offset="index > 0 ? 3 : 0">
                        <el-card :body-style="{margin:'20px', padding: '20px' }" shadow="hover">
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
            <el-col class="content-box">
                <el-row style="margin-bottom:50px;">
                    <el-col><h1>用户评价</h1></el-col>
                </el-row>
                <el-row style="margin-bottom:20px;">
                    <el-collapse v-model="activeNames" @change="handleChange" 
                        v-for="(item,index) in evaluations" :key="item.id">
                        <el-collapse-item :title="item.author" :name="index">
                            <div>{{item.content}}</div>
                        </el-collapse-item>
                    </el-collapse>
                </el-row>
            </el-col>     
        </el-row>   

        <el-row class="content5" type="flex" align="center">
            <el-col class="new-content">
                <el-row style="margin-bottom:50px;">
                    <el-col><h1>新闻报告</h1></el-col>
                </el-row>
                <el-row>
                    <v-slider></v-slider>
                </el-row>
            </el-col>     
        </el-row>  

        <v-footer></v-footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import NewsSlider from '../components/NewsSlider.vue'
import Footer from '../components/Footer.vue'

export default {
    name:'Home',
    components:{
        'v-header':Header,
        'v-footer':Footer,
        'v-slider':NewsSlider,
    },
    data(){
        return{
            icons1:[
                {
                    img:'../../static/images/icons/icon1.png',
                    title:'新增习题',
                    note:'提供多种题型，批量导入'
                },
                {
                    img:'../../static/images/icons/icon2.png',
                    title:'课堂管理',
                    note:'扫码签到、随机点名、开启直播、开启弹幕'
                },
                {
                    img:'../../static/images/icons/icon3.png',
                    title:'试卷管理',
                    note:'创建手机屏幕大小的ppt页面'
                },
            ],
            icons2:[
                {
                    img:'../../static/images/icons/icon1.png',
                    title:'上传课件',
                    note:'上传完成后可在我的课件库中查看'
                },
                {
                    img:'../../static/images/icons/icon2.png',
                    title:'发布公告',
                    note:'向指定班级发送信息公告'
                },
                {
                    img:'../../static/images/icons/icon3.png',
                    title:'授课日志',
                    note:'进行课堂记录，包括（签到情况、学生习题数据、课件数据）'
                },
            ],
            activeNames: [],
            evaluations:[
                {id:'1',author:'老师1',content:'百倍课堂的全景式的教学辅助，功能贯穿课前、课中、课后'},
                {id:'2',author:'老师2',content:'它使用简便，功能强大，还可以记录整个教学过程。为老师的课堂授课提供 高效便利的支持。 使得往日沉闷的课堂变成以学生为中心的，非常有趣味性的互动课堂。'},
            ]
        }
    },
    computed:{
        activeNames:function(){
            for(var i = 1;i <= this.evaluations.length;i++){
                this.activeNames.push(i.toString())
            }
        }
    },
    methods: {
      handleChange(val) {
        console.log(val);
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
        font-size:22px;
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
        margin-top: 45px;
        margin-bottom: 45px;
    }
    .content-box .container{
        margin-top:45px;
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
        margin-top: 45px;
        margin-bottom: 45px;
    }
    .el-collapse-item__header{
        font-size:22px;
    }
    .el-collapse-item__content{
        font-size:20px;
        text-align: left;
    }
</style>

