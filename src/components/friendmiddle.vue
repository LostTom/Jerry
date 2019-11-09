<template>
	<ul class="friendmiddle">
		<li v-for="back in backs">
			<div class="zuo">
				<img :src="back.img"/>
			</div>
			<div class="you">
				<h1>{{back.mizi}}</h1>
				<h2>{{back.neirong}}</h2>
				<img :src="back.peitu"/>
			</div>
		</li>
	</ul>
</template>

<script>
	export default{
		name:"friendmiddle",
		data:function() {
			return {
				backs:[
					{img:require("@/assets/touixang.svg"),mizi:"葫芦娃",neirong:"爷爷被抓走了！",peitu:require("@/assets/f7.jpg")},
					{img:require("@/assets/touixang.svg"),mizi:"奥特曼",neirong:"打败小怪兽了！",peitu:require("@/assets/f8.jpg")},
					{img:require("@/assets/touixang.svg"),mizi:"小怪兽",neirong:"被奥特曼打败了！",peitu:require("@/assets/f9.jpg")},
					{img:require("@/assets/touixang.svg"),mizi:"熊大",neirong:"光头强又来砍树了！",peitu:require("@/assets/f10.jpg")},
					{}
				]
			}
		}
	}
</script>

<style>
	.friendmiddle{
		width: 100%;
		height: auto;
		background: #f3f4f5;
	}
	.friendmiddle li{
		width: 100%;
		display: flex;
	}
	.friendmiddle li .zuo{
		width: 20%;
		height: 100px;
		/* border: 1px solid red; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.friendmiddle li .you{
		width: 50%;
		height: auto;
		/* border: 1px solid red; */
	}
	.friendmiddle li .you h1{
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		color: darkblue;
		margin-top: 20px;
	}
	.friendmiddle li .you h2{
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		width: 80%;
	}
	.friendmiddle li .you img{
		width: 100%;
	}
</style>
