import Vue from 'vue';
import App from './App.vue';

import router from "./router/router";

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import PortalVue from 'portal-vue'
Vue.use(PortalVue)


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)






new Vue(Vue.util.extend({ router }, App)).$mount('#app');

