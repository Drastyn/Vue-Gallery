<template>
  <div id="images-component" class="columns is-multiline mx-3">
    <div class="column is-one-quarter-desktop is-half-tablet" v-for="(image, index) in images" :key="index">
      <div class="card pointer"  @click="openModal(image.url)">
        <div class="card-image">
          <figure class="image">
            <img :src="image.url" :alt="image.name"/>
          </figure>
        </div>
        <div class="card-content is-overlay is-clipped">
            <router-link class="button is-small is-info" :to="{name: 'show_image_path', params: { token: image.token }}">
              <span>{{image.name}}</span>
              <span class="icon">
                <font-awesome-icon icon='link'/>
              </span>
           </router-link>
        </div>
      </div>
    </div>
    <div id="modal" class="modal">
      <div id="modal-background" class="modal-background"></div>
      <div class="modal-content modal-center">
        <p class="image is-3by3">
          <img id="image-modal" alt="image">
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'images-component',
    data() {
      return {
        modal: '',
        modalBackground: '',
        imageModal: '',
      }
    },
    props:  {
      images: {},
    },
    mounted() {
      this.modal = document.getElementById('modal');
      this.modalBackground = document.getElementById('modal-background');
      this.imageModal = document.getElementById('image-modal');
      window.addEventListener('click', (event) => {
        if(event.target === this.modalBackground) {
          this.imageModal.src = '';
          this.modal.style.display = "none";
        }
      })
    },
    methods: {
      openModal(imageUrl) {
        this.modal.style.display = "block";
        this.imageModal.src = imageUrl;
      },
    },
}
</script>

<style>

</style>