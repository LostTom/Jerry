<template>
  <div id="app">
	<router-view name="back"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	html{
		font-size: 37.5px;
	}
	html,body,#app{
		height: 100%;
		/* overflow: hidden; */
	}
	.gaodu{
		height: 100%;
		background: #f3f4f5;
		/* overflow: hidden; */
	}
	ul{
		list-style: none;
	}
</style>
