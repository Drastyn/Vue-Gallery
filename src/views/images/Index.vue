<template>
  <div id="images-index">
      <section class="hero is-small is-primary">
          <div class="hero-body">
              <div class="title">
                  Vue Gallery
              </div>
              <p class="subtitle">
                  A Practice Gallery With VueJS + Laravel 8
              </p>
          </div>
      </section>
      <div class="content is-large is-inline-flex mt-6 ml-5">
        <h1 class="title is-2">Images</h1>
        <NewImage />
      </div>
      <div v-if="images.length > 0">
        <ImagesComponent :images="images"/>
      </div>
      <div v-else>
          <h1>Imagen(es) no encontrada(s)</h1>
      </div>
      <Pagination :amount="images.length"/>
       <FlashMessage :position="'right bottom'"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImagesComponent from '@/components/Images/ImagesComponent';
import NewImage from '@/components/Images/NewImageComponent';
import Pagination from '@/components/Images/PaginationComponent';
export default {
    name: 'images-index',
    components: {
        NewImage,
        ImagesComponent,
        Pagination,
    },
    computed: {
        ...mapState('images', ['images']),
        ...mapState('pagination', ['page']),
    },
    mounted() {
        this.$store.dispatch('images/getImages', {
            page: this.page,
        });
    },
    destroyed() {
        this.$store.dispatch('images/cleanImages');
        this.$store.dispatch('pagination/restartPage');
    }
}
</script>

<style>

</style>