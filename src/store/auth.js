import * as fb from 'firebase'
import { auth } from 'firebase';


class User {
  constructor(id){
    this.id = id
  }
}
export default {
  state: {
    user: null 
  },
  actions: {
    autoLoginUser ({commit}, payload) {
      commit('setUser', new User(payload.uid))
    },
    async registerUser ({commit}, {email, password}){
      commit('clearError');
      commit('setLoading', true);
      try { 
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid));
        commit('setLoading', false);
      }
      catch (err){
          commit('setLoading', false);
          commit('setError', err.message);
          throw err
      }
    },
    async loginUser ({commit}, {email,password}){
      commit('clearError');
      commit('setLoading', true);
      try { 
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid));
        commit('setLoading', false);
      }
      catch (err){
          commit('setLoading', false);
          commit('setError', err.message);
          throw err
      }
    },
    logoutUser({commit}){
      fb.auth().signOut()
      commit('setUser', null)
    }
  },
  getters:{
    user(state){
      return state.user
    },
    isUserLoggedIn (state) {
      return state.user !== null
    }
  },
  mutations:{
    setUser(state, payload){
      state.user = payload
    }
  }
 
}