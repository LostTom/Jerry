import VueRouter from "vue-router"
import Vue from 'vue'
Vue.use(VueRouter)
import tabview from "@/tabview.vue"
import daiji from "@/daiji.vue"
import shouye from "@/erjiyemian/shouye.vue"
import fangying from "@/erjiyemian/fangying.vue"
import zhibo from "@/erjiyemian/zhibo.vue"
import wode from "@/erjiyemian/wode.vue"
import show from '@/show.vue'
var routes = [{
		path: "/",
		component: daiji
	},
	{
		path: "/app",
		components: {default:tabview,back:show},
		children: [{
				path: "shouye",
				component: shouye
			},
			{
				path: "fangying",
				component: fangying
			},
			{
				path: "zhibo",
				component: zhibo
			},
			{
				path: "wode",
				component: wode
			}
		]
	}
]
export default new VueRouter({
	routes
})
