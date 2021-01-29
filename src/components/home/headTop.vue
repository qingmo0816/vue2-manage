<template>
  <el-row type="flex" align="middle" style="padding-left: 20px">
    <el-col :span="22">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{
          item
        }}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="2">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link"></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="main">首页</el-dropdown-item>
          <el-dropdown-item command="goBack">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import { signout } from "@/api/getData";
import { baseImgPath } from "@/config/env";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      baseImgPath,
    };
  },
  created() {
    if (!this.adminInfo.id) {
      this.getAdminData();
    }
  },
  computed: {
    ...mapState(["adminInfo"]),
  },
  methods: {
    ...mapActions(["getAdminData"]),
    async handleCommand(command) {
      if (command == "main") {
        this.$router.push({path: '/manage'});
      } else if (command == "goBack") {
        const res = await signout();
        if (res.status == 1) {
          this.$message({
            type: "success",
            message: "退出成功",
          });
          this.$router.push("/");
        } else {
          this.$message({
            type: "error",
            message: res.message,
          });
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.el-dropdown-link {
  display: block;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: url("../../assets/img/avator.jpg") no-repeat center;
  background-size: 50px 50px;
}
</style>