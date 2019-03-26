<template>
    <div id="footer" class="footer">
        <div class="link-box">
            <dl>
                <dt>功能</dt>
                <dd><a href="/home">介绍</a></dd>
                <dd><a href="/download">下载</a></dd>
            </dl>
            <dl>
                <dt>常见问题</dt>               
                <dd><a href="/help">帮助中心</a></dd>   
                <dd><a href="#" target="_blank">发送问题</a></dd> 
            </dl>
            <dl>
                <dt>联系方式</dt>
                <dd>电话：0456-5555123</dd>
                <dd><a href="">邮箱：bbkt@mail.com</a></dd>    
            </dl>
            <div class="copyright">      
                Copyright ©2019-20xx · 百倍课堂 · 粤ICP备16015292号-1
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .footer {
        position: absolute;
        width: 100%;
        height: 200px;
        min-width: 1170px;
        background-color: #333;
        color: #777;
        margin-top: 150px;
    }
    .footer .link-box{
        position: relative;
        width: 100%;
        max-width: 1000px;
        min-width: 1000px;
        margin: 0 auto;
        text-align: center;
        color: rgb(175, 181, 185);
    }
    .footer .link-box dl {
        float: left;
        width: 33%;
        text-align: center;
        position: relative;
    }
    .footer .link-box dl dt {
        font-size: 16px;
        line-height: 40px;
    }
    .footer .link-box dl dd{
        margin: 0px;
        font-size: 15px;
        line-height: 40px;
        color: rgb(201, 204, 206);
    }
    .footer .link-box a{
        color: rgb(201, 204, 206);
        text-decoration: none;

    }
    .footer .link-box .copyright{
        position: relative;
        width: 100%;    
        color: rgb(175, 181, 185);
        font-size: 13px
    }
</style>
