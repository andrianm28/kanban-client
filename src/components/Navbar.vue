<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light my-2">
    <a class="navbar-brand" href="#">H8 Kanban</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <GoogleLogin :params="params" :logoutButton=true :onSuccess="logout">Logout</GoogleLogin>
        </li>
    </div>
  </nav>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
  name: "Navbar",
  components: {
    GoogleLogin
  },
  data(){
    return {
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
  methods: {
    logout(){
      localStorage.clear()
      this.$emit("changePage","login")
    }
  }
}
</script>

<style>

</style>