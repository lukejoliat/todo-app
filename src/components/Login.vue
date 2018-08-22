<template>
  <form class="login" @submit.prevent="signIn">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email" required>
    <input v-bind:type="type" v-model="password" placeholder="Password" required>
    <div><input type="checkbox" v-on:click="togglePass" /><span>Show Password</span></div>
    <button class="btn-primary">Log In</button>
  </form>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    type: 'password',
  }),
  methods: {
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.replace('todos');
      }).catch(({ message }) => alert(`Oops. ${message}`));
    },
    togglePass() {
      this.type = this.type === 'text' ? 'password' : 'text';
    },
  },
};

</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login > input {
  width: 80%;
  margin: 10px 0;
  padding: 15px;
}
button {
  width: 80%;
  margin-top: 20px;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
@media (min-width: 500px) {
  .login > input {
    width: 325px;
  }
  button {
    width: 175px;
  }
}
</style>
