<template>
  <div class="card card-task my-2 ">
    <div class="card-body">
      <h6 class="card-title" v-if="editBtn == 'off'" @click.prevent="changeEditBtn('on')">
        {{task.title}}
      </h6>
      <form v-if="editBtn =='on'" @submit.prevent="editTask(pTasl.id)">
        <input type="text" v-model="task.title">
      </form>
      <a href="" class="card-link" @click.prevent="deleteTask(pTasl.id)">delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: ["task"],
  data() {
    return {
      editBtn: "off",
      pTask: {
        title: ""
      }
    }
  },
  methods: {
    changeEditBtn(status){
      this.editBtn = status
    },
    deleteTask(id){
      this.$emit('deleteTask', id)
    },
    editTask(id){
      thie.$emit('editTask', pTask)
    }
  }
}
</script>

<style>

</style>