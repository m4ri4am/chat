import Vue from 'vue';
import router from './router';
import store from './store';
import axios from "./axios";
import Enter from "./Enter.vue";


Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	axios,
	render: (h) => h(Enter),
}).$mount('#app');
