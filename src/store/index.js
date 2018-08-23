import Vue from 'vue'
import Vuex from 'vuex'
import costs from './costs'
import auth from './auth'
Vue.use(Vuex) 

export default new Vuex.Store({
  modules:{

    costs,
    auth

  }


})