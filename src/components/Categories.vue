<template>
  <div class="row overflow-auto">
    <div class="col" v-for="(category, idx) in categories" :key="idx">
      <category   
      :category="category"
      :tasks="tasks"
      @addTask="addTask"
      @deleteTask="deleteTask"
      ></category>
    </div>
    <div class="col">
      <div class="card card-category" v-if="addCategoryBtn == 'on'">
        <div class="card-header">
          <form @submit.prevent="addCategory">
            <input type="textarea" class="form-control" id="name" placeholder="Add Category" v-model="categoryName">
            <a href="" @click.prevent="changeAddBtn('off')">X</a>
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
      categoryName: '',
      taskTitle: '',
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
    addCategory(){
      this.categories.push({
        id: 6,
        name: this.categoryName
      })
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