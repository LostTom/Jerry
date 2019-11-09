<template>
	<div class="gaodu">
		<list :back="lists"></list>
		<list :back="lists1"></list>
	</div>
</template>

<script>
	import list from "@/components/list.vue"
	export default{
		name:"wode",
		components:{
			list
		},
		data: function() {
			return {
				lists: [{
					name: "首页"
				}, {
					name: "我的"
				}, {
					name: "我的"
				}],
				lists1: [{
					name: "历史观看"
				}, {
					name: "充值中心"
				}, {
					name: "我的设置"
				}]
			}
		},
	}
</script>

<style>
</style>
