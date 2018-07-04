<template>
  <section class="login">
    <div class="login_wrap">
       <div class="login_con clearfix">
          <div class="login_img"></div>
          <div class="form_data">
             <div class="form_det">
                <div class="tags">用户名</div>
                <input type="text" class="searchbox_user" placeholder="请输入用户名">
                <div class="tags">密码</div>
                <input type="text" class="searchbox_pwd" placeholder="请输入密码">
                <button class="login_btn">登录</button>
             </div>
          </div>
       </div>
    </div>
  </section>
</template>
<script>
export default {
    name:"Login"
}
</script>
<style lang="scss">
.login{
    width: 100%;
    height: 100%;
    background-color: #f3f3f3;

    &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    }

    .login_wrap {
    width: 100%;
    height: 460px;
    display: inline-block;
    vertical-align: middle;

      .login_con {
      width: 370px;
      height: 460px;
      border-radius: 8px;
      background: #fff;
      margin: 0 auto;

        .login_img{
         width: 150px;
         height: 110px;
         margin: 0 auto;
         background-image: url("../assets/logo_login.png");
         background-repeat: no-repeat;
         background-size: 100% 100%;
         margin-top: 50px;
        }
        .form_data {
           position: relative;
          .form_det{
            position: absolute;
            top: 130px;
            left: 50%;
            transform: translate(-50%,-50%);
            .tags{
            font-size: 14px;
            color: #999999;
            line-height: 24px;
          }

          .searchbox_user{
            width:300px;
            height: 32px;
            background-color: #ffffff;
            border: solid 1px #e5e5e5;
            font-size: 12px;
            margin-bottom: 10px;
            background:url(../assets/pic.png) no-repeat 0 0;
            background-position: 8px 7px;
            padding-left:30px;
          }
          .searchbox_pwd{
            width:300px;
            height: 32px;
            background-color: #ffffff;
            border: solid 1px #e5e5e5;
            font-size: 12px;
            margin-bottom: 10px;
            background:url(../assets/lock.png) no-repeat 0 0;
             background-position: 8px 7px;
             padding-left:30px;
          }
          .login_btn{
            width: 300px;
            height: 32px;
            background-color: #168ce2;
            color: #ffffff;
            margin-top: 40px;
          }
        }  
          
        }
      }
    }
}
</style>
