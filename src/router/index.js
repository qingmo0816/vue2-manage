import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../page/login'
import Home from '../page/home'
const routes = [
	{
		path: '/',
		component: Login,
		name:'Login'
	},
	{
		path: '/home',
		component: Home,
		name:'home'
	},
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
