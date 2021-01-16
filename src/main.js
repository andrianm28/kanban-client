import Vue from "vue"
import VueSimpleAlert from "vue-simple-alert";
import App from "./App.vue"

Vue.use(VueSimpleAlert, { reverseButtons: true })
Vue.use(require('vue-moment'));
new Vue({
  render: h => h(App)
}).$mount("#app")
