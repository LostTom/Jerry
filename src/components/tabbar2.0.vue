<template>
	<ul class="tabbars">
		<li @click="ibar=index" :class="{red:ibar==index}" v-for="bar,index in bars">
			{{bar.name}}
		</li>
	</ul>
</template>

<script>
	export default {
		name: "tabbar",
		data: function() {
			return {
				bars: [
					{name:"关注"},
					{name:"推荐"},
					{name:"放映厅"},
					{name:"直播"},
					{name:"小视频"},
					{name:"影视"},
					{name:"游戏"},
					{name:"社会"},
					{name:"VLOG"},
					{name:"音乐"},
					{name:"综艺"}
				],
				ibar:0
			}
		},
	}
</script>

<style scoped>
	.tabbars{
		/* height: 30px; */
		/* width: 100%; */
		overflow-x: scroll;
		white-space: nowrap;
		/* overflow: hidden; */
		margin-top: 5px;
		font-size: 0;
	}
	.tabbars li{
		display: inline-block;
		margin-left: 10px;
		font-size: .5rem;
		/* line-height: ; */
	}
	.red{
		color: red;
		border-bottom: 1px solid red;
	}
</style>
