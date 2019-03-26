<template>
    <div id="help">
        <v-header></v-header>
        <el-row class="search-box">
            <el-col :span="20">
                <el-select style="width:400px"
                    v-model="value"
                    multiple
                    filterable
                    remote
                    reserve-keyword
                    placeholder="请输入您遇到的问题的关键词"
                    :remote-method="remoteMethod"
                    :loading="loading">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </el-col>
        </el-row>
        <el-row class="question-content">
            <el-col>  
                <h4 style="text-align:left;margin:50px">常见问题</h4>                 
                <el-tabs :tab-position="tabPosition" >
                    
                    <el-tab-pane label="下载安装">
                        <ul v-for="(item,index) in lists1" key="index">
                            <li><a href="#" target="_blank">{{item.text}}</a></li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="使用教程">
                        <ul v-for="(item,index) in lists2" key="index">
                            <li><a href="#" target="_blank">{{item.text}}</a></li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="制作及导入导出课件">
                        <ul v-for="(item,index) in lists3" key="index">
                            <li><a href="#" target="_blank">{{item.text}}</a></li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="开启课堂">
                        <ul v-for="(item,index) in lists4" key="index">
                            <li><a href="#" target="_blank">{{item.text}}</a></li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="教学数据分析及导出">
                        <ul v-for="(item,index) in lists5" key="index">
                            <li><a href="#" target="_blank">{{item.text}}</a></li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="个人信息及课堂管理">
                        <ul v-for="(item,index) in lists6" key="index">
                            <li><a href="#" target="_blank">{{item.text}}</a></li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
        <v-footer></v-footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name:'Help',
    components:{
        'v-header':Header,
        'v-footer':Footer,
    } ,
    data(){
        return {
            options: [],
            value: [],
            list: [],
            loading: false,
            states: [
                "Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"
            ],
            tabPosition: 'left',
            lists1:[
                {text:'怎么下载安装？'},{text:'需要下载其他软件吗？'},{text:'为什么无法安装？'},
            ],
            lists2:[
                {text:'下载及安装'},{text:'手机端的使用'},{text:'制作题目并上传'},{text:'课堂使用'},
            ],
            lists3:[
                {text:'怎么制作试卷？'},{text:'有哪些提醒？'},{text:'为什么无法上传课件？'},
            ],
            lists4:[
                {text:'如何考勤？'},{text:'怎么发课堂红包？'},
            ],
            lists5:[
                {text:'怎么下载教学数据？'},{text:'怎么查看学生答题情况？'},
            ],
            lists6:[
                {text:'怎么修改个人资料？'},{text:'怎么向学生发送通知？'},{text:'怎么创建班级？'},
            ]
        }
    },
    mounted() {
        this.list = this.states.map(item => {
            return { value: item, label: item };
        });
    },
    methods: {
        remoteMethod(query) {
            if (query !== '') {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.options = this.list.filter(item => {
                return item.label.toLowerCase()
                    .indexOf(query.toLowerCase()) > -1;
                });
            }, 200);
            } else {
            this.options = [];
            }
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
      
}

</script>
<style>
    .help{
        width:100%;
        margin: 0;
        padding:0;
        top:0;
        box-sizing: border-box;
        min-width: 1170px;
        font-size: 18px;
    }
    .search-box{
        position: relative;
        top: 100px;
        width: 560px;
        margin: 0 auto;  
        margin-top: 50px;   
        text-align: center;
    }
    .question-content{
        position: relative;
        width: 100%;
        max-width: 900px;
        min-width: 900px;
        margin: 0 auto;  
        margin-top: 100px; 
        margin-bottom: 50px;  
        text-align: center;
    }
    ul{
        list-style-type:none; 
        text-align: left;
        margin-left: 50px;
    }
    ul li a{
        text-decoration: none;
        color: black
    }
</style>
