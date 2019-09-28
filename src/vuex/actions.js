export default{
	actionsAddCount(context,n=0){

		context.commit('mutationsAddCount',n)
	},
	actionsReduceCount(context,n=0){
		context.commit('mutationsReduceCount',n)
	}
}