<template>
    <div id="login">
        <el-container>
            <el-header>  
                <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="1"><router-link to="/home" name="home" class="right" exact>首页</router-link></el-menu-item>	  
                <el-menu-item index="2" disabled><router-link to="/help" name="help" class="right" exact>帮助</router-link></el-menu-item>
                <el-menu-item index="3"><router-link to="/download" name="download" class="right" exact>下载</router-link></el-menu-item>
                </el-menu>
            </el-header>
            <el-main>
                <v-slider></v-slider>
                <v-slider></v-slider>
                <v-slider></v-slider>
            </el-main>
            <el-footer><v-footer></v-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import NewsSlider from '../components/NewsSlider.vue'

export default {
    name:'Login',
    components:{
        'v-header':Header,
        'v-footer':Footer,
        'v-slider':NewsSlider,
    },
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

