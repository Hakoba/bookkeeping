
<template>
<v-app>
  <v-navigation-drawer
   app
   temporary
   v-model="drawer">
     <v-list >
          <v-list-tile
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-tile-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>


          </v-list-tile>
        </v-list>
  </v-navigation-drawer>
  <v-toolbar app dark >
     <v-toolbar-side-icon 
     @click="drawer = !drawer"
     class="hidden-md-and-up">
     </v-toolbar-side-icon>
    
    <v-toolbar-title class="title">
       <router-link :to="'/'" tag="span" ripple>
         МиниБух
       </router-link>
    </v-toolbar-title>
   
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
      flat
      v-for="link of links"
      :key="link.title"
      :to="link.url"
      >
      <v-icon left> 
        {{link.icon}}
      </v-icon>
      {{link.title}}
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
  <v-content>
  <router-view></router-view>
  </v-content>

</v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {title: 'Sign in', icon: 'lock', url: '/sign_in'},
        {title: 'Sign up', icon: 'face', url: '/sign_up'},
        {title: 'Home', icon: 'home', url: '/'},
        {title: 'Add new', icon: 'vertical_align_top', url: '/add_new'},
        {title: 'Log out', icon: 'exit_to_app', url: '/'}
      ]
    }
  },
  methods: {

  }
}
</script>

<style>
.title:hover {
  color:#999;
  transition: color 0.3s;
  cursor: pointer;
}
</style>




