<template>
    <div class="index">
        <!--section1轮播-->
        <section class="section1">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in bannerMsg">
                    <img :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </section>
        <!--section2-发现-->
        <section class="section2">
            <div class="commDiv">
                <p class="ver_mid">
                    <img src="../../static/img/icon_faxian.png" alt="">
                    <span class="colorTitle">发现</span>
                </p>
                <el-container>
                    <el-aside class="se2_aside" width="800px" height="550px">
                        <p>
                            <span class="colorBlue se2_title">探究风力发电</span>
                            <span>上传时间：2017-1-1 18:00</span>
                            <br><br>
                            <img class="verAlignMid" src="../../static/img/icon_touxiang01.png" alt="">
                            <span class="verAlignMid">小明同学  一年级一班  小学  指导老师：王富贵</span>
                        </p>
                        <p>
                            <video controls="controls" height="400px" src="http://video.pearvideo.com/mp4/adshort/20180810/cont-1408923-12640554_adpkg-ad_hd.mp4"></video>
                        </p>
                        <p class="se2_bot">
                            <span>快速评论&nbsp;&nbsp; </span><input class="se2_inp" type="text">
                            <button class="se2_btn c_pointer">发  布</button>
                            <img class="c_pointer" src="../../static/img/icon_liulan02.png" alt="">
                            <span class="c_pointer">2000次 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <img class="c_pointer" src="../../static/img/icon_dianzan01.png" alt="">
                            <span class="c_pointer">1888次</span>
                        </p>
                    </el-aside>
                    <el-main width="350px">
                        <el-card shadow="hover" class="box-card c_pointer" v-for="item in 3">
                            <img class="se2_rtcard" style="" src="../../static/img/tupian01.png" alt="">
                            <div style="padding:8px 0 20px 150px">
                                <span>探究风力发电</span>
                                <br>
                                <span>2018-10-10 14:00</span>
                                <br>
                                <span class="se2_border"></span>
                                <br>
                                <img class="verAlignMid" src="../../static/img/icon_touxiang01.png" alt="">
                                <span class="verAlignMid">小明同学</span>
                                <br>
                                <span>一年级一班 &nbsp;&nbsp;&nbsp;&nbsp;小学</span>
                            </div>
                        </el-card>
                    </el-main>
                </el-container>
            </div>
        </section>
        <!--section3作品-->
        <section class="section3">
            <div class="commDiv">
                <p class="ver_mid c_pointer">
                    <img src="../../static/img/icon_zuopin.png" alt="">
                    <span class="colorTitle">作品</span>
                    <img src="../../static/img/icon_fenjiexian.png" alt="">
                    <span>  最新作品 </span>
                    <img src="../../static/img/icon_fenjiexian.png" alt="">
                    <span>  热门作品 </span>
                </p>
                <el-card shadow="hover" class="se3_card c_pointer" :body-style="{ padding: '0px' }" v-for="item in 8">
                    <img src="../../static/img/tupian02.png" style="width: 270px;height: 160px;" class="image">
                    <div style="padding: 10px;">
                        <p>
                            <span class="se3_title">小火车</span>
                            <span class="floatR">2018-10-10</span>
                        </p>
                        <p class="se3_mid">
                            <img src="../../static/img/icon_liulan01.png" alt="">
                            <span>20000次</span>
                            <img src="../../static/img/icon_dianzan01.png" alt="">
                            <span>10999次</span>
                        </p>
                        <p class="se3_bot">
                            <img style="height: 30px" src="../../static/img/icon_touxiang01.png" alt="">
                            <span class="colorBlue">小明同学</span>
                            <span style="overflow: hidden">一年级一班 &nbsp;&nbsp; 小学</span>
                        </p>
                    </div>
                </el-card>
            </div>
        </section>
        <!--section4-课程-->
        <section class="section4">
            <div class="commDiv">
                <p class="ver_mid">
                    <img src="../../static/img/icon_kecheng.png" alt="">
                    <span class="colorTitle">课程 </span>
                    <img src="../../static/img/icon_fenjiexian.png" alt="">
                    <span class="colorGree">最新课程</span>
                </p>
                <el-container class="se4_cont">
                    <el-container>
                        <el-header class="se4_pos" height="">
                            <img style="width: 750px;height: 250px;margin-left: -20px" src="../../static/img/tupian10.png" alt="">
                            <p class="se4_ab1">
                                <span class="se4_title">  少儿编程课程</span> <br>促进大脑逻辑思维开发
                            </p>
                        </el-header>
                        <el-main>
                            <div class="se4_div">
                                <img style="width: 360px;height: 230px;margin-right: 25px" src="../../static/img/tupian11.png" alt="">
                                <p  class="se4_ab2">
                                    <span class="se4_title">  机器人课程</span>
                                    <br> 体验式的学习方式， <br> 让孩子真正动手设计和制作机器人模型
                                </p>
                            </div>
                            <div class="se4_div">
                                <img style="width: 360px;height: 230px" src="../../static/img/tupian12.png" alt="">
                                <p class="se4_ab3">
                                    <span class="se4_title">  3D课程</span>
                                    <br> 将虚拟变为现实， <br> 每堂课学习都会得到自己创作的3D作品
                                </p>
                            </div>
                        </el-main>
                    </el-container>
                    <el-aside width="420px"  class="se4_pos">
                        <img style="height: 510px;width: 400px;" src="../../static/img/tupian13.png" alt="">
                        <p class="se4_ab4">
                            <span class="se4_title">  三合一steam课程</span>
                            <br> scartch编程-机器人-3D打印
                        </p>
                    </el-aside>
                </el-container>
            </div>
        </section>
        <!--section5-创客小明星-->
        <section class="section5">
            <div class="commDiv">
                <p class="ver_mid">
                    <img src="../../static/img/icon_xiaomingxing.png" alt="">
                    <span class="colorTitle">创客小明星</span>
                </p>
                <el-card class="se5_card c_pointer" :data-class="index" shadow="hover" v-for="(item,index) in 6" style="display: inline-block">
                    <div class="se5_ab se5_ab1">
                        <img style="width: 50px;border-radius: 50%" src="../../static/img/icon_touxiang02.png" alt="">
                    </div>
                    <div class="se5_ab se5_ab2">
                        <img style="width: 160px;height: 140px" src="../../static/img/tupian14.png" alt="">
                    </div>
                    <div class="se5_ab se5_ab3">
                        <span class="colorRed se5_woknum">8 </span>个作品
                    </div>
                    <div class="se5_midp">
                        <p>小明同学</p>
                        <p>六年级一班  小学</p>
                        <p class="se5_msg">
                            <img src="../../static/img/icon_liulan01.png" alt="">
                            <span>2000次</span>
                            <img src="../../static/img/icon_dianzan01.png" alt="">
                            <span>1888次</span>
                            <img src="../../static/img/icon_liuyan02.png" alt="">
                            <span>10次</span>
                        </p>
                    </div>
                    <div class="se5_bot_div">
                        <p class="colorGree">个性标签</p>
                        <p style="font-style: italic;margin-top: 10px;">榜样在前，路在脚下！</p>
                    </div>
                </el-card>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        name: "index",
        data(){
            return {
                bannerMsg: [
                    {url:"../../static/img/banner001.png"},
                    {url:"../../static/img/banner002.png"},
                    {url:"../../static/img/banner003.png"},
                    {url:"../../static/img/banner004.png"}
                ]
            }
        }
    }
