<template>
	<div class="friendtop">
		<div class="friendtop1">
			<img src="@/assets/right1.svg"/>
			<img src="@/assets/xiangji1.svg"/>
		</div>
		<p>铠甲勇士</p>
		<img class="tupian" src="@/assets/f5.jpg"/>
	</div>
</template>

<script>
	export default{
		name:"friendtop"
	}
</script>

<style>
	.friendtop{
		width: 100%;
		height: 300px;
		/* border: 1px solid red; */
		background: url(../assets/f4.jpg) no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.friendtop1{
		width: 100%;
		height: 40px;
		/* border: 1px solid red; */
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.friendtop1 img:first-child{
		/* transform: rotateY(180deg); */
		height: 50%;
	}
	.friendtop1 img:last-child{
		height: 70%;
		margin-right: 10px;
	}
	.friendtop p{
		position: absolute;
		bottom: 10px;
		font-size: 18px;
		right: 80px;
		color: whitesmoke;
	}
	.tupian{
		width: 70px;
		height: 70px;
		border-radius: 5px;
		position: absolute;
		right: 10px;
		bottom: -15px;
		box-shadow: 1px 1px 5px gray
	}
</style>
