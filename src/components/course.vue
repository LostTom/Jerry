<template>
	<ul class="course">
		<li v-for="back in backs">
			<img :src="back.dizhi" />
			<p>{{back.wenzi}}</p>
			<div class="biankuang">
				<i>{{back.wenzi1}}</i>
				<span>{{back.wenzi2}}</span>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "course",
		data: function() {
			return {
				backs: [{
						dizhi: require("@/assets/q1.jpg"),
						wenzi: "Git&GitHub视频教程",
						wenzi1: "62.4元",
						wenzi2: "78元"
					},
					{
						dizhi: require("@/assets/q2.jpg"),
						wenzi: "Maven视频教程",
						wenzi1: "9.8元",
					},
					{
						dizhi: require("@/assets/q3.jpg"),
						wenzi: "JavaScript DOM视频",
						wenzi1: "9.8元",
					},
					{
						dizhi: require("@/assets/q4.jpg"),
						wenzi: "SpringCloud视频教程",
						wenzi1: "178元",
						wenzi2: "890元"
					},
					{
						dizhi: require("@/assets/q5.jpg"),
						wenzi: "Jenkins",
						wenzi1: "78元",
						wenzi2: "390元"
					},
					{
						dizhi: require("@/assets/q6.jpg"),
						wenzi: "Java学科之第一季Java面试题",
						wenzi1: "56元",
						wenzi2: "280元"
					},
					{
						dizhi: require("@/assets/q7.jpg"),
						wenzi: "Dubbo视频教程",
						wenzi1: "78元",
						wenzi2: "380元"
					},
					{
						dizhi: require("@/assets/q8.jpg"),
						wenzi: "Docker核心技术",
						wenzi1: "118元",
						wenzi2: "590元"
					},
					{
						dizhi: require("@/assets/q8.jpg"),
						wenzi: "Docker核心技术",
						wenzi1: "118元",
						wenzi2: "590元"
					},
					{
						dizhi: require("@/assets/q8.jpg"),
						wenzi: "Docker核心技术",
						wenzi1: "118元",
						wenzi2: "590元"
					}
				]
			}
		}
	}
</script>

<style>
	.course {
		height: calc(100% - 1.5rem - 220px - 8px);
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 14px;
		overflow-y: scroll;
		margin-top: 5px;
	}

	.course li {
		height: auto;
		width: 48%;
	}

	.course li img {
		width: 100%;
	}

	.course li p {
		font-size: 14px;
		margin-bottom: 6px;
	}

	.course li i {
		/* list-style: none; */
		font-style: normal;
		margin-left: 116px;
		color: #70d445 !important;
		/* margin-top: 10px; */
		padding-right: 5px;
	}

	.course li span {
		color: #999;
		text-decoration:line-through;
		margin-left: 0px;
	}
</style>
