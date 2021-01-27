<template>
  <div class="Login fillcontain">
    <div class="login">
      <div class="loginTitle">ele后台管理系统</div>
      <div class="loginForm">
        <el-form :model="rulesForm" ref="rulesForm" :rules="rules">
          <el-form-item prop="name">
            <el-input placeholder="用户名" v-model="rulesForm.name"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              placeholder="密码"
              v-model="rulesForm.password"
              type="password"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="loginForm('rulesForm')"
            >登录</el-button
          >
        </el-form>
        <p class="text">温馨提示：</p>
        <p class="text">未登录过的新用户，自动注册</p>
        <p class="text">注册过的用户可凭账号密码登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/getData";
export default {
  data() {
    return {
      rulesForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async loginForm(rulesForm) {
      this.$refs[rulesForm].validate(async (valid) => {
        if (valid) {
          const res = await login({
            user_name: this.rulesForm.name,
            password: this.rulesForm.password,
          });
          if (res.status === 1) {
            this.$message({
              type: "success",
              message: res.success,
            });
            this.$router.push({ name: "home" });
          }
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../style/mixin.less";
.Login {
  background-color: rgb(50, 64, 87);
}
.login {
  padding-top: 150px;
  .loginTitle {
    color: #fff;
    text-align: center;
    font-size: 22px;
  }
  .loginForm {
    width: 350px;
    height: 280px;
    background-color: #fff;
    margin: auto;
    margin-top: 70px;
    border-radius: 10px;
    padding: 20px, 40px;
    .el-form {
      padding: 20px;
    }
    .el-button {
      width: 310px;
    }
    .text {
      font-size: 16px;
      color: red;
      text-align: center;
    }
  }
}
</style>
<style>
</style>