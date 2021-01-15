<template>
  <div class="card card-category">
    <div class="card-body">
      <h5 class="hover-enable" v-if="editCategoryBtn == 'off'" @click.prevent="changeEditBtn('on')">
        {{category.name}}
      </h5>
      <form v-if="editCategoryBtn =='on'" @submit.prevent="editCategory(category)">
        <input type="text" v-model="category.name"><br>
        <a href="" @click.prevent="changeEditBtn('off')">close</a>
        <a href="" class="card-link" @click.prevent="deleteCategory(category.id)">delete</a>
      </form>
      <tasks 
      :tasks="tasks"
      :category="category"
      :categories="categories"
      @addTask="addTask"
      @deleteTask="deleteTask"
      @editTask="editTask"
      ></tasks>
    </div>
  </div>
</template>

<script>
import Tasks from './Tasks.vue'
export default {
  components: { Tasks },
  name: "Category",
  props: ['categories','category','tasks'],
  data(){
    return {
      addTaskBtn: "off",
      taskTitle: "",
      editCategoryBtn: 'off'
    }
  },
  methods: {
    changeAddTaskBtn(status){
      this.addTaskBtn = status
    },
    changeEditBtn(status){
      this.editCategoryBtn = status
    },
    editCategory(category){
      this.$emit("editCategory", category)
      this.changeEditBtn('off')
    },
    deleteCategory(id){
      this.$emit('deleteCategory', id)
    },
    addTask(task){
      this.$emit('addTask', task)
    },
    deleteTask(id){
      this.$emit('deleteTask', id)
    },
    editTask(task){
      this.$emit('editTask', task)
    },
  }
}
</script>

<style>

</style>