import Vue from "vue";
import App from "./App.vue";
import "./index.css";

import store from "./store/store";

import axios from "./axios.js"

import VueContentPlaceholders from 'vue-content-placeholders'

Vue.use(VueContentPlaceholders)

Vue.prototype.$http = axios

Vue.prototype.$http.defaults.headers.common["Authorization"] = "Client-ID "+ "BoZueHjfFIFxCyvB4Q-tsYB37VZGmWkPqFC-yApofuM"



Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
