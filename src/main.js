import Vue from "vue";
import App from "./App.vue";
import router from "./js/router/index";
import vuex from "./js/store/index";
import ElementUI from "element-ui";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  ElementUI,
  vuex,
  render: (h) => h(App),
}).$mount("#app");
