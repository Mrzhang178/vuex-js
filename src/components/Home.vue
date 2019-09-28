<template>
	<div class="home">
		home
		<br>
		<input type="button" value="+" @click="handleAdd(2)">
		<input type="button" value="-" @click="handleReduce(2)">
		<br>
		{{$store.state.count}}
		<br>
		{{c}}--{{g}}
	</div>
</template>

<script>
	import {mapActions,mapState,mapGetters} from 'vuex'
	export default{
		methods:{
			...mapActions({
				handleAdd:'actionsAddCount',
				handleReduce:'actionsReduceCount'
			})
		},
		computed:{
			...mapState({
				c:'count'
			}),
			...mapGetters({
				g:'gettersCount'
			})
		}
	}

</script>

<style>

</style>