import Vue from "vue";
import Vuex from "vuex";
import AdminLogin from "./AdminLogin";



Vue.use(Vuex);

const modules = {};
const context = require.context("@/store/modules", true);

context
  .keys()
  .map(context)
  .map((m) => m.default)
  .forEach((resource) => {
    modules[resource.name] = resource;
  });

export default new Vuex.Store({
  modules,
  ...AdminLogin,
});
