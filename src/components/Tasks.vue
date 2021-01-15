<template>
  <div>
    <div v-for="(task, idx) in tasks" :key="idx">
      <task 
      v-if="task.category == category.name" 
      :task="task"
      @deleteTask="deleteTask"
      ></task>
    </div>
    <div id="addTaskBtn" class="hover-enable" @click.prevent="changeAddTaskBtn('on')" v-if="addTaskBtn == 'off'">
      + add task
    </div>
    <div class="hover-enable" v-if="addTaskBtn == 'on'">
      <form @submit.prevent="addTask(category.name)">
        <input type="text" placeholder="add task" v-model="task.title">
      </form>
      <a href="" @click.prevent="changeAddTaskBtn('off')">X</a>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  components: { Task },
  name: "Tasks",
  props: ['tasks', 'category'],
  data() {
    return {
      addTaskBtn: 'off',
      task: {
        title: ''
      }
    }
  },
  methods: {
    changeAddTaskBtn(status){
      this.addTaskBtn = status
    },
    addTask(category){
      this.task.category = category
      this.$emit('addTask', this.task)
    },
    deleteTask(id){
      this.$emit('deleteTask', id)
    }
  }
}
</script>

<style>

</style>