
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
          
          <v-list-tile
          @click="logOut"
          v-if="isUserLoggedIn"
          >
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Выйти</v-list-tile-title>
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
         Бухгалтерия
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
      <v-btn
      @click="logOut"
      flat
       v-if="isUserLoggedIn"
      >
      <v-icon left> 
        exit_to_app
      </v-icon>
      Выйти
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-content>
  <router-view></router-view>
  </v-content>
  <template v-if="error">
   <v-snackbar
      
      color="red"
      :bottom="true"
      @click="closeError"
      :multi-line="true"
      :timeout="5000"
      :value="true"
      
    >
      {{error}}
      <v-btn
        
        
        ripple
        color="error"
        
        @click="closeError"
      >
       Close
      </v-btn>
    </v-snackbar>
    </template>
</v-app>

</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError", this);
    },
    logOut() {
      this.$store.dispatch("logoutUser");
     
      this.$router.push("/");
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "На главную", icon: "home", url: "/", methods: false },
          {
            title: "Добавить",
            icon: "vertical_align_top",
            url: "/add_new",
            methods: ""
          },
           // {title: "About", icon: "bubble_chart", url: "/FAQ", methods: "" }
        ];
      }

      return [
        { title: "Войти", icon: "lock", url: "/sign_in", methods: false },
        { title: "Зарегистрироваться", icon: "face", url: "/sign_up", methods: "" },
        //{title: "About", icon: "bubble_chart", url: "/FAQ", methods: ""}
      ];
    }
  }
};
</script>

<style>
.title:hover {
  color: #999;
  transition: color 0.3s;
  cursor: pointer;
}
</style>