</script>

<style scoped>
    .se5_card[data-class="0"]{
        background-color: #DBE7F6;
    }
    .se5_card[data-class="1"]{
        background-color: #E5ECF6;
    }
    .se5_card[data-class="2"]{
        background-color: #EBEEF5;
    }
    .se5_card[data-class="3"]{
        background-color: #E6E1EC;
    }
    .se5_card[data-class="4"]{
        background-color: #E6F0DF;
    }
    .se5_card[data-class="5"]{
        background-color: #E0EDEE;
    }
    .se5_bot_div{
        width: 180px;
        color: #707274;
        margin-top: 20px;
    }
    .se5_msg *{
        vertical-align: middle;
    }
    .se5_midp{
        font-size: 13px;
        padding-left: 44px;
    }
    .se5_woknum{
        font-style: italic;
        font-size: 27px
    }
    .se5_ab3{
        left: 280px;
        top: 40px;
        font-size: 18px;
    }
    .se5_ab1{
        top: 10px;
        left: 4px;
    }
    .se5_ab2{
        top: 94px;
        left: 210px;
    }
    .se5_ab{
        position: absolute;
    }
    .se5_card{
        width: 380px;
        height: 240px;
        margin: 6px;
        position: relative;
    }
    .se4_title{
        font-size: 19px;
        font-weight: bold;
        color: white;
    }
    .se4_cont{
        color: white;
    }
    .se4_ab4{
        position: absolute;
        top: 0px;
        width: 360px;
        height: 69px;
        padding: 20px;
        background-color: rgba(241,200,66,0.7);
    }
    .se4_ab3{
        position: absolute;
        top: 132px;
        width: 320px;
        padding: 20px;
        height: 60px;
        background-color: rgba(49,163,178,0.7);
    }
    .se4_ab2{
        position: absolute;
        top: 132px;
        left: 0px;
        padding: 20px;
        height: 58px;
        width: 320px;
        background-color: rgba(59,119,171,0.7);
    }
    .se4_ab1{
        position: absolute;
        top: 0px;
        left: 0px;
        height: 210px;
        padding: 20px;
        background-color: rgba(80,173,96,0.7);
    }
    .se4_pos{
        position: relative;
        margin-bottom: 30px;
    }
    .se4_div{
        display: inline-block;
        position: relative;
    }
    .se3_card span{
        font-size: 13px;
    }
    .se3_mid{
        margin: 4px 0;
    }
    .se3_mid *{
        vertical-align: middle;

    }
    .se3_bot *{
        vertical-align: middle;
    }
    .se3_title{
        font-size: 18px;
        font-weight: bold;
    }
    .se2_border{
        border: 3px solid #E9613D;
        display: inline-block;
        width: 30px;
        margin: 12px 0;
    }
    .se2_rtcard{
        height: 190px;
        width: 150px;
        float: left;
        margin: -20px;
    }
    .se2_bot *{
        vertical-align: middle;
    }
    /*.se2_btn:hover{*/
        /*border: 1px solid #84B3F6;*/
        /*background: white;*/
        /*color: #84B3F6;*/
    /*}*/
    .se2_btn{
        color: white;
        background: #84B3F6;
        width: 70px;
        height: 24px;
        border: none;
        border-radius: 4px;
        margin-right: 100px;
    }
    .se2_inp{
        border: 1px solid #E7E7E7;
        height: 22px;
        border-radius: 6px;
        background: white;
        margin-right: 20px;
    }
    .se2_bot{
        margin-top: 20px;
    }
    .se2_title{
        font-size: 18px;
        padding-right: 340px;
        font-weight: bold;
    }
    section span{
        color: #707274;
    }
    .ver_mid{
        margin: 14px 0px;
    }
    .ver_mid *{
        vertical-align: middle;
    }
    .se3_card{
        width: 270px;
        display: inline-block;
        height: 260px;
        margin: 14px 12px;
    }
    .se2_aside{
        border: 1px solid #EBEBEB;
        background: #F9FDFE;
        padding: 30px;
    }
    .el-main{
        padding: 0px;
    }
    .box-card{
        width: 370px;
        height: 190px;
        margin: 4px 20px;
    }
    .el-carousel__item img {
       width: 100%;
    }
    section:not(:first-child){
        padding: 20px 0px;
    }
    section:nth-child(2n+1):not(:first-child){
        background: #F3F4F6;
    }
</style>
