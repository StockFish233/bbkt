<template>
  <el-carousel :interval="6000" type="card" height="480px" indicator-position="none">
    <el-carousel-item v-for="(item,index) in news" :key="index" 
      :class="{'is-active': index === activeIndex}">
      <div class="new-box">
        <a target="_blank" :href="item.url">
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
          {title:'思政课堂 点亮青年信仰',time:'2018.2.27',text:'……在清华大学的思政课堂上，手机从“低头的工具”变成了“抬头的利器”。老师和学生通过扫描二维码连接微信，将学生在微信上的答题和评论一一投射在大屏幕上。通过“雨课堂”的答题和弹幕功能，老师可以现场对学生进行测试和学习成效调查”。',press:'中国教育报',url:'http://paper.jyb.cn/zgjyb/html/2018-02/27/content_494742.htm?div=-1'},
          {title:'中国慕课，与世界一流比肩',time:'2018.1.16',text:'……到2013年清华大学发起建立全球第一个中文慕课“学堂在线”，到2015年教育部提出构建具有中国特色的在线开放课程体系和课程平台，再到2016年智慧教学工具“雨课堂”覆盖课前、课上、课后的每一个教学环节”。',press:'人民日报',url:'http://edu.people.com.cn/n1/2018/0116/c1006-29766213.html'},
          {title:'思政课“混合教学”让手机变成“抬头利器”',time:'2018.1.16',text:'……清华大学在线教育办公室和学堂在线共同研发的智慧教学辅助工具“雨课堂”已经在清华大学不少思政课堂中使用。老师和学生通过扫描二维码连接微信，将学生在微信上的答题和评论一一投射在大屏幕上。通过“雨课堂”的答题和弹幕功能，可以现场对学生进行测试和学习成效调查”。',press:'中国青年报',url:'http://zqb.cyol.com/html/2018-01/16/nw.D110000zgqnb_20180116_9-03.htm'},
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