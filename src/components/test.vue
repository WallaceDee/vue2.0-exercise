<template>
<div>
	{{hello}}
	<slot name="sa"></slot>插槽开始<slot name="sb"></slot>插槽结束	<slot name="sc"></slot>

	<button class="my-button" v-on:click="emitMyEvent">自定义{{number}}</button>
</div>
</template>

<script>
	export default{
		props:['number'],
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