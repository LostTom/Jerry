import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Vuex from "vuex"
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
	state:{
		ob:false,
		ob1:true
	}
})

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
