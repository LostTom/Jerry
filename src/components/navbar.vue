<template>
		<div class="navbar">
			<img src="@/assets/fangdajing.svg" />
			<input type="text" placeholder="请输入搜索内容..." />
		</div>
</template>

<script>
	export default {
		name: "navbar",
		
	}
</script>

<style>
	.navbar {
		width: 95%;
		height: 35px;
		border: 1px solid #ddd;
		/* background: #ddd; */
		margin: 0 auto;
		border-radius: 5px;
		/* margin-top: 9px; */
	}

	.navbar img {
		height: 20px;
		width: 20px;
		vertical-align: top;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}

	.navbar input {
		width: 80%;
		height: 100%;
		vertical-align: top;
		border: none;
		outline: none;
		background: #f3f4f5;
		margin-left: 10px;
	}
</style>
