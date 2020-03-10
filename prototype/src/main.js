import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/";
import "./registerServiceWorker";
import ClickOutside from "vue-click-outside";
import Head from "vue-headful";

Vue.component("Head", Head);
Vue.directive("ClickOutside", ClickOutside);
Vue.use(require("vue-moment"));

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
