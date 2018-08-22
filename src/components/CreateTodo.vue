<template>
    <div class="bar">
      <form @submit.prevent="add" autocomplete="off">
         <input type="text" placeholder="Add New" v-model="title" id="title" required>
         <button class="btn-primary" v-on:click="add" type="button">Add</button>
      </form>
    </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../main';

export default {
  name: 'CreateTodo',
  data: () => ({
    title: '',
  }),
  methods: {
    add() {
      db.collection('todos').add({ title: this.title, uid: firebase.auth().currentUser.uid, complete: false });
      this.title = '';
    },
  },
};

</script>

<style scoped>
input {
  padding: 15px;
  display: block;
  margin: auto;
  flex: 1;
}
button {
  margin: 0;
}
form {
  display: flex;
  width: 80%;
  bottom: 15px;
}
.bar {
  position: fixed;
  background: white;
  width: 100%;
  bottom: 0;
  justify-content: center;
  display: flex;
  padding: 10px;
  box-shadow: black 0px 5px 11px;
}

@media (min-width: 500px) {
  form {
    max-width: 800px;
  }
}
</style>
