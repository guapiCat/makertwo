<template>
    <div class="hello">
        <div class="my_bd">
            <p class="bd_p">欢迎登陆某某创客小学平台</p>
            <div class="bd_div">
                <div>
                    <input class="btn_all bd_btn1" type="text" placeholder="请输入用户名/学号/手机号">
                    <img src="" alt="">
                    <br>
                    <input class="btn_all bd_btn2" type="password" placeholder="请输入密码">
                    <img src="" alt="">
                    <br>
                    <button class="login_btn">登陆</button>
                </div>
                <div style="height: 270px;border-right: 1px solid #F3F3F3;margin: 0 20px;"></div>
                <div class="bd_rt">
                    <p style="color: red">温馨提示：<br><br></p>
                    <p>如果您不知道或者不记得账号和密码，<br><br>请联系学校老师或者管理员</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="es6">
    export default {
        name: 'hello',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }

</script>

<style scoped>
    .bd_btn1{
        background-image: url("../../assets/img/icon_yonghu.png");
        background-repeat: no-repeat;
        background-position: 2% 40%;
    }
    .bd_btn2{
        background-image: url("../../assets/img/icon_mima.png");
        background-repeat: no-repeat;
        background-position: 2% 40%;
    }
    .bd_rt{
        background-image: url("../../assets/img/denglu_bj02.png");
        width: 400px;
        height: 250px;
        font-size: 13px;
        color: #989997;
    }
    .login_btn{
        width: 370px;
        height: 40px;
        background: #009AFF;
        color: white;
        border: 1px solid #009AFF;
        border-radius: 4px;
        cursor: pointer;
    }
    .btn_all{
        width: 370px;
        height: 36px;
        border-radius: 4px;
        border: 1px solid #DFE6E9;
        margin-bottom: 50px;
        box-sizing: border-box;
        padding-left: 40px;
    }
    .bd_div{
        justify-content: center;
        display: flex;
    }
    .bd_p{
        width: 100%;
        text-align: center;
        font-size: 22px;
        color: #3688FF;
        font-weight: bold;
        margin-bottom: 50px;
    }
    .my_bd{
        background-image: url("../../assets/img/denglu_bj01.png");
        background-size: 100% 100%;
        width: 100%;
        height: 600px;
        box-sizing: border-box;
        padding-top: 100px;
    }
</style>