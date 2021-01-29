<template>
  <el-container>
    <!-- 左侧导航 -->
    <el-header style="background-color:rgb(239, 242, 247;padding:0px">
      <head-top></head-top>
    </el-header>
    <!-- 右侧 -->
    <el-main style="padding: 0">
      <el-row style="margin-top: 30px">
        <el-row type="flex" justify="center" style="font-size: 30px; margin-bottom: 20px">数据统计</el-row>
        <el-row :gutter="20"  align="center" class="row">
          <el-col :span="4" class="commen dateYellow">当日数据：</el-col>
          <el-col :span="4" class="commen color"> <span class="number">{{userCount}}</span> 新增用户</el-col>
          <el-col :span="4" class="commen color"> <span class="number">{{orderCount}}</span> 新增订单</el-col>
          <el-col :span="4" class="commen color"> <span class="number">{{getUserCount}}</span> 新增管理员</el-col>
        </el-row>
        <el-row :gutter="20" class="row">
          <el-col :span="4" class="commen date">总数据：</el-col>
          <el-col :span="4" class="commen color"> <span class="number">{{getOrderCount}}</span> 注册用户</el-col>
          <el-col :span="4" class="commen color"> <span class="number">{{adminDayCount}}</span> 订单</el-col>
          <el-col :span="4" class="commen color"> <span class="number">{{adminCount}}</span> 管理员</el-col>
        </el-row>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {userCount,orderCount,getUserCount,getOrderCount,adminDayCount,adminCount} from "../../api/getData";
export default {
  data() {
    return {
      userCount: null,
      orderCount: null,
      getUserCount: null,
      getOrderCount: null,
      adminDayCount: null,
      adminCount: null,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      const today = this.getNowFormatDate()
      Promise.all([userCount(today),orderCount(today),adminDayCount(today),getUserCount(),getOrderCount(), adminCount(),
      ]).then((res) => {
        this.userCount = res[0].count
        this.orderCount = res[1].count
        this.getUserCount = res[2].count
        this.getOrderCount = res[3].count
        this.adminDayCount = res[4].count
        this.adminCount = res[5].count
      });
    },
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
  },
};
</script>

<style lang="less" scoped>
.row{
  padding-left: 40px; 
  font-size: 20px;
  margin-top: 20px

}
.commen {
  width: 200px;
  height: 40px;
  padding: 7px;
  border-radius: 10px;
  text-align: center;
 
}
.dateYellow {
  background-color: rgb(255, 152, 0);
  color: #fff;
}
.color {
  background-color: rgb(229, 233, 242);
  font-size: 16px;
  .number{
    font-size:24px
  }
}
.date {
  background-color: rgb(32, 160, 255);
  color: #fff;
}
.el-col {
  margin-left: 20px;
}
</style>