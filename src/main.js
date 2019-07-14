import Vue from 'vue'
import App from './App.vue'
import store from './store'
import HighchartsVue from '../node_modules/highcharts-vue/dist/highcharts-vue.min.js'
Vue.use(HighchartsVue)

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
