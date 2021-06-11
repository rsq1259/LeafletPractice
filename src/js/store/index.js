import Vue from "vue";
import vuex from "vuex";
import map from "./modules/map";
Vue.use(vuex);

export default new vuex.Store({
  modules: {
    map,
  },
});
