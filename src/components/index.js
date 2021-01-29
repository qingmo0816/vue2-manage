import headTop from './home/headTop.vue'
import leftMenu from './home/leftMenu.vue'
import mainEcharts from './home/mainEcharts.vue'

export default {
    install: function (Vue) {
        Vue.component('head-top', headTop)
        Vue.component('left-menu' ,leftMenu)
        Vue.component('main-echarts' ,mainEcharts)
    }
}