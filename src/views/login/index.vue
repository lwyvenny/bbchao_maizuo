<template>
  <div class="page-login">
    <!-- 一级路由页面 登录页 -->
    <h1>登录页</h1>
    <input type="text" placeholder="用户名">
    <input type="password" placeholder="密码">
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleLogin () {
      let redirect = this.$route.query.redirect || '/films'
      window.localStorage.setItem('userinfo', JSON.stringify({ name: 'BB超' }))
      this.$router.replace(redirect)
    }
  }
}
</script>
