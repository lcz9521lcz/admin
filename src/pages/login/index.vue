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
        <el-button type="primary" class="btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      username: "",
      password: ""
    };
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
