<template>
<div>
  <v-container>
    <v-layout row align-center>
      <v-flex xs12> 
        <v-card class="elevation-6">
         <v-tabs
      v-model="active"
      color="black"
      dark
      fixed-tabs
      slider-color="yellow"
    >
      <v-tab
        
        v-for="period in periods"
        :key="period.id"
        ripple
      >
        {{period}}

      </v-tab>
      <v-tab-item
        v-for="n in 4"
        :key="n"
      >
    <v-data-table
          hide-actions
          class="elevation-1"
          :items="costs"
          :headers="headers"
        >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.subject }}</td>
            <td class="text-xs-center">{{ props.item.cost }} RUB</td>
            <td class="text-xs-center">{{ props.item.dateOfCost }}</td>
            <td class="text-xs-center"><v-icon>{{props.item.icon}}</v-icon></td>
            <td class="text-xs-center"><v-btn color="grey" dark>Delete</v-btn></td>

          </template>
          <template slot="no-data" v-show="">
            <v-alert :value="true" color="error" icon="warning">
              You need to add ur costs! 
            </v-alert>
          </template>
  </v-data-table>
      </v-tab-item>
    </v-tabs>

    <div class="text-xs-center mt-3">
      <v-btn @click="next">next tab</v-btn>
    </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  data () {
    return {
      active: null,
      periods: ['Day', 'Week', 'Month', 'All time'],
      headers: [
          { text: 'Subject', value: 'subject', align: 'center'},
          { text: 'Cost', value: 'cost', align: 'center'},
          { text: 'Date', value: 'date', align: 'center', sortable: false},
          { text: 'Kind', value: 'kind', align: 'center', sortable: false},
          { text: 'Actions', value: 'actions', align: 'center', sortable: false}
        ],
      costs: [
        {
          dateOfCost: '10.03.2004',
          cost: 200,
          subject: 'Glue',
          icon: 'home'

        },
        {
          dateOfCost: '02.04.2017',
          cost: 4450,
          subject: 'Vegetables',
          icon: 'shopping_cart'
        },
        {
          dateOfCost: '24.11.2010',
          cost: 100500,
          subject: 'Anime',
          icon: 'shopping_basket'
        },
        {
          dateOfCost: '20.03.2013',
          cost: 100,
          subject: 'Taxes',
          icon: 'account_balance'
        }
        
      ]
       }
    },
  methods: {
      next () {
        const active = parseInt(this.active)
        this.active = (active < 3 ? active + 1 : 0)
      }
  }
}
</script>
