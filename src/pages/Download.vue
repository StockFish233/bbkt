<template>
    <div id="download">
        <v-header :activeName="ativeName"></v-header>
        <el-row class="content1" type="flex"  align="center">
            <el-col  class="content-box">
                <el-row class="content-title">
                    <el-col>百倍课堂<br>让课堂效率提升一百倍！</el-col>
                </el-row>              
                <el-row style="margin:20px;text-align:center">
                    <el-col>
                        <el-button round type="primary" style="width:150px;height:50px;font-size:18px">
                        <i class="el-icon-download"></i>下载插件</el-button>
                    </el-col>
                </el-row> 
                <div class="tips">
                    <p>目前支持Windows XP SP3、Windows7及以上版本，<br>
                需同时安装PowerPoint2010及以上版本或WPS个人版（6929）及以上版本</p>
                    <a href="#" target="_blank">使用帮助</a>
                </div>             
            </el-col>   
        </el-row> 
        <el-row class="content2"  type="flex" align="center">
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
import Tabs from '../components/Tabs.vue'

export default {
    name:'Download',
    components:{
        'v-header':Header,
        'v-footer':Footer,
        'v-tabs':Tabs,
    },
    data(){
        return {
            
            
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
        height: 600px;
        position: relative;
        background-color: #DCDFE6;
        background-position: center top;
        min-width: 1170px;
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
