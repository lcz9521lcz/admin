<template>
  <div class="login-container">
    <el-form :label-position="labelPosition" label-width="80px">
      <el-form-item>
        <div class="avatar">
          <img src="@/assets/avatar.jpg" alt>
        </div>
      </el-form-item>
      <el-form-item label="用户名:">
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="btn" @click="btnLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导入请求接口
import { fetch_login } from "@/api";

export default {
  data() {
    return {
      labelPosition: "right",
      username: "",
      password: ""
    };
  },
  methods: {
    btnLogin() {
      if (!this.username.trim() || !this.password.trim()) {
        return this.$message({
          message: "请输入用户名或密码",
          type: "warning"
        });
      }
      const params = {
        username: this.username,
        password: this.password
      };
      fetch_login(params).then(result => {
        console.log(result);
        if (result.data.meta.status === 200) {
          // 由于后续所有请求都需要用到token,所以需要将token存储到localStorage中
          localStorage.setItem("token", result.data.data.token);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  width: 500px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 11px #ccc;
  margin: 110px auto;
  padding: 30px;
  .avatar {
    width: 120px;
    height: 120px;
    position: relative;
    border: 10px solid #fff;
    border-radius: 50%;
    left: 115px;
    margin-top: -100px;
    margin-bottom: 33px;
    overflow: hidden;
    box-shadow: 0 0 11px #ccc;
  }
  .btn {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
