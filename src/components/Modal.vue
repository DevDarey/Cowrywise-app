<template>
  <div
    class="fixed left-0 top-0 bg-black bg-opacity-30 h-full w-full overflow-auto font-sans"
  >
    <div
      class="pacity-0 relative w-10/12 h-4/5 bg-white rounded-md shadow-lg mx-auto my-10"
    >
      <span
        @click="hideModal()"
        class="absolute -top-5 -right-20 text-l w-10 h-10 text-white cursor-pointer"
      >
        x
      </span>
      <div class="w-full h-full overflow-hidden rounded-t-md">
        <img
          class="rounded-t-md object-contain"
          :src="photo.urls.full"
          :alt="photo.alt_description"
        />
      </div>
      <div class="px-7 py-4 w-full bg-white rounded-b-md">
        <h2 class="text-slate-900 font-medium">{{ photo.user.name }}</h2>
        <span class="text-xs text-gray-400">{{ photo.user.location }}</span>
      </div>

      <!-- footer -->
      <div
        class="absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  computed: {
    photo() {
      return this.$store.state.photo;
    },
  },
  methods: {
    hideModal() {
      this.$store.dispatch("hideModal");
    },
  },
};
</script>
