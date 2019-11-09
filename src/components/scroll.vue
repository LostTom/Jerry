<template>
	<div class="scroll">
		<ul id="lists">
			<li>
				<img src="@/assets/slide2.png" />
			</li>
			<li>
				<img :class="{left:back}" src="@/assets/slide3.png" />
			</li>
		</ul>
	</div>
</template>

<script>
	var i = 0;
	var back = window.setInterval(function() {
		i=i+1;
		
		if (i % 2 == 0) {
			return true
		} else {
			return false
		}
		
	}, 2000)
	export default {
		name: "scroll",
		data: function() {
			return {
				back: back
			}
		}
	}
</script>

<style>
	.scroll {
		height: 140px;
		width: 100%;
		overflow: hidden;
	}

	.scroll ul {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.scroll ul li {
		width: 100%;
		height: 100%;
		float: left;
		display: flex;
		justify-content: center;
		position: absolute;
		top: 0;
	}

	.scroll ul li img {
		height: 100%;
	}

	.left {
		opacity: 0;
	}
</style>
