import store from '../store'
export default function(to,from,next) {

if (store.getters.user == null){
  setTimeout(() => {
    if (store.getters.user){
      next()
    }
  else{
    next('/sign_in?loginError=true')
  }
  
  }, 1500);
}else {
  next()
}

 
}