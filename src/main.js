import Vue from "vue";
import App from "./App.vue";
import router from "./js/router/index";
import vuex from "./js/store/index";
import ElementUI from "element-ui";

Vue.use(ElementUI);

import L from "leaflet";
import "leaflet/dist/leaflet.css";
Vue.prototype.L = L;

// 引入样式
import "./css/overview.css";

Vue.config.productionTip = false;

new Vue({
  router,
  ElementUI,
  vuex,
  render: (h) => h(App),
}).$mount("#app");
