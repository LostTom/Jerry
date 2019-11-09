<template>
	<ul class="imgunit">
		<li v-for="li in lis">
			<img @click="backs()" :src="li.img"/>
			<p>{{li.zi}}</p>
		</li>
	</ul>
</template>

<script>
	export default{
		name:"imgunit",
		data:function(){
			return{
				lis:[
					{img:require("@/assets/p1.jpg"),zi:"国服钟馗实在太准，被系统警告！那我就泉水钩人，气哭系统！"},
					{img:require("@/assets/p2.jpg"),zi:"狙击手麦克：沙漠地图大秀AWM绝技，无视距离不浪费一发子弹！"},
					{img:require("@/assets/p3.jpg"),zi:"炮芯解说：新BOSS登场，长相酷似外星人，伤害技能更吓人！"},
					{img:require("@/assets/p4.jpg"),zi:"小包问答：克隆模式十个吕布大战，馒头目睹连中四个大招秒怂？"},
					{img:require("@/assets/p5.jpg"),zi:"火柴人逃跑寻找自由~"}
				]
			}
		},
		methods:{
			backs:function(){
				this.$store.state.ob=true,
				this.$store.state.ob1 = !this.$store.state.ob1
				
			}
		}
	}
</script>

<style>
	.imgunit{
		height: calc(100% - 66px - 1.6rem);
		overflow-y: scroll;
		margin-top: 5px;
	}
	.imgunit li{
		position: relative;
	}
	.imgunit li img{
		width: 100%;
	}
	.imgunit li p{
		font-size: 18px;
		position: absolute;
		top: 0;
		left: 5px;
		color: white;
		height: 48px;
		background: linear-gradient(to bottom,rgba(0,0,0,.1));;
	}
</style>
