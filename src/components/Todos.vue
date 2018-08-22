<template>
  <div class="todos">
    <button class="btn-primary log-out" v-on:click="signOut">Log Out</button>
    <h1><u>My Todos:</u></h1>
    <transition-group name="list-complete" tag="p" class="transition-wrapper">
        <article v-for="todo in todos" v-bind:key="todo.id" class="todo list-complete-item">
          <label class="container">
            <input
              type="checkbox"
              v-bind:checked="todo.complete"
              v-on:click="updateStatus(todo.complete, todo.id)">
            <span class="checkmark"></span>
          </label>
          <h1 v-if="!todo.complete">{{ todo.title }}</h1>
          <h1 v-else><del>{{ todo.title }}</del></h1>
          <button class="btn-primary delete" v-on:click="deleteItem(todo.id)">x</button>
      </article>
    </transition-group>
    <CreateTodo></CreateTodo>
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
    deleteItem(id) {
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
    return { todos: db.collection('todos').where('uid', '==', firebase.auth().currentUser.uid) };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article {
  display: flex;
  align-items: center;
  width: 100%;
}
h1,
h2 {
  text-align: left;
  font-weight: normal;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}
a {
  color: #42b983;
}
.todos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 80%;
}
.todo > * {
  display: inline-block;
}
.log-out {
  position: absolute;
  top: 10px;
  right: 10px;
}
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  display: none;
  cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #42b983;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.delete {
  padding: 0;
  height: 25px;
  width: 25px;
}

.transition-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}

@media (min-width: 850px) {
  .todos {
    width: 850px;
  }
}
</style>
