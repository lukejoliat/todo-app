// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import App from './App';
import firebase from './firebase/firebase';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  props: firebase,
  components: { App },
  template: '<App/>',
});