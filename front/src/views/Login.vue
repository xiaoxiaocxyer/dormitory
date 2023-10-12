<template>
  <div style="position:absolute;top:0px;bottom:0px;left:0px;right:0px;">
    <img alt="" src="../../public/1login_Team.png" style="height:100%;width:100%;position:absolute;top:0px;bottom:0px;left:0px;right:0px;"/>
    <div style="width: 400px;z-index:999;position:absolute;left:35%;top:120px;background:white;">
      <div style="height:100%;width:80%;margin-left:10%;">
        <div style="color: black; font-size: 25px; text-align: center; padding: 30px 0">高校宿舍管理系统</div>
      <el-form ref="form" :model="form" :rules="rules" size="large">
        <el-form-item prop="username">
          <el-input v-model="form.username" clearable prefix-icon="avatar"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="lock" show-password></el-input>
        </el-form-item>
        <el-form-item :model="form" prop="identity">
          <el-radio v-model="form.identity" label="stu" style="color: grey">学生</el-radio>
          <el-radio v-model="form.identity" label="dormManager" style="color: grey">宿舍管理员</el-radio>
          <el-radio v-model="form.identity" label="admin" style="color: grey">系统管理员</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button :disabled="!disabled" style="width: 100%;text-align:center;" type="primary" @click="login">登 录</el-button>
          <div style="width:100%;height:30px;"></div>
        </el-form-item>
      </el-form>
      </div>
    </div>
  </div>
</template>
<script src="@/assets/js/Login.js"></script>
<style scoped>@import '../assets/css/Login.css';</style>