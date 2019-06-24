import store from '../store'
export default function (to, from, next) {
  let ls = localStorage.getItem('is loginned')
  console.log(ls, "ls")
  if (store.getters.user !== null || ls == 'true') {
    next()
  } else {
    next('/sign_in?loginError=true')
  }
}