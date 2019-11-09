<template>
	<ul class="list">
		<li v-for="backs in back">{{backs.name}} <img src="@/assets/right.svg"/></li>
	</ul>
</template>

<script>
	export default{
		name:"list",
		props:["back"]
	}
</script>

<style scoped>
	.list{
		background: #f3f4f5;
		/* height: 100%; */
		margin-bottom: 10px;
		/* border-top: 1px solid white; */
	}
	.list li{
		height: 50px;
		padding: 0 16px;
		line-height: 50px;
		font-size: .4rem;
		border-bottom: 1px solid #ddd;
		background: white;
	}
	.list li img{
		height: 20px;
		width: 20px;
		float: right;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
