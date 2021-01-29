<template>
  <el-menu
    :default-active="$route.path"
    background-color="#324057"
    text-color="#ddd"
    router
    unique-opened
  >
    <el-menu-item index="/manage">
      <i class="el-icon-menu"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>数据管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/userList">用户列表</el-menu-item>
        <el-menu-item index="/shopList">商家列表</el-menu-item>
        <el-menu-item index="/foodList">食品列表</el-menu-item>
        <el-menu-item index="/orderList">订单列表</el-menu-item>
        <el-menu-item index="/adminList">管理员列表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-plus"></i>
        <span>添加数据</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/addShop">添加商铺</el-menu-item>
        <el-menu-item index="/addGoods">添加商品</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-star-on"></i>
        <span>图表</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/visitor"
          >用户分布</el-menu-item
        > </el-menu-item-group
      >>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-edit"></i>
        <span>编辑</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/vueEdit">文本编辑</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/adminSet">管理员设置</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-warning"></i>
        <span>说明</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/explain">说明</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
@import "../../style/mixin.less";
.el-menu {
  min-height: 100%;
  border-right-width: 0;
}
</style>