<template>
	<div class="gaodu">
		<router-view></router-view>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import tabbar from "@/tabbar.vue"
	export default{
		name:"tabview",
		components:{
			tabbar
		},
		beforeCreate:function(){
			  this.$router.push("/app/shouye")
		},
	}
</script>

<style scoped>

</style>
