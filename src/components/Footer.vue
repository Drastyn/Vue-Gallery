<template>
  <footer id="gallery-footer" class="footer fix-footer">
    <div class="content has-text-centered">
      <Credits />
    </div>
  </footer>
</template>

<script>
import Credits from './Credits';
export default {
    name: 'gallery-footer',
    components: {
      Credits,
    }
}
</script>