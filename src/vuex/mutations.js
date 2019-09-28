export default{
	mutationsAddCount(state,n=0){
		console.log(state)
		state.count += n;
	},
	mutationsReduceCount(state,n=0){
		state.count -= n;
	},
}