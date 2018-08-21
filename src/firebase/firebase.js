import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase';

Vue.use(VueFire);
const config = {
  apiKey: 'AIzaSyD3tMv0n4lk2PpjOS4b5ICgdjmnSq2jnCI',
  authDomain: 'todo-969aa.firebaseapp.com',
  databaseURL: 'https://todo-969aa.firebaseio.com',
  projectId: 'todo-969aa',
  storageBucket: 'todo-969aa.appspot.com',
  messagingSenderId: '897873316680',
};
firebase.initializeApp(config);

export default firebase;
