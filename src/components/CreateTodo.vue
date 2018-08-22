<template>
  <div>
    <form action="">
       <label for="title">Add new:</label><input type="text" v-model="title" id="title">
       <button class="btn-primary" v-on:click="add" type="button">Add</button>
    </form>
  </div>
</template>

<script>
import db from '../main';
import firebase from 'firebase';

export default {
  name: 'CreateTodo',
  data: () => ({
    title: '',
  }),
  methods: {
    add() {
      db.collection('todos').add({ title: this.title, uid: firebase.auth().currentUser.uid, complete: false });
      this.title = '';
    }
  },
};

</script>

<style scoped>
input {
  width: 20%;
  padding: 15px;
  display: block;
  margin: auto;
}
.btn-primary {
  border: none;
  font-weight: normal;
  color: #fff;
  background: #42b983;
  padding: 6px 10px;
  font-size: 16px;
}
</style>
