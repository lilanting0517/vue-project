<template>
    <aside class="fl">
        <p class="fir_fl">商品管理</p>
        <ul class="sec_fl clearfix">
          <li @click="toHome()" v-bind:class="{ active: isActive1 }">
            <a href="javascript:;" title="banner图管理">banner图管理</a>
          </li>
          <li @click="toNews()" v-bind:class="{ active: isActive2 }">
            <a href="javascript:;" title="最新资讯管理">最新资讯管理</a>
          </li>
          <li @click="toPermission()" v-bind:class="{ active: isActive3 }">
            <a href="javascript:;" title="权限设置">权限设置</a>
          </li>
        </ul>
    </aside>
</template>
<script>
export default {
    name:"asideMenu",
    data() {
     return {
      isActive1: true,
      isActive2: false,
      isActive3: false
     };
    },
    methods:{
      toHome(){
        this.$router.push({ name: 'BannerManage' })
        this.isActive1 = true
        this.isActive2 = false
        this.isActive3 = false
      },
      toNews(){
        this.$router.push({ name: 'News' })
        this.isActive2 = true
        this.isActive1 = false
        this.isActive3 = false
      },
      toPermission(){
        this.$router.push({ name: 'Permission' })
        this.isActive3 = true
        this.isActive1 = false
        this.isActive2 = false
      }
    }
}
</script>
<style lang="scss">
    
    aside {
      position: fixed;
      height: 100%;
      width: 200px;
      top: 60px;
      padding-top: 30px;
      background-color: #fff;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

        .fir_fl {
         padding-left: 32px;
         line-height: 1em;
         margin-bottom: 10px;
         color: #ccc;
         font-size: 14px;
        }
        ul, ol {
        list-style: none;
        padding-left: 0;
        margin: 0;
        
          a {
          display: block;
          padding-left: 40px;
          border-left: 2px solid #fff;
          line-height: 34px;
          color: #555;
          }
          .active a {
          border-left: 2px solid #56bbfc;
          background-color: #fbfbfb;
          }
        }
    }
</style>


