<template>
  <div class="card card-board">
    <div class="card-body">
      <h1>Organization Board</h1>
      <categories
      :categories="categories"
      :tasks="tasks"
      @addTask="addTask"
      @deleteTask="deleteTask"
      ></categories>
    </div>
  </div>
</template>

<script>
import Categories from './Categories.vue'
export default {
  components: { Categories },
  name: "Board",
  props: ['categories', 'tasks'],
  data() {
    return {

    }
  }, 
  methods: {
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