import Vue from "vue"
import App from "./App.vue"
import GAuth from 'vue-google-oauth2'

const base_url = `http://localhost:3000`

const gauthOption = {
  clientId: '530571905826-okahmlm2ebe4df6kh0subvq34pfm1qcb.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

new Vue({
  render: h => h(App)
}).$mount("#app")

Vue.use(GAuth, gauthOption)