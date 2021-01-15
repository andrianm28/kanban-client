<template>
  <div class="row overflow-auto">
    <div class="col" v-for="(category, idx) in categories" :key="idx">
      <category   
      :category="category"
      :tasks="tasks"
      :categories="categories"
      @addTask="addTask"
      @deleteTask="deleteTask"
      @editTask="editTask"
      @editCategory="editCategory"
      @deleteCategory="deleteCategory"
      ></category>
    </div>
    <div class="col">
      <div class="card card-category" v-if="addCategoryBtn == 'on'">
        <div class="card-header">
          <form @submit.prevent="addCategory(categoryName)">
            <input type="textarea" class="form-control" id="name" placeholder="Add Category" v-model="categoryName"><br>
            <a href="" @click.prevent="changeAddBtn('off')">close</a>
          </form>
        </div>
      </div>
      <div class="card card-category" v-if="addCategoryBtn == 'off'" @click.prevent="changeAddBtn('on')">
        <div class="card-header hover-enable">
          <p>+ Add Category</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tasks from './Tasks.vue'
import Category from './Category.vue'
export default {
  components: { Tasks, Category },
  name: "Categories",
  props: ['categories', 'tasks'],
  data() {
    return {
      addCategoryBtn: "off",
      addTaskBtn: 'off',
      categoryName: ''
    }
  },
  computed: {
    filterTaskBacklog() {
      return this.tasks.filter(task => task.category)
    }
  },
  methods :{
    changeAddBtn(status) {
      this.addCategoryBtn = status
    },
    changeAddTaskBtn(status){
      this.addTaskBtn = status
    },
    addCategory(category){
      this.$emit('addCategory', category)
      this.categoryName = ''
      this.changeAddBtn('off')
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