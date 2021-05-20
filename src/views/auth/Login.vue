<template>
  <div id="login" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <h2 class="title">Log in</h2>
            <form @submit.prevent="login">
              <div class="field">
                <div class="control">
                  <input
                    type="text"
                    v-model="user.name"
                    class="input"
                    placeholder="Username"
                    autofocus
                  />
                </div>
                <div class="field">
                  <div class="control">
                    <input
                      type="password"
                      v-model="user.password"
                      class="input"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <button type="submit" class="button is-fullwidth">
                      Get in
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <FlashMessage :position="'right bottom'"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapState('notifications', ['notification']),
  },
  destroyed() {
    this.$store.dispatch('notifications/cleanNotification');
  },
  methods: {
    display(message) { 
      this.$store.dispatch('notifications/loginMessage', message);
      this.flashMessage.show(this.notification); 
    },
    login() {
      this.$store.dispatch('doLogin', this.user)
      .then((response) => {
        this.display('You have successfully logged in');
        this.$router.push({ name: response.path });
      })
      .catch(() => {
        this.display('Invalid credentials, retry again please');
      });
    },
  },
};
</script>
