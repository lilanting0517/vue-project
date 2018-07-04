<template>
  <div class="main">
    <!-- 标题部分 -->
      <h3 class="char_tit clearfix">
        <p class="fl banner">后台权限管理</p>
        <button id="" class="btn_add fr" type="button" style="margin-right: 8px;">新增</button>
        <button id="" class="btn_add fr" type="button" style="margin-right: 8px;">新增管理员</button>
        <span class="fr inputbox">
        <label for="">单位:</label>
        <input type="text" class="searchbox" placeholder="请输入单位ID/名称"></span>
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
                <div>单位ID</div>
              </th>
              <th>
                <div>图书馆单位名称</div>
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
                <div>242354524242</div>
              </td>
              <td title="">
                <div>北京新华书店黄寺大街分店</div>
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
                <div>3253536252352</div>
              </td>
              <td title="">
                <div>北京新华书店黄寺大街分店</div>
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
.searchbox{
  width:200px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e5e5e5;
  font-size: 12px;
}
label{
  font-size: 12px;
  color: #555555;
}
.inputbox{
  line-height: 44px;
  margin-right: 5px;
}
</style>
 