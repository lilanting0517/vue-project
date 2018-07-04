<template>
  <div id="app">
    <!-- <div class="home_wrap">
      <head-top></head-top>
    <section>
      <aside-menu></aside-menu>
      <div class="main_wrap">
        <router-view/>
      </div>
    </section>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HeadTop from "@/components/HeadTop";
import asideMenu from "@/components/asideMenu";

export default {
  name: "App",
  components: {
    HeadTop,
    asideMenu
  }
};
</script>

<style lang="scss">
@import "./src/common/css/mixin/_normalize";
@import "./src/common/css/mixin/_clearfix";
@import "./src/common/css/base";
@import "./src/common/css/mixin/_normalize";

body {
  font-size: 14px;
  font-family: "Microsoft Yahei";
}
#app {
  height: 100%;
}
.home_wrap {
  width: 100%;
  height: auto;
  min-height: 100%;
  background-color: #f3f3f3;
  overflow: hidden;


  section {
    width: 1200px;
    margin: 0 auto;
    margin-top: 60px;
    overflow: hidden;
    overflow-y: auto;

    .main_wrap{
      overflow-y: auto;
      height: auto;
      margin-left: 200px;
      padding: 15px 0 0 15px;
      background-color: transparent;

       .main {
        width: 100%;
        height: auto;
        min-height: 760px;
        margin-bottom: 30px;

        .char_tit {
          height: 44px;
          padding: 0 10px 0 33px;
          margin-bottom: 5px;
          background-color: #fff;

          .banner{
            color: #555555;
            font-size: 14px;
            line-height: 44px;
          }
          .btn_add{
            width: 75px;
            height: 24px;
            border-radius: 4px;
            background-color: #f2f2f2;
            border: solid 1px #f2f2f2;
            font-size: 12px;
            margin-top: 10px;
          }
        }

        .tab_wrap {
          font-size: 14px;
          background-color: #fff;

          table thead>tr {
            height: 36px;
           background-color: #e8f2fe;

            div {
              line-height: 16px;
              padding: 5px;
              word-break: break-all;
              word-wrap: break-word;
              font-size: 12px;
              color: #555555;
              font-weight: normal;
              font-family: MicrosoftYaHei;
            }
          }
           table tbody {

            div {
              line-height: 16px;
              padding: 5px;
              word-break: break-all;
              word-wrap: break-word;
              font-size: 12px;
              color: #555555;
              font-weight: normal;
              font-family: MicrosoftYaHei;
            }
          }
        }

        .page_wrap {
         padding: 0;
         margin-top: 7px;
         background:#ffffff;

         .checkAll{
            line-height: 44px;
            margin-left: 22px;
         }
         .pages {
          margin-top: 4px;

          li{
           border: solid 1px #cccccc;
           margin: 2px;
           color: #555555;
           font-size: 12px;
           font-weight: normal;
          }
          button{
           border: solid 1px #cccccc;
           margin: 2px;
          }
         }
         .btn_add{
            width: 48px;
            height: 24px;
            border-radius: 4px;
            background-color: #f2f2f2;
            border: solid 1px #f2f2f2;
            font-size: 12px;
            margin-left: 10px;
         }
        }
      }
    }
  }
}
</style>
