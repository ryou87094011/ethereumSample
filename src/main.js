// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

var firebaseConfig = {
  apiKey: 'AIzaSyDLIBNl9kPmHq-GOZ0QKM_QS5fYZ0LEMTA',
  authDomain: 'blockchainsampleapp.firebaseapp.com',
  projectId: 'blockchainsampleapp',
  storageBucket: 'blockchainsampleapp.appspot.com',
  messagingSenderId: '237295554578',
  appId: '1:237295554578:web:c0a48e661759dec01b08cb',
  measurementId: 'G-3HHF91X5GH'
}

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
