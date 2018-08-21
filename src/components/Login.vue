<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" v-model="email" placeholder="Email"><br>
    <input v-bind:type="type" v-model="password" placeholder="Password">
    <div><input type="checkbox" v-on:click="togglePass" /><span>Show Password</span></div>
    <button class="btn-primary" v-on:click="signIn">Log In</button>
  </div>
</template>

<script>
import firebase from 'firebase';

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
  margin-top: 40px;
}
.login > input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
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
</style>
