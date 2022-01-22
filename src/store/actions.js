import photo from "@/http/requests/photo.js"

const actions = {
    searchPhotos({ commit }, payload) {
        return new Promise((resolve, reject) => {
            photo.searchPhotos(payload)
                .then(response => {
                    if (response.data.results) {
                        commit("SET_PHOTOS", response.data.results)
                        commit("SET_PHOTO_META", {total: response.data.total, total_pages: response.data.total_pages})
                        resolve(response)
                    }
                    else {
                        reject(response)
                    }

                })
                .catch(error => { reject(error) })
        })
    },
    showModal({commit}, id) {
        commit("SHOW_MODAL", id)
    },
    hideModal({commit}) {
        commit("HIDE_MODAL")
    }

}

export default actions
