<template>
<v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md5>
            <v-card class="elevation-15">
              <v-toolbar dark>
                <v-toolbar-title>Авторизация</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                   v-model="email" color="grey" prepend-icon="person"
                   name="email" label="Email" type="email"
                   :rules="emailRules"
                  ></v-text-field>
                  <v-text-field 
                  v-model="password" color="grey" prepend-icon="lock" name="password" 
                  label="Password" type="password" :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                 :disabled="!valid || loading"
                 class="white"
                 :loading="loading"
                 @click="onSubmit">Войти</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '', 
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail Не должен быть пустым',
        v => /.+@.+/.test(v) || 'E-mail должен быть валидным'
      ],
      passwordRules: [
        v => !!v || 'Пароль не должен быть пустым',
        v => (v && v.length >= 3) || 'Пароль должен содержать больше 3 символов'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log('asdasdasdasda')
        this.$store.dispatch('loginUser', user)
           .then(this.$router.push('/'))
           .then(localStorage.setItem('is loginned', true))
          .catch(err => {})
        console.log('asd22222')
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  created () {
    if(this.$route.query['loginError']){
      this.$store.dispatch('setError', 'Упс, ошибка.')
    }

  }
}
</script>
