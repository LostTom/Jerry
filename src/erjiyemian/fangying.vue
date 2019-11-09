<template>
	<div class="gaodu">
		<topbar></topbar>
		<scroll></scroll>
		<course></course>
	</div>
</template>

<script>
	import course from "@/components/course.vue"
	import topbar from "@/components/topbar.vue"
	import scroll from "@/components/scroll.vue"
	export default{
		name:"fangying",
		components:{
			course:course,
			topbar:topbar,
			scroll:scroll
		}
	}
</script>

<style>
</style>
