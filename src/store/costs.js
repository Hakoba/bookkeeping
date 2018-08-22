export  default {
  state: {
    costs: [
      {
        dateOfCost: '2018-08-22',
        cost: 200,
        subject: 'Glue',
        icon: 'donut_large',
        a: 0

      },
      {
        dateOfCost: '2018-08-21',
        cost: 4450,
        subject: 'Vegetables',
        icon: 'shopping_cart',
        a: 0 
      },
      {
        dateOfCost: '2018-08-22',
        cost: 100500,
        subject: 'Anime',
        icon: 'shopping_basket',
        a: 1
      },
      {
        dateOfCost: '2018-08-01',
        cost: 100,
        subject: 'Taxes',
        icon: 'account_balance',
        a: 1
      }
      
    ]
  },
  mutations: {
    costsFilter (state) {
      state.costs = state.costs.filter( item => item != 'kek' )
    }
  },
  actions: {

  },
  getters: {
   
    costs (state) {
      return state.costs;
    }
  }

}