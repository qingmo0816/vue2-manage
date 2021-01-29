<template>
  <el-container>
    <!-- 左侧导航 -->
    <el-aside>
      <left-menu></left-menu>
    </el-aside>
    <!-- 右侧 -->
    <el-main>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </el-main>
  </el-container>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}
.el-header {
  padding: 0px;
}
.el-main {
  padding: 0px;
}
</style>