import Vue from "vue";
import Vuex from "vuex";
import { components } from "./components";

Vue.use(Vuex);

export default new Vuex.Store({
	actions: {
		themeSwitch({ commit }, value) {
			commit("themeSwitch", value);
		},
		updateColors({ commit }, value) {
			commit("updateColors", value);
		},
		updateSelected({ commit }, value) {
			commit("updateSelected", value);
		}
	},
	mutations: {
		themeSwitch(state, value) {
			state.theme = value;
		},
		updateColors(state, value) {
			state.colors = value;
		},
		updateSelected(state, value) {
			state.selected = value;
		}
	},
	state: {
		colors: [],
		components: components,
		selected: "Components",
		theme: "light"
	}
});
