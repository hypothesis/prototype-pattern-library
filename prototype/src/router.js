import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 112 }
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
	routes: [
		{
			path: "*",
			name: "Error",
			component: () => import("./views/Error")
		},
		{
			path: "/",
			name: "Home",
			component: () => import("./views/Home")
		}
	]
});
