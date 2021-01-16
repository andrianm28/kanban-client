<template>
  <div class="card card-task my-2 ">
    <div class="card-body">
      <h6 class="card-title" v-if="editBtn == 'off'" @click.prevent="changeEditBtn('on')">
        {{task.title}}
      </h6>
      <small class="text-small">by:<br>{{task.User.email}}</small><br>
      <small class="text-small">{{ task.createdAt | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</small>
      <!-- <p>{{(moment(task.createdAt))}}</p> -->
      <form v-if="editBtn =='on'" @submit.prevent="editTask(task)">
        <input type="text" v-model="task.title"><br>
        <a href="" @click.prevent="prev">❮</a>
        <a href="" @click.prevent="changeEditBtn('off')">close</a>
        <a href="" @click.prevent="deleteTask(task.id)">delete</a>
        <a href="" @click.prevent="next">❯</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: ['task','categories'],
  data() {
    return {
      editBtn: "off",
    }
  },
  methods: {
    prev(){
      this.task.CatId -= 1
      this.editTask(this.task)
    },
    next(){
      this.task.CatId += 1
      this.editTask(this.task)
    },
    changeEditBtn(status){
      this.editBtn = status
    },
    deleteTask(id){
      this.$emit('deleteTask', id)
      this.changeEditBtn('off')
    },
    editTask(task){
      this.$emit('editTask', task)
      this.changeEditBtn('off')
    },
  },
  computed: {

  }
}
</script>

<style>

</style>