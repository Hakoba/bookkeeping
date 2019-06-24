import Vue from 'vue'
import './plugins/vuetify'
// import App from 'vue-chartjs/src/examples/App.vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as firebase from 'firebase'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    var config = {
      apiKey: 'AIzaSyDADAyNyEEb7CAsKE-omjc35j0KGXBKxJs',
      authDomain: 'bookkeeping-666.firebaseapp.com',
      databaseURL: 'https://bookkeeping-666.firebaseio.com',
      projectId: 'bookkeeping-666',
      storageBucket: 'bookkeeping-666.appspot.com',
      messagingSenderId: '666997306434'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      //console.log(user)
      if( user !== null){
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    //this.$store.dispatch('fetchCosts')
  },
  render: h => h(App)
}).$mount('#app')
