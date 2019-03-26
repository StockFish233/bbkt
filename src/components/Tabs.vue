<template>
    <div id="tabs" class="tabs">
        <el-tabs v-model="activeTab" >
            <el-tab-pane label="电脑端" name="first" >
                <div class="pc-content">
                    <el-row v-for="item in pcInfos" key="index">
                        <el-col :span="8">
                            <h3>版本 {{item.version}}</h3>
                            发布时间 {{item.time}}
                        </el-col>
                        <el-col :span="16">
                            {{item.type}}
                            <ol v-for="a in item.list" key="index">
                                <li>{{a.text}}</li>
                             </ol>
                        </el-col>
                    </el-row>
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
                            <ol v-for="a in item.list" key="index">
                                <li>{{a.text}}</li>
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
    .tabs{
        text-align: left;
    }
</style>
