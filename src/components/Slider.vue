<template>
  <el-carousel :interval="2000" indicator-position="none" id="el-carousel">
    <el-carousel-item v-for="item in sliders" :key="index">
      <img :src="item.img">
    </el-carousel-item>
  </el-carousel>
</template>
 
 
<script>
  export default {
    data() {
      return {
        sliders:[
          {
            img:'http://img.hb.aicdn.com/adbde61e4343dedd21e97ea7f22666825a8db7d077ffe-qn8Pjn_fw658'
          },
          {
            img:'http://img.hb.aicdn.com/adeed7d28df6e776c2fa6032579c697381d1a82b7fe00-fwRqgn_fw658'
          },
          {
            img:'http://img.hb.aicdn.com/ab7f48509b3c0353017d9a85ef1d12400c9b2724540d4-p3zouo_fw658'
          },
          {
            img:'http://img.hb.aicdn.com/60f788fc2a846192f224b9e6d4904b30e54926211d3d67-ACFJ9G_fw658'
          },
          {
            img:'http://img.hb.aicdn.com/22ded455284aab361b8d2056e82f74a891a019704296a-PSraEB_fw658'
          },
        ],
        bannerHeight: 1000,
        screenWidth: 1920,
 
      };
    },
 
    mounted() {
 
      this.setSize1();
      const that = this;
      //监听浏览器窗口大小改变
      window.addEventListener('resize', function() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        that.screenWidth = width;
        that.setSize();
      }, false);
 
    },
    methods: {
 
      setSize1: function() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.screenWidth = width;
        
 
      },
 
      setSize: function() {
        this.bannerHeight = 1000 / 1920 * this.screenWidth - 50
        document.getElementById('el-carousel').style.height = this.bannerHeight + 'px';
      },
 
    }
 
  }
</script>
 
 
<style>
  .el-carousel__container {
    height: 100% !important;
  }
 
  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
</style>