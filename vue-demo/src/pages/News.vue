<template>
  <div class="main">
    <!-- 标题部分 -->
      <h3 class="char_tit clearfix">
        <p class="fl banner">banner图管理</p>
        <button id="" class="btn_add fr" type="button" style="margin-right: 8px;">新增资讯</button>
      </h3>
      <!-- 表格部分 -->
      <div class="tab_wrap">
        <table>
          <thead>
            <tr>
              <th>
                <el-checkbox></el-checkbox>
              </th>
              <th>
                <div>序号</div>
              </th>
              <th>
                <div>资讯简介</div>
              </th>
              <th>
                <div>内容图</div>
              </th>
              <th>
                <div>移动</div>
              </th>
              <th>
                <div>操作</div>
              </th>
            </tr>
          </thead>
          <tbody class="goods_show_table">
            <tr>
              <td title="">
                <el-checkbox></el-checkbox>
              </td>
              <td title="">
                <div>1</div>
              </td>
              <td title="">
                <div>资讯简介</div>
              </td>
              <td title="">
                <div>内容图</div>
              </td>
              <td>
                <div>
                  <img src="../assets/up-1.png" alt="">
                  <img src="../assets/up-2.png" alt="">
                  <img src="../assets/down-2.png" alt="">
                  <img src="../assets/down-1.png" alt="">
                </div>
              </td>
              <td title="">
                <div>修改</div>
              </td>
            </tr>
            <tr>
              <td title="">
                <el-checkbox></el-checkbox>
              </td>
              <td title="">
                <div>1</div>
              </td>
              <td title="">
                <div>图片描述</div>
              </td>
              <td title="">
                <div>正常</div>
              </td>
              <td>
                <div>
                  <img src="../assets/up-1.png" alt="">
                  <img src="../assets/up-2.png" alt="">
                  <img src="../assets/down-2.png" alt="">
                  <img src="../assets/down-1.png" alt="">
                </div>
              </td>
              <td title="">
                <div>修改</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
       <!-- 分页部分 -->
      <div class="page_wrap clearfix">
          <el-checkbox v-model="checked" class="checkAll">全选</el-checkbox>
          <button id="" class="btn_add" type="button">删除</button>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000" class="fr pages">
          </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
       checked: false
    };
  },
  components:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
 