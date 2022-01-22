<template>
  <div class="mt-0 mb-4 ml-auto mr-auto w-full" id="app">
    <div class="">
      <div class="">
        <div class="bg-gray-200 mb-20 p-16">
          <div v-if="!searching && !searched" class="bg-white rounded p-2">
            <div class="flex content-center">
              <img class="p-1 mt-1 h-6" src="./assets/search.svg" />
              <input
                name="search"
                type="text"
                v-model="q"
                placeholder="Search for Photo"
                class="outline-none w-full"
              />
            </div>
          </div>
          <div class="mt-4" v-if="searching"><h1 class="text-2xl font-medium"><span class="text-slate-800">Searching For</span> <span class="text-gray-500">"{{ q }}"</span></h1></div>
          <div class="mt-4" v-if="searched"><h1 class="text-2xl font-medium"><span class="text-slate-800">Search Results For</span> <span class="text-gray-500">"{{ q }}"</span></h1></div>
        </div>
      </div>
      <div class="cover">
        <CardCollection :loading="loading" :photos="photos" />
      </div>
    </div>
    <Modal v-if="show" />
  </div>
</template>
<style scoped>
.cover {
  color: #fff;
  width: 60%;
  margin: 0 auto;
  margin-top: -7rem;
}
</style>

<script>
import CardCollection from "./components/CardCollection.vue";
import Modal from "./components/Modal.vue"

import lodash from 'lodash'

export default {
  name: "App",
  data() {
    return {
      q: "",
      loading: true,
      searching: false,
      searched: false
    }
  },
  components: {
    CardCollection,
    Modal
  },
  watch: {
    q(newValue) {
      if (newValue.length > 2) {
        this.onChangeSearch()
      }
    }
  },
  computed: {
     photos() {
       return this.$store.state.photos
     },
     show() {
       return this.$store.state.show
     }
  },
  methods: {
    onChangeSearch: lodash.debounce(function() {
       this.searchPhotos()
    },2000),
    searchPhotos(query="African") {
      this.loading = true
      this.searching = this.q === "" ? false : true

      const payload = {
        meta: {
          page: 1,
          per_page: 8,
          query: this.q === "" ? query : this.q
        },
      };
      this.$store
        .dispatch("searchPhotos", payload)
        .then(() => {})
        .catch(() => {})
        .finally(() => {
          this.searched = this.searching
          this.searching = false
          this.loading = false
        });
    },
  },
  created() {
    this.searchPhotos();
  },
};
</script>
