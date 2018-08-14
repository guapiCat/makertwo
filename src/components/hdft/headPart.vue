<template>
    <div style="height: 130px">
        <div v-bind:class="{fixed_switch:scoSwitch}">
            <div class="hd_top">
                <div v-bind:class="{hd_lf_hid:headSwich}">
                    <img class="hd_logo" src="../../assets/img/logo_shenlong.png" alt="">
                    <span class="hd_scl">神龙小学创客平台</span>
                </div>
                <img src="../../assets/img/bj_03.png" style="margin: 0 8%;height: 80px;" alt="">
                <div v-bind:class="{hd_rt_hid:headSwich}">
                    <img class="hd_msg" src="../../assets/img/icon_xiaoxi01.png" alt="">
                    <span class="hd_num"></span>
                    <el-dropdown>
                        <img class="hd_tx el-dropdown-link" src="../../assets/img/icon_touxiang01.png" alt="">
                        <el-dropdown-menu slot="dropdown">
                            <div class="drop_div">
                                <div class="drop_msg">
                                    <img style="height: 50px;border-radius: 50%" src="../../../static/img/icon_touxiang02.png" alt="">
                                    <span class="drop_msg_name">小明同学</span>
                                    <span class="drop_msg_id">ID：124324132413</span>
                                    <span class="drop_msg_scl">六年级一班  神龙小学</span>
                                </div>
                                <img style="margin-left: 40px" class="verAlignMid" src="../../../static/img/icon_jifen.png" alt="">
                                <span class="verAlignMid colorGray">我的积分：8000分 （仅在指定商场使用）</span>
                                <button class="enter_store c_pointer">进入积分商城兑换</button>
                                <div class="drop_manage">
                                    <div>
                                        <img src="../../../static/img/icon_zhuye02.png" alt="">
                                        <p>个人主页</p>
                                    </div>
                                    <div class="works_manage">
                                        <img src="../../../static/img/icon_zuopin02.png" alt="">
                                        <p>作品管理</p>
                                    </div>
                                    <div>
                                        <img src="../../../static/img/icon_kecheng02.png" alt="">
                                        <p>课程管理</p>
                                    </div>
                                </div>
                                <div class="user_manage">
                                    <span class="colorBlue c_pointer">账户设置</span>
                                </div>
                            </div>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span class="hd_id">ID:2334124234212</span>
                    <button class="upload_work">上 传 作 品</button>
                </div>
            </div>
            <div class="hd_bot" v-bind:class="{hd_bot_hid:headSwich}">
                <div class="hd_bot_p">
                    <p>首页</p>
                    <p>作品</p>
                    <p>课程</p>
                </div>
                <div class="hd_bot_ss">
                    <input class="cg_input ss_p" type="text" placeholder="输入作品或课程名称">
                    <span class="ss_works">
                        <ul class="works_ul">
                            <li>作品&nbsp; ∨</li>
                            <li>课程</li>
                            <li>作品</li>
                            <li>作品</li>
                            <li>作品</li>
                        </ul>
                    </span>
                    <span class="ss_ss">
                        <img class="verAlignMid" src="../../../static/img/icon_sousuo02.png" alt="">  搜索
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
        data() {
            return {
                headSwich: false,
                scoSwitch: false
            }
        },
        methods: {
            handleScroll:function(){
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                if (scrollTop > 0) {
                    this.scoSwitch = true
                } else {
                    this.scoSwitch = false
                }
                // console.log(this.scoSwitch);
            }
        },
        created: function () {
            var pathMsg = this.$route.path;
            if (pathMsg.indexOf("/enter/") > -1) {
                this.headSwich = false
            } else {
                this.headSwich = true
            }
            // 头部监听
            window.addEventListener("scroll", this.handleScroll,true)
        }
    }
</script>

