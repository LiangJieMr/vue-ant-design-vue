import Vue from "vue";
import Vuex from "vuex";

import * as actions from "./actions/actions.js";
import * as getters from "./getters/getters.js";
import * as mutations from "./mutations/mutations.js";
import { state } from "./state/state.js";

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store;
