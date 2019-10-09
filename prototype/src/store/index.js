import Vue from "vue";
import Vuex from "vuex";
import { components } from "./components";
import { compositions } from "./compositions";

Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		themeSwitch({ commit }, value) {
			commit("themeSwitch", value);
		},
		updateSelected({ commit }, value) {
			commit("updateSelected", value);
		}
	},
	mutations: {
		themeSwitch(state, value) {
			state.theme = value;
		},
		updateSelected(state, value) {
			state.selected = value;
		}
	},
	state: {
		colors: [
			"base",
			"base-mid",
			"base-semi",
			"base-light",
			"base-ghost",
			"brand",
			"success",
			"warn"
		],
		components: components,
		compositions: compositions,
		selected: "Components",
		theme: "light"
	}
});