<style scoped>
    /*修改下拉菜单样式start*/
    .el-dropdown-menu{
        padding: 0px;
        margin-top: 22px;
    }
    .popper__arrow{
        left: 240.5px !important;
    }
    /*修改下拉菜单样式end*/
    .user_manage{
        padding: 16px;
        background: #FBFBFB;
        border-top: 1px solid #eeeeee;
        margin-top: 30px;
    }
    .works_manage{
        border-right: 2px solid #EEEEEE;
        border-left: 2px solid #EEEEEE;
    }

    .drop_manage p{
        font-size: 20px;
        padding: 0px 30px;
    }
    .drop_manage img{
        width: 50px;
        margin: 4px 0px;
    }
    .drop_manage div{
        text-align: center;
        cursor: pointer;
    }
    .drop_manage div:hover{
        color: #3688FF;
    }
    .drop_manage{
        display: flex;
        justify-content: center;
    }
    .enter_store{
        display: block;
        margin: 20px auto;
        height: 40px;
        width: 370px;
        border: none;
        border-radius: 4px;
        font-size: 17px;
        color: white;
        background: #76ACFA;
    }
    .drop_msg{
        position: relative;
        background: #FBFBFB;
        padding: 6px 20px;
        border-bottom: 1px solid #EEEEEE;
        margin-bottom: 20px;
    }
    .drop_msg_name{
        position: absolute;
        left: 76px;
        font-weight: bold;
    }
    .drop_msg_id{
        position: absolute;
        top: 32px;
        left: 76px;
        color: gray;
    }
    .drop_msg_scl{
        position: absolute;
        left: 200px;
        color: gray;
    }
    .drop_div{
        width: 450px;
    }
    /*未登录头部start*/
    .fixed_switch {
        position: fixed;
        width: 100%;
        background: white;
        z-index: 100;
        opacity: 0.97;
    }

    .hd_bot_hid {
        height: 4px !important;
        overflow: hidden;
    }

    .hd_rt_hid {
        display: none;
    }

    .hd_lf_hid {
        margin-right: 10%;
    }

    /*未登录头部end*/
    .upload_work {
        height: 36px;
        width: 100px;
        background: #66BBFA;
        outline: none;
        color: white;
        font-weight: bold;
        font-size: 14px;
        border: 1px solid #66BBFA;
        border-radius: 6px;
        position: relative;
        top: 10px;
        margin-left: 20px;
        cursor: pointer;
    }

    .upload_work:hover {
        color: #66BBFA;
        background: whitesmoke;
    }

    .hd_id {
        position: relative;
        top: 10px;
        color: #5F9EED;
        font-size: 13px;
        margin-left: 4px;
    }

    .hd_tx {
        position: relative;
        top: 24px;
        border-radius: 50%;
    }

    .hd_msg {
        position: relative;
        top: 16px;
        margin-right: 10px;
    }

    .hd_logo {
        height: 60px;
        padding-top: 10px;
        padding-right: 20px;
    }

    .hd_scl {
        font-size: 17px;
        font-weight: bold;
        position: relative;
        top: -20px;
    }

    .hd_top {
        display: flex;
        justify-content: center;
    }

    .cg_input::-webkit-input-placeholder {
        color: white;
    }

    .cg_input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: white;
    }

    .cg_input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: white;
    }

    .cg_input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: white;
    }

    .hd_bot {
        display: flex;
        justify-content: center;
        height: 50px;
        line-height: 50px;
        width: 100%;
        background: #3688FF;
    }

    .hd_bot_p {
        margin-right: 8%;
        position: relative;
        left: -10%;
    }

    .hd_bot_p > p {
        float: left;
        color: white;
        font-size: 18px;
        margin: 0px 30px;
        cursor: pointer;
        padding: 0 10px;
    }

    .hd_bot_p > p:hover {
        background: #66A2FA;
        transition: all .3s linear;
        /*text-decoration: underline;*/
        /*text-decoration-color: #FFC300;*/
    }

    .ss_p {
        border: 2px solid white;
        border-right: 1px solid white;
        background: #3688FF;
        height: 28px;
        width: 220px;
        border-radius: 30px 0px 0px 30px;
        color: white;
        padding-left: 10px;
        outline: none;
    }

    .hd_bot_ss {
        position: relative;
    }

    .ss_works {
        position: absolute;
        left: 232px;
        width: 80px;
        height: 28px;
        line-height: 28px;
        top: 11px;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        text-align: center;
        color: white;
        border-right: 1px solid white;
        cursor: pointer;
        overflow: hidden;
    }

    .ss_works:hover {
        overflow: visible;
    }

    .ss_ss {
        position: absolute;
        top: 11px;
        left: 312px;
        width: 80px;
        color: #428FFF;
        height: 28px;
        line-height: 30px;
        text-align: center;
        border: 2px solid white;
        border-left: none;
        border-radius: 0px 20px 20px 0px;
        cursor: pointer;
        background-color: #D7E7FF;
    }

    .works_ul {
        background: #3688FF;
        width: 78px;
        position: relative;
        top: 0px;
        left: 2px;
        padding-left: 0px;
        text-align: center;
        border-radius: 0 0 6px 6px;
        z-index: 100;
    }
</style>