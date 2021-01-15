<template>
  <div>
    <div v-for="(task, idx) in tasks" :key="idx">
      <task 
      v-if="task.CatId == category.id" 
      :task="task"
      :categories="categories"
      @deleteTask="deleteTask"
      @editTask="editTask"
      ></task>
    </div>
    <div id="addTaskBtn" class="hover-enable" @click.prevent="changeAddTaskBtn('on')" v-if="addTaskBtn == 'off'">
      + add task
    </div>
    <div class="hover-enable" v-if="addTaskBtn == 'on'">
      <form @submit.prevent="addTask(category.id)">
        <input type="text" placeholder="add task" v-model="task.title">
      </form>
      <a href="" @click.prevent="changeAddTaskBtn('off')">close</a>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  components: { Task },
  name: "Tasks",
  props: ['categories','tasks', 'category'],
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
    addTask(categoryId){
      this.task.CatId = categoryId
      this.$emit('addTask', this.task)
      this.task.title=''
      this.changeAddTaskBtn('off')
    },
    deleteTask(id){
      this.$emit('deleteTask', id)
    },
    editTask(task){
      this.$emit('editTask', task)
    }
  }
}
</script>

<style>

</style>