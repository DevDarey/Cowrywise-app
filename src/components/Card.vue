<template>
  <div class="font-sans relative cursor-pointer" @click="showModal(id)">
    <img
      class="transition duration-1000 ease-in-out rounded-md w-full mb-4 filter brightness-50 hover:brightness-150"
      :alt="alt"
      :src="url"
    />
    <h2 class="absolute bottom-9 left-3 font-medium text-base">{{ author }}</h2>
    <p class="absolute bottom-5 left-3 font-medium text-xs">
      {{ location || "Unknown location" }}
    </p>
  </div>
</template>
<style scoped></style>
<script>
export default {
  name: "Card",
  props: ["url", "author", "location", "id", "alt"],
  methods: {
    showModal(id) {
      this.$store.dispatch("showModal", id);
    },
  },
};
</script>
