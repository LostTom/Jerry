<template>
	<div class="gaodu">
		<navbar></navbar>
		<tabbar></tabbar>
		<imgunit></imgunit>
	</div>
</template>

<script>
	import tabbar from "@/components/tabbar2.0.vue"
	import navbar from '@/components/navbar.vue'
	import imgunit from "@/components/imgunit.vue"
	export default{
		name:"index",
		components:{
			navbar:navbar,
			tabbar:tabbar,
			imgunit:imgunit
		}
	}
</script>

<style scoped>
	.gaodu{
		height: 100%;
	}
	
</style>
