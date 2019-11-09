<template>
	<div class="gaodu">
		<friendtop></friendtop>
		<friendmiddle></friendmiddle>
	</div>
</template>

<script>
	import friendtop from "@/components/friendtop.vue"
	import friendmiddle from "@/components/friendmiddle.vue"
	export default{
		name:"zhibo",
		components: {
			friendtop:friendtop,
			friendmiddle:friendmiddle
		}
	}
</script>

<style>
</style>
