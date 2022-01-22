const mutations = {
  SET_PHOTOS(state, photos) {
    state.photos = photos
  },
  SET_PHOTO_META(state, meta) {
    state.meta = meta
  },
  SHOW_MODAL(state, id) {
    const itemIndex = state.photos.findIndex(p => p.id === id)
    if (itemIndex != -1) {
      state.photo = state.photos[itemIndex]
      state.show = true
    }
  },
  HIDE_MODAL(state) {
    state.show = false
  }
}

export default mutations
