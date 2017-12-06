<template>
<div>
	{{hello}}
	<button class="my-button" v-on:click="emitMyEvent">自定义</button>
</div>
</template>

<script>
	export default{
		data:function(){
			return {
				hello:'I am a component test!'
			}
		},
		methods:{
			emitMyEvent:function(){
				this.$emit('my-event',this.hello)
			}
		}
	}

</script>

<style>
	
	.my-button{
		width: 100px;
		height: 50px;
		background-image: url(https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png);
		background-color: blue;
		background-size: 50% auto;
		background-repeat: no-repeat;
		background-position: right center; 
		border: 1px;
		color: #fff;
		border-radius: 5px;
		text-align: left;
	}
</style>