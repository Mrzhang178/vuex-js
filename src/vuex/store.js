import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		count:2
	},
	mutations,
	actions,
	getters:{
		gettersCount(state){
			return state.count *100; 
		}
	}
	
})