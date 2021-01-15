<template>
  <div class="div">
    <login-form 
    v-if="currentPage == 'login'"
    @changePage="changePage"
    ></login-form>
    <register-form 
    v-if="currentPage == 'register'"
    @changePage="changePage"
    ></register-form>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'


export default {
  name: "App",
  data(){
    return {
      message: "Hello World",
      currentPage: "login"
    }
  },
  components: {
    RegisterForm,
    LoginForm
  },
  methods: {
    changePage(payload) {
      this.currentPage = payload
    }
  }
}
</script>

<style>

</style>