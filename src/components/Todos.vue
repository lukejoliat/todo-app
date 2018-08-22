<template>
  <div>
    <h1><u>Todos:</u></h1>
    <article v-for="(todo, idx) in todos" :key="idx" class="todo">
      <input type="checkbox" v-bind:checked="todo.complete" v-on:click="updateStatus(todo.complete, todo.id)">
      <h1 v-if="!todo.complete">{{ todo.title }}</h1>
      <h1 v-if="todo.complete"><del>{{ todo.title }}</del></h1>
      <button class="btn-primary" v-on:click="deleteLocation(todo.id)">x</button>
    </article>
    <CreateTodo></CreateTodo>
    <button class="btn-primary" v-on:click="signOut">Log Out</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import CreateTodo from '@/components/CreateTodo';
import router from '../router/index';
import db from '../main';

export default {
  name: 'Todos',
  components: {
    CreateTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => router.replace('/'))
        .catch(({ message }) => alert(`Oops. ${message}`));
    },
    deleteLocation(id) {
      db.collection('todos').doc(id).delete()
        .catch(({ message }) => alert(`Oops. ${message}`));
    },
    updateStatus(complete, id) {
      const status = !complete;
      db.collection('todos').doc(id).update({ complete: status })
        .catch(({ message }) => alert(`Oops. ${message}`));
    },
  },
  firestore() {
    return {
      todos: db.collection('todos').where('uid', '==', firebase.auth().currentUser.uid),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.todo > * {
  display: inline-block;
}
</style>
