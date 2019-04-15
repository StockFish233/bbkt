<template>
    <div id="download">
        <v-header :activeName="ativeName"></v-header>
        <el-row class="content1" type="flex"  align="center">
            <el-col  class="content-box">
                <el-row class="content-title">
                    <el-col>百倍课堂<br>致力于更好的提升课堂效率， 增进师生之间的高效交流。</el-col>
                </el-row>              
                <el-row style="margin:20px;text-align:center">
                    <el-col>
                        <el-button round type="primary" style="width:150px;height:50px;font-size:18px">
                            <a style="text-decoration: none"><i class="el-icon-download"></i>下载插件</a>
                        </el-button>
                    </el-col>
                </el-row> 
                <div class="tips">
                    <p>目前支持Windows XP SP3、Windows7及以上版本，<br>
                需同时安装PowerPoint2010及以上版本或WPS个人版（6929）及以上版本</p>
                    <a href="/help" target="_blank">使用帮助</a>
                </div>             
            </el-col>   
        </el-row> 

         <el-row class="content2" type="flex" align="center">
            <el-col  class="content-box" style="margin-bottom: 70px;">
                <el-row>
                    <el-col><h1>功能介绍</h1></el-col>
                </el-row>
                <el-row class="container">
                    <el-col :span="6" v-for="(item, index) in icons1" :key="index" :offset="index > 0 ? 3 : 0">
                        <el-card :body-style="{margin:'20px',padding: '20px'}" 
                            style="width:320px" shadow="hover">
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
                        <el-card :body-style="{margin:'20px', padding: '20px' }" 
                        style="width:320px" shadow="hover">
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

        <el-row class="content3"  type="flex" align="center">
            <el-col class="update-log-content" >
                <h1>升级日志</h1>
                <el-row class="container">
                    <el-col :span="24" >
                        <v-tabs></v-tabs>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <v-footer></v-footer> 
    </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Tabs from '../components/VersionTabs.vue'

export default {
    name:'Download',
    components:{
        'v-header':Header,
        'v-footer':Footer,
        'v-tabs':Tabs,
    },
    data(){
        return {
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
            
        };
    } 
}
</script>
<style>
    .download{
        width:100%;
        margin: 0;
        padding:0;
        top:0;
        box-sizing: border-box;
        min-width: 1170px;
        font-size: 18px;
    }
    .content1{
        width:100%;
        height: 620px;
        position: relative;
        background-color: #DCDFE6;
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
        margin-top:65px;
    }
    .update-log-content{
        position: relative;
        top: 100px;
        width: 100%;
        max-width: 940px;
        min-width: 940px;
        margin: 0 auto;  
        margin-top: 50px;   
        text-align: center;
    }
    .update-log-content .container{
        margin:45px;
    }
    .tips{
        text-align: center;
        margin: 25px;
        color: black;
    }
    .content1 .content-box .content-title{
        font-size: 50px;
        color: black;
        padding: 60px 120px 30px;
        text-align: left;
    }
    
</style>
