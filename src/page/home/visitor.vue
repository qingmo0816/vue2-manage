<template>
  <el-container>
    <!-- 左侧导航 -->
    <el-header style="background-color:rgb(239, 242, 247;padding:0px">
      <head-top></head-top>
    </el-header>
    <!-- 右侧 -->
    <el-main style="padding: 0">
      <main-echarts :pieData="pieData"></main-echarts>
    </el-main>
  </el-container>
</template>

<script>
import {getUserCity} from "../../api/getData.js";
export default {
  data() {
    return {
      pieData: {},
    };
  },
  created(){
    this.initDatas()
  },
  methods: {
    async initDatas() {
      try {
        const res = await getUserCity();
        if (res.status == 1) {
          this.pieData = res.user_city;
        } else {
          throw new Error(res);
        }
      } catch (err) {
        console.log("获取用户分布信息失败", err);
      }
    },
  },
};
</script>

<style>
</style>