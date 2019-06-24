<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <!-- <v-btn class="info" @click="fillData()">dfdf</v-btn> -->
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection:null,
        vars: []
      }
    },
    computed: {
    costs () {
      let allCosts =  this.$store.getters.costs
      let fVar = 0,sVar = 0,tVar = 0,foVar = 0;
      let icons = allCosts.reduce(function(prev, curr) {
        switch (curr.icon) {
                case 'donut_large':
                fVar++;
                break;
                case 'shopping_cart':
                sVar++;
                break;
                case 'shopping_basket':
                tVar++;
                break;
                case 'account_balance':
                foVar++;
                break;
            default:
            console.log('error')
                break;
        }

  },0)
return [fVar,sVar,tVar,foVar]
    },

    },
    mounted () {
      this.fillData()
    
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Кушац','Нологи','Другое','Покупки'],
           datasets: [
            {
              backgroundColor: [
                '#ee0022',
                '#0025aa',
                '#eeff22',
                '#110022'
              ],
              data: [this.costs[2], this.costs[3],this.costs[0],this.costs[1]]
            }
           ]
          // datasets: [
          //   {
          //     label: 'Кушац',
          //     backgroundColor: '#ee0022',
          //     data: [this.costs[2]]
          //   }, {
          //     label: 'Нологи',
          //     backgroundColor: '#0025aa',
          //     data: [this.costs[3]]
          //   },
          //    {
          //     label: 'Другое',
          //     backgroundColor: '#eeff22',
          //     data: [this.costs[0]]
          //   },
          //    {
          //     label: 'Покупки',
          //     backgroundColor: '#110022',
          //     data: [this.costs[1]]
          //   },
          // ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    },
     beforeCreate () {
        this.$store.dispatch('fetchCosts')
        //
      },
      destroyed (){
        this.$store.dispatch('setLoading', false)
      }
  }
</script>

<style>
  .small {
    max-width: 90vw;
    margin:  50px auto;
  }
</style>