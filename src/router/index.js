import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../login.vue';
import signup from '../signup.vue';
import chat from '../views/chat.vue';
// import store from '../store';
import app from "../App.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: app,
		redirect: "/chat",
		children: [
			{
				path: '/chat',
				component: chat,
				name: 'chat',
			},
		],
	},
	
	{
		path: "/login",
		name: "login",
		component: login,
	},
	{
		path: "/signup",
		name: "signup",
		component: signup,
	},

];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
// router.beforeEach((to, from, next) => {
// 	if ((to.path == '/login') && store.getters.isAuthenticated) { //if user is already logged in and tries to go to login
// 		next('/'); //redirect to home
// 	} else if ((to.path == '/login' || to.path == '/signup') &&!store.getters.isAuthenticated) { //if user is not logged in and tries to go to login or signup page
// 		next();
// 	} else {//if user is logged in and tries to go to another page
// 		if (store.getters.isAuthenticated) {
// 			next();
// 		} else {//if user is not logged in and tries to go to another page
// 			next('/login');
// 		}
// 	}
// });

export default router;