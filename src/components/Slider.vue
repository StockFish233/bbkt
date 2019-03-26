<template>
  <el-carousel :interval="6000" type="card" height="480px" indicator-position="none">
    <el-carousel-item v-for="(item,index) in news" :key="index" 
      :class="{'is-active': index === activeIndex}">
      <div class="new-box">
        <a target="_blank" href="#">
          <h2>{{item.title}}</h2>
          <p>{{item.time}}</p>
          <p>{{item.text}}</p>
          <span>{{item.press}}</span>
        </a>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    data() {
      return {
        news:[
          {title:'教学信息化必须面向教改实际1',time:'2016.5.6',text:'……清华大学宣布推出的智能教学工具——雨课堂，将PPT、MOOC、手机微信融为一体，预示着我国高校教学信息化将进入一个新的发展阶段，这个阶段的特征就是“互联网+黑板+移动终端”。',press:'人民日报'},
          {title:'教学信息化必须面向教改实际2',time:'2016.5.6',text:'……清华大学宣布推出的智能教学工具——雨课堂，将PPT、MOOC、手机微信融为一体，预示着我国高校教学信息化将进入一个新的发展阶段，这个阶段的特征就是“互联网+黑板+移动终端”。',press:'人民日报'},
          {title:'教学信息化必须面向教改实际3',time:'2016.5.6',text:'……清华大学宣布推出的智能教学工具——雨课堂，将PPT、MOOC、手机微信融为一体，预示着我国高校教学信息化将进入一个新的发展阶段，这个阶段的特征就是“互联网+黑板+移动终端”。',press:'人民日报'},
        ]
      }
    },
  }
</script>

<style scoped>
  .el-carousel__item .new-box {
    color: black;
    font-size: 18px;
    opacity: 0.75;
    margin: 80px 60px;   
    width: 460px;
  }
  
  .el-carousel__item .new-box a{
    text-decoration: none;
    color: black;  
  }

  .el-carousel__item{
    background-color: #d5d5e2;
    box-shadow: 0 2px 6px #DCDFE6, 0 0 6px #DCDFE6
  }
  
  .is-active {
    background: #faf8f8;
  }

  .el-carousel__item .new-box a span{
    font-size: 22px;
  }

  .el-carousel__item .new-box a p{
    padding: 8px;
  }
</style>