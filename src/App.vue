<template>
  <div class="div">
    <login-form 
    v-if="currentPage == 'login'"
    @changePage="changePage"
    @login="login"
    @googleLogin="googleLogin"
    ></login-form>
    <register-form 
    v-if="currentPage == 'register'"
    @changePage="changePage"
    @register="register"
    ></register-form>
    <home v-if="currentPage == 'home'"
    @changePage="changePage"
    :categories="categories"
    :tasks="tasks"
    @addTask="addTask"
    @deleteTask="deleteTask"
    @editTask="editTask"
    @addCategory="addCategory"
    @editCategory="editCategory"
    @deleteCategory="deleteCategory"
    ></home>
  </div>
</template>

<script>
import axios from "axios"
import Home from './components/Home.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'

const base_url = 'https://h8anban.herokuapp.com'

export default {
  name: "App",
  data(){
    return {
      message: "Hello World",
      currentPage: "login",
      categories: [],
      tasks: []
    }
  },
  components: {
    RegisterForm,
    LoginForm,
    Home
  },
  methods: {
    checkAuth(){
      if (localStorage.getItem('access_token')) {
        this.changePage('home')
        this.fetchAllTasks()
        this.fetchAllCategories()
      } else {
        this.changePage('login')
      }
    },
    changePage(payload) {
      this.currentPage = payload
    },
    login(user){
      axios({
        method: 'post',
        url: base_url+'/api/users/login/',
        data: {
          email: user.email,
          password: user.password
        }
      })
      .then(res => {
        console.log(res);
        localStorage.setItem('access_token', res.data.access_token)
        this.checkAuth()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
    googleLogin(user){
      const id_token = user.getAuthResponse().id_token
      axios({
        method: 'post',
        url: base_url+'/api/users/googleLogin/',
        data: {
          id_token: id_token
        }
      })
      .then(res => {
        console.log(res);
        localStorage.setItem('access_token', res.data.access_token)
        this.checkAuth()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
    register(user){
      axios({
        method: 'post',
        url: base_url+'/api/users/register/',
        data: {
          email: user.email,
          password: user.password
        }
      })
      .then(res => {
        console.log(res);
        this.changePage('login')
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
    fetchAllTasks(){
      axios({
        method: 'get',
        url: base_url+'/api/tasks/',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        console.log(res);
        this.tasks = res.data
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
    addTask(task){
      axios({
        method: 'post',
        url: base_url+'/api/tasks/',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: task.title,
          CatId: task.CatId,
        }
      })
      .then(res => {
        console.log(res);
        this.checkAuth()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
    deleteTask(id){
      axios({
        method: 'delete',
        url: base_url+'/api/tasks/'+id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        console.log(res);
        this.checkAuth()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
        this.$alert(err.response.data.message)
        this.checkAuth()
      })
    },
    editTask(task){
      console.log(task);
      axios({
        method: 'put',
        url: base_url+'/api/tasks/'+task.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: task.title,
          CatId: task.CatId
        }
      })
      .then(res => {
        console.log(res);
        this.checkAuth()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
        this.$alert(err.response.data.message)
        this.checkAuth()
      })
    },
    fetchAllCategories(){
      axios({
        method: 'get',
        url: base_url+'/api/categories/',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        console.log(res);
        this.categories = res.data
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
    addCategory(category){
      axios({
        method: 'post',
        url: base_url+'/api/categories/',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: category
        }
      })
      .then(res => {
        console.log(res);
        this.checkAuth()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
    editCategory(category){
      console.log(category);
      axios({
        method: 'put',
        url: base_url+'/api/categories/'+category.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: category.name
        }
      })
      .then(res => {
        console.log(res);
        this.checkAuth()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
    deleteCategory(id){
      axios({
        method: 'delete',
        url: base_url+'/api/categories/'+id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(res => {
        console.log(res);
        this.checkAuth()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data);
        }
      })
    },
  },
  created() {
    this.checkAuth()
  },
  computed: {
    
  }
}
</script>

<style>

</style>