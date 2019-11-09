<template>
	<div class="topbar">
		<img src="@/assets/liebiao.svg"/>
		<img src="@/assets/logo.png"/>
		<img src="@/assets/touxiang.png"/>
	</div>
</template>

<script>
	export default{
		name:"topbar"
	}
</script>

<style>
	.topbar{
		height: 40px;
		width: 100%;
		padding: 16px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.topbar img:first-child{
		width: 16px;
		height: 17px;
		margin-left: 10px;
	}
	.topbar img{
		height: 100%;
	}
	.topbar img:last-child{
		width: 30px;
		height: 30px;
		margin-right: 10px;
	}
</style>
