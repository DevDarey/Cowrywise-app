<template>
  <div class="masonry sm:masonry-sm md:masonry-md">
    <div v-if="loading">
    <content-placeholders v-for="n in 6" :key="n" class="p-4 rounded-md placeholder mb-4" :rounded="true">
      <content-placeholders-img />
      <content-placeholders-heading />
    </content-placeholders>
    </div>
    <div v-if="!loading">
      <Card v-for="(photo, index) in photos" :alt="photo.alt_description" :id="photo.id" :location="photo.user.location" :author="photo.user.name" :url="photo.urls.small" :key="index" />
    </div>
  </div>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "CardCollection",
  props: ["photos", "loading"],
  components: {
    Card
  },
};
</script>
<style scoped>
.placeholder {
  background-color: #eee;
}
</style>
