<template>
  <div>
    <div class="columns is-mobile">
      <article class="column box is-half is-offset-one-quarter login-panel">
        <h1 class="title">Login</h1>
        <div class="block">
          <p v-if="message" class="notification is-danger">{{ message }}</p>
          <p class="control has-icon">
            <input class="input" type="email" placeholder="Email" v-model="user.email">
            <i class="fa fa-envelope"></i>
          </p>
          <p class="control has-icon">
            <input class="input" type="password" placeholder="Password" v-model="user.password">
            <i class="fa fa-lock"></i>
          </p>
          <p class="control">
            <label class="checkbox">
              <input type="checkbox">
              Remember me
            </label>
          </p>
          <p class="control">
            <button class="button is-success" @click="login(user)">
              Login
            </button>
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default{
  data () {
    return {
      user: {
        email: null,
        password: null
      }
    }
  },

  computed: mapGetters({
    isLogin: 'isLogin',
    message: 'message'
  }),

  methods: {
    ...mapActions({login: 'login'})
  },
  watch: {
    isLogin () {
      if (this.isLogin) {
        this.$router.replace('home')
      }
    }
  }
}
</script>

<style>
.login-panel {
  padding: 20px
}

</style>
