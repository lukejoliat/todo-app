<template>
  <div>
    <h1><u>Todos:</u></h1>
    <article v-for="(todo, idx) in todos" :key="idx">
      <h1>{{ todo.title }}</h1>
    </article>
    <button v-on:click="add">Add Todo</button>
    <button v-on:click="signOut">Log Out</button>
  </div>
</template>

<script>
import firebase from 'firebase';
import router from '../router/index';
import db from '../main';

export default {
  name: 'Todos',
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    signOut: () => {
      firebase.auth().signOut().then(
        () => router.replace('/'),
        err => alert(`Oops. ${err.messag}`),
      );
    },
    add: function () {
      this.todos.push({ title: 'thangs', complete: false });
    },
  },
  firestore() {
    return {
      todos: db.collection('todos').orderBy('title'),
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
</style>
