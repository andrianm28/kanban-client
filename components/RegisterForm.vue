<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex">
             <!-- Background image for card set in CSS! -->
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Register</h5>
            <form class="form-signin" @submit.prevent="register">

              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email" required>
                <label for="inputEmail">Email</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
                <label for="inputPassword">Password</label>
              </div>

              <div class="btnGroup">
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Register</button>
                <a href="#" @click.prevent="loginForm">Back to Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "RegisterForm",
  data (){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginForm() {
      this.$emit("changePage", "login")
    },
    register() {  
      const email = this.email
      const password = this.password
      console.log(email, password);
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/users/register/',
        data: {
          email: email,
          password: password
        }
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    }
  }
}
</script>

<style>
</style>