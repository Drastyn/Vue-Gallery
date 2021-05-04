<template>
  <div id="images-index">
      <div class="content is-large is-inline-flex mt-6 ml-5">
        <h1 class="title is-2">Images</h1>
        <NewImage />
      </div>
      <div v-if="images.length > 0">
        <ImagesComponent :images="images"/>
      </div>
      <div class="ml-5" v-else>
          <h1 class="title is-3">Image(s) not found(s)</h1>
      </div>
      <Pagination :amount="images.length"/>
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