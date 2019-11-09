<template>
	<transition name="fadeleft">
	<div v-if="this.$store.state.ob" class="show">
		<span @click="backs()">show</span>
	</div>
	</transition>
</template>

<script>
	export default{
		name:"show",
		components: {
		},
		methods:{
			backs:function(){
				this.$store.state.ob=false
			}
		}
	}
</script>

<style scoped="scoped">
	.show{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 899;
		height: 100%;
		background: #f3f4f5;
		width: 100%;
	}
	.fadeleft-enter-active, .fadeleft-leave-active {
	  transition:transform .8s;
	}
	 .fadeleft-leave-to {
	  transform:translateX(200%) ;
	}
	.fadeleft-enter{
		transform:translateX(200%) ;
	
	}
	.list{
		height: 50px;
	}
</style>
