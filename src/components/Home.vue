<template>
  <div class="container">
    <navbar @changePage="changePage"></navbar>
    <board
    :categories="categories"
    :tasks="tasks"
    @addTask="addTask"
    @deleteTask="deleteTask"
    ></board>
  </div>
</template>

<script>
import Board from './Board.vue'
import Navbar from './Navbar.vue'
export default {
  components: { Board, Navbar },
  name: "Home",
  props: ['categories', 'tasks'],
  data(){
    return {

    }
  },
  methods: {
    changePage(){
      this.$emit("changePage","login")
    },
    addTask(task){
      this.$emit('addTask', task)
    },
    deleteTask(id){
      this.$emit('deleteTask', id)
    }
  }
}
</script>

<style>

</style>