<template>
  <div class="card card-board">
    <div class="card-body">
      <h1>H8anban Board</h1>
      <categories
      :categories="categories"
      :tasks="tasks"
      @addTask="addTask"
      @deleteTask="deleteTask"
      @editTask="editTask"
      @addCategory="addCategory"
      @editCategory="editCategory"
      @deleteCategory="deleteCategory"
      ></categories>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import Categories from './Categories.vue'
export default {
  components: { Draggable, Categories },
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
    },
    editTask(task){
      this.$emit('editTask', task)
    },
    addCategory(category){
      this.$emit('addCategory', category)
    },
    editCategory(category){
      this.$emit("editCategory", category)
    },
    deleteCategory(id){
      this.$emit('deleteCategory', id)
    },
  }
}
</script>

<style>

</style>