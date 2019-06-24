import {Doughnut,PolarArea, Line, mixins, Bar,Scatter } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    this.renderChart({
    
    }, {responsive: true, maintainAspectRatio: true})
  }
}