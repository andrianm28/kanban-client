<template>
  <div class="card card-category">
    <div class="card-body">
      <h5 class="hover-enable">
        {{category.name}}
      </h5>
      <tasks 
      :tasks="tasks"
      :category="category"
      @addTask="addTask"
      @deleteTask="deleteTask"
      ></tasks>
    </div>
  </div>
</template>

<script>
import Tasks from './Tasks.vue'
export default {
  components: { Tasks },
  name: "Category",
  props: ['category','tasks'],
  data(){
    return {
      addTaskBtn: "off",
      taskTitle: ""
    }
  },
  methods: {
    changeAddTaskBtn(status){
      this.addTaskBtn = status
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