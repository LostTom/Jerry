<template>
	<ul class="tabbar">
		<li @click="ibars=bar.path" :class="{selected:ibars==bar.path}" v-for="bar in bars">
			<router-link :to="bar.path">
				<span>{{bar.name}}</span>
			</router-link>
		</li>
	</ul>
</template>

<script>
	var bars = [{
			path: "/app/shouye",
			name: "首页",
			//imgd: "https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png",
			//img: "https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png"
		},
		{
			path: "/app/fangying",
			name: "课程",
			//img: "https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png",
			//imgd: "https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png"
		},
		{
			path: "/app/zhibo",
			name: "动态",
			//img: "https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png",
			//imgd: "https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png"
		},
		{
			path: "/app/wode",
			name: "我的",
			//img: "https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png",
			//imgd: "https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png"
		}
	];
	export default {
		name: "tabbar",
		data: function() {
			return {
				bars: bars,
				ibars:"/app/shouye"
			}
		},
		methods: {

		},
		watch: {

		}
	}
</script>

<style scoped>
	.tabbar {
		background: white;
		height: 1.6rem;
		font-size: 0.32rem;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
	}

	.tabbar li {
		height: 100%;
		width: 25%;
		float: left;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* .tabbar li img {
		width: 0.933333rem;
	} */
	.tabbar li:nth-child(1) a:before {
		width: 0.933333rem;
		height: 0.933333rem;
		content: "";
		background: url(https://gw.alicdn.com/tfs/TB1MWXdSpXXXXcmXXXXXXXXXXXX-72-72.png);
		background-size: 100%;
	}

	.tabbar li.selected:nth-child(1) a:before {
		width: 0.933333rem;
		height: 0.933333rem;
		content: "";
		background: url(https://gw.alicdn.com/tfs/TB1kCk2SXXXXXXFXFXXXXXXXXXX-72-72.png);
		background-size: 100%;
	}

	.tabbar li:nth-child(2) a:before {
		width: 0.933333rem;
		height: 0.933333rem;
		content: "";
		background: url(https://gw.alicdn.com/tfs/TB1ARoKSXXXXXc9XVXXXXXXXXXX-72-72.png);
		background-size: 100%;
	}

	.tabbar li.selected:nth-child(2) a:before {
		width: 0.933333rem;
		height: 0.933333rem;
		content: "";
		background: url(https://gw.alicdn.com/tfs/TB19Z72SXXXXXamXFXXXXXXXXXX-72-72.png);
		background-size: 100%;
	}

	.tabbar li:nth-child(3) a:before {
		width: 0.933333rem;
		height: 0.933333rem;
		content: "";
		background: url(https://gw.alicdn.com/tfs/TB1VKMISXXXXXbyaXXXXXXXXXXX-72-72.png);
		background-size: 100%;
	}

	.tabbar li.selected:nth-child(3) a:before {
		width: 0.933333rem;
		height: 0.933333rem;
		content: "";
		background: url(https://gw.alicdn.com/tfs/TB1aTgZSXXXXXazXFXXXXXXXXXX-72-72.png);
		background-size: 100%;
	}

	.tabbar li:nth-child(4) a:before {
		width: 0.933333rem;
		height: 0.933333rem;
		content: "";
		background: url(https://gw.alicdn.com/tfs/TB1Do3tSXXXXXXMaFXXXXXXXXXX-72-72.png);
		background-size: 100%;
	}

	.tabbar li.selected:nth-child(4) a:before {
		width: 0.933333rem;
		height: 0.933333rem;
		content: "";
		background: url(https://gw.alicdn.com/tfs/TB1LiNhSpXXXXaWXXXXXXXXXXXX-72-72.png);
		background-size: 100%;
	}

	.tabbar li a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		text-decoration: none;
		color: black;
	}
</style>
