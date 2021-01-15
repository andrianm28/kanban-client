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
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
                <label for="inputEmail">Email</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Password</label>
              </div>

              <div class="btnGroup">
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
                <!-- <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fa fa-google" style="font-size:14px"></i> Sign In</button> -->
                <div class="g-signin2" data-onsuccess="onSignIn" @click.prevent="onSignIn"></div>
              </div>
              <hr class="my-4">
              <a class="d-block text-center mt-2 small" href="#" @click.prevent="registerForm">Register</a>
            </form>
            <a href="#" @click.prevent="signOut">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "LoginForm",
  data(){
    return {

    }
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
      axios({
        method: `POST`,

      })
    },
    registerForm(){
      this.$emit("changePage", "register")
    },
    onSignIn(googleUser) {
      const profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    },
    signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
  }
}
</script>

<style>
</style>