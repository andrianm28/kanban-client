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
    ></home>
  </div>
</template>

<script>
import axios from "axios"
import Home from './components/Home.vue'
import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'


export default {
  name: "App",
  data(){
    return {
      message: "Hello World",
      currentPage: "login",
      categories: [
        {
          id: 1,
          name: "Backlog",
        },
        {
          id: 2,
          name: "Todo",
        },
        {
          id: 3,
          name: "In Progress",
        },
        {
          id: 4,
          name: "Done",
        }
      ],
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
        url: 'http://localhost:3000/api/users/login/',
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
      console.log(user);
      const id_token = user.getAuthResponse().id_token
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/users/googleLogin/',
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
        url: 'http://localhost:3000/api/users/register/',
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
        url: 'http://localhost:3000/api/tasks/',
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
        url: 'http://localhost:3000/api/tasks/',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: task.title,
          category: task.category
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
        url: 'http://localhost:3000/api/tasks/'+id,
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
    }
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