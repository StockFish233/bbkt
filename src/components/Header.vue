<template>
  <div id="nav" class="nav" >
    <div class="nav-box">
      <img class="logo" src="../assets/logo.png" alt="logo">      
      <el-button type="primary" size="medium" class="right">
        <a href="/login" target="_blank" style="text-decoration: none;color:#fff;">登录</a>
      </el-button>
      <router-link to="/help" name="help" class="right">帮助</router-link>
		  <router-link to="/download" name="download" class="right">下载</router-link>
		  <router-link to="/home" name="home" class="right">首页</router-link>
    </div>
</div>
</template>

<script>
export default {
  props:['activeName'],
  data () {
    return {
      
    }
  },
  methods:{
      
  }
}
</script>

<style scoped>
  .nav {
    position: fixed;
    width: 100%;
    height: 70px;
    left: 0;
    top: 0;
    z-index: 99;
    color: #fff;
    background-color: rgba(0,0,0,0.8);
  }
  .nav .nav-box{
      position: relative;
      width: 100%;
      max-width: 1170px;
      min-width: 1170px;
      margin: 0 auto;
      height: 70px;
  }
  .nav .nav-box .logo{
      float: left;
      width: 30px;
      margin-top: 20px;
  }
  .nav .nav-box .right{
    float: right;
    margin-left: 50px;
    margin-top: 20px;
    font-size: 15px;
    padding-top: 1px;
    height: 30px;
    line-height: 30px;
    text-decoration: none;
    color: #9B9B9B;
    display: inline-block;
    text-align: center;
  }
  .nav .nav-box a:hover{
    color: #fff;
  }
  .router-link-active{
    color: rgb(231, 26, 26);
  }
</style>
