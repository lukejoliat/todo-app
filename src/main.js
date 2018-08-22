// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFire from 'vuefire';
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import config from './firebase/config';
import router from './router';
import App from './App';

firebase.initializeApp(config);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
const db = firebase.firestore();
let app;

export default db;
Vue.use(VueFire);

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>',
    });
  }
});
