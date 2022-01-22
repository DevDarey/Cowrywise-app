import axios from "@/axios"

export default {
	searchPhotos(payload) {
		return axios.get("search/photos", {
			params: payload.meta,
		});
	},
};
