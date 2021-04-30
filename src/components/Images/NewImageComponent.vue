<template>
  <div id="new-image" class="ml-3 my-2">
    <router-link :to="{ name: 'new_image_path' }" class="button is-success">
      <span>New Image</span>
      <span class="icon">
        <font-awesome-icon icon='plus'/>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'new-image',
}
</script>

<style>

</style>