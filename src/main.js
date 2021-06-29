import Vue from "vue";
import App from "./App.vue";
import router from "./js/router/index";
import store from "./js/store/index";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import "./css/gloable.scss";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
Vue.prototype.$L = L;

import bus from "./js/utils/bus";
Vue.prototype.$bus = bus;

import yuxdb from "./js/utils/indexDB";
Vue.prototype.$yuxdb = yuxdb;

// 引入样式
import "./css/overview.css";

Vue.config.productionTip = false;

new Vue({
  router,
  ElementUI,
  store,
  render: (h) => h(App),
}).$mount("#app");
