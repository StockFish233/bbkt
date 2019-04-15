<template>
    <div id="tabs" class="tabs">
        <el-tabs v-model="activeTab" >
            <el-tab-pane label="电脑端" name="first" >
                <div class="pc-content">
                    <el-timeline reverse="true">
                        <el-timeline-item v-for="(item,index) in pcInfos" :key="index" 
                        :timestamp="item.time" placement="top">
                        <el-card>
                            <h2>{{item.version}}</h2>
                            <p>{{item.type}}</p>
                            <ol>
                                <li v-for="a in item.list" key="index">{{a.text}}</li>
                            </ol>
                        </el-card>
                        </el-timeline-item>
                    </el-timeline>
                   
                </div>
            </el-tab-pane>
            <el-tab-pane label="手机端" name="second">
                <div class="phone-content">
                    <el-row v-for="item in phoneInfos" key="index">
                        <el-col :span="8">
                            <h3>版本 {{item.version}}</h3>
                            发布时间 {{item.time}}
                        </el-col>
                        <el-col :span="16">
                            {{item.type}}
                            <ol>
                                <li v-for="a in item.list" key="index">{{a.text}}</li>
                             </ol>
                        </el-col>
                    </el-row>
                </div>
            </el-tab-pane>            
        </el-tabs>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            activeTab: 'first',
            pcInfos:[
                {
                    version:'1.0.0',
                    time:'2019年6月',
                    type:'百倍课堂发布啦',
                    list:[
                        {text:'无需下载，直接在网页上打开ppt'},
                    ],
                },
                {
                    version:'1.1.0',
                    time:'2019年8月',
                    type:'新增功能',
                    list:[
                        {text:'增加习题解析功能'},
                        {text:'增加随机点名功能'},
                    ],
                },
            ],
            phoneInfos:[
                {
                    version:'1.0.0',
                    time:'2019年6月',
                    type:'百倍课堂发布啦',
                    list:[
                        {text:'无需下载，直接在小程序上进行课堂互动'},
                    ],
                },
            ]
        }
    },  
    methods: {
        
    }
}
</script>
<style>
    .tabs {
        text-align: left;        
    }
    .el-tabs__item {
        font-size: 22px;
    }
    .el-timeline-item__timestamp {
        font-size: 16px;
    }
    .el-card {
        font-size:18px;
    }
</style>
