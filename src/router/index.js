import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '../page/login'
import manage from '../page/home/manage'
import Main from '../page/home/main'
import userList from '../page/home/userList'
import shopList from '../page/home/shopList'
import foodList from '../page/home/foodList'
import orderList from '../page/home/orderList'
import adminList from '../page/home/adminList'
import addShop from '../page/home/addShop'
import addGoods from '../page/home/addGoods'
import visitor from '../page/home/visitor'
import vueEdit from '../page/home/vueEdit'
import adminSet from '../page/home/adminSet'
import explain from '../page/home/explain'
const routes = [
	{
		path: '/',
		component: Login,
		name: 'Login'
	},
	{
		path: '/manage',
		component: manage,
		name: 'manage',
		children: [
			{
				path: '', // 默认的二级路由  的地址 path为空串
				component: Main,
			},
			{
				path: '/userList',
				component: userList,
				meta: ['数据管理', '用户列表']
			},
			{
				path: '/shopList',
				component: shopList,
				meta: ['数据管理', '商家列表'],
			},
			{
				path: '/foodList',
				component: foodList,
				meta: ['数据管理', '食品列表'],
			},{
				path: '/orderList',
				component: orderList,
				meta: ['数据管理', '订单列表'],
			},
			{
				path: '/addShop',
				component: addShop,
				meta: ['添加数据', '添加商铺'],
			},{
				path: '/addGoods',
				component: addGoods,
				meta: ['添加数据', '添加商品'],
			},
			{
				path: '/addGoods',
				component: addGoods,
				meta: ['添加数据', '添加商品']
			},
			{
				path: '/visitor',
				component: visitor,
				meta: ['图表', '用户分布']
			},
			{
				path: '/vueEdit',
				component: vueEdit,
				meta: ['编辑', '文本编辑']
			},
			{
				path: '/adminSet',
				component: adminSet,
				meta: ['设置', '管理员设置']
			},
			{
				path: '/explain',
				component: explain,
				meta: ['说明', '说明']
			}
		]
	},
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
