<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex">
             <!-- Background image for card set in CSS! -->
          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Login</h5>
            <form class="form-signin" @submit.prevent="login">

              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.email" required>
                <label for="inputEmail">Email</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="user.password" required>
                <label for="inputPassword">Password</label>
              </div>

              <div class="btnGroup">
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
                <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
              </div>
              <hr class="my-4">
              <a class="d-block text-center mt-2 small" href="#" @click.prevent="registerForm">Register</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
  name: "LoginForm",
  data(){
    return {
      user: {
        email: "",
        password: ""
      },
      params: {
        client_id: "530571905826-okahmlm2ebe4df6kh0subvq34pfm1qcb"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
          width: 250,
          height: 50,
          longtitle: true
      }
    }
  },
  components: {
    GoogleLogin
  },
  mounted() {
    window.gapi.load('auth2', () =>  {
      window.gapi.signin2.render('google-signin-button', {
        onsuccess: this.onSignIn,
      })
    })
  },
  methods: {
    login() {
      console.log(this.user);
      this.$emit("login", this.user)
    },
    registerForm(){
      this.$emit("changePage", "register")
    },
    onSuccess(googleUser) {
      this.$emit('googleLogin', googleUser)
    },
    onFailure(googleUser) {
      // this.$emit('googleLogin', googleUser)
    }
  }
}
</script>

<style>
</style>