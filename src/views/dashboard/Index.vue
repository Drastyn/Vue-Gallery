<template>
  <div id="dashboard">
    <header class="hero is-small is-primary">
      <div class="hero-body">
          <div class="is-flex">
            <h1 class="title is-1">Vue Gallery</h1> 
            <button class="button is-danger" @click="logout" style="margin-left: auto;">
                <span class="icon">
                  <font-awesome-icon :icon="['fas', 'sign-out-alt']"/>
                </span>
                <span>Exit</span>
            </button>
          </div>
      </div>
    </header>
    <router-view/>
    <GalleryFooter />
    <FlashMessage :position="'right bottom'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GalleryFooter from '@/components/Footer';
export default {
    name: 'dashboard',
    components: {
      GalleryFooter,
    },
    computed: {
        ...mapState('notifications', ['notification']),
    },
    methods: {
        display(message) {
            this.$store.dispatch('notifications/loginMessage', message);
            this.flashMessage.show(this.notification);
        },
        logout() {
            this.$store.dispatch('doLogOut');
            this.$router.push({ name: 'login_path' });
            this.display('You have successfully logged out');
        }
    }
}
</script>