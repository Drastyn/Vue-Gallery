<template>
  <div id="pagination" class="my-6 mx-5">
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a v-if="page >= 2" @click="previousPage()" class="pagination-previous nav-button page-button">
          <span class="icon mr-2">
            <font-awesome-icon icon='arrow-left'/>
          </span>
          <span>
            Página anterior
          </span>
        </a>
        <a v-if="amount === 8" @click="nextPage()" class="pagination-next nav-button page-button">
          <span>
            Próxima página
          </span>
          <span class="icon ml-2">
            <font-awesome-icon icon='arrow-right'/>
          </span>
        </a>
        <ul class="pagination-list">
        <li>
          <a class="page-number ml-6" v-if="page >= 2">{{page}}</a>
        </li>
      </ul>
      </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'pagination',
    props: {
        amount: {
            required: true,
            type: Number,
        }
    },
    computed: {
        ...mapState('pagination', ['page']),
    },
    methods: {
        sendPaginationParams() {
            this.$store.dispatch('images/getImages', {
                page: this.page,
            });
        },
        nextPage() {
            this.$store.dispatch('pagination/increasePage');
            this.sendPaginationParams();
        },
        previousPage() {
            this.$store.dispatch('pagination/decreasePage');
            this.sendPaginationParams();
        }
    },
}
</script>

<style>

</style>