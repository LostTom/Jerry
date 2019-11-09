<template>
	<div class="daiji">
		<img src="@/assets/b4046643f5355ab870ae6ff40ea0cb07.jpg"/>
	</div>
</template>

<script>
	export default{
		name:"daiji",
		mounted:function(){
			window.setTimeout(()=>{
				this.$router.push("/app")
			},2000)
		}
	}
</script>

<style>
	.daiji{
		height: 100%;
		background: greenyellow;
	}
	.daiji img{
		height: 100%;
		width: 100%;
	}
</style>
