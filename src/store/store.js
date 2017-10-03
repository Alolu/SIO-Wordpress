
import Vue from 'vue'
import Vuex from 'vuex'
import Resource from 'vue-resource'

Vue.use(Vuex)
Vue.use(Resource)

export const store = new Vuex.Store({
	state: {
		isLoggedIn: !!localStorage.getItem('token')
	},
	getters: {
		isLoggedIn: state => {
			return state.isLoggedIn
		}
	},
	mutations: {
		login: state => {
			state.pending = true
		},
		login_success: state => {
			state.isLoggedIn = true
      		state.pending = false
		},
		login_failure: state => {
			state.isLoggedIn = false
			state.pending = false
		},
		logout: state => {
			state.isLoggedIn = false
		}
	},
	actions: {
		login({state,commit,rootState},log_info){
			commit('login');
			Vue.http.get('http://172.20.10.6/wordpressAPI/public/index.php/api/customers/compare',{params:  {mail: log_info.mail,pass: log_info.pass}})
				.then((response) => Promise.resolve(
						this.dispatch('login_check',response)
					))
            	.catch((error) => Promise.reject(
            			console.log(error),
            			commit('login_failure')
            		));
		},
		login_check({state,commit},response){
			if(response.data == 'MAUVAIS'){
				commit('login_failure')
			}else{
				localStorage.setItem("token", "JWT"),
         		commit('login_success')
			}
		},
		logout({commit}){
			localStorage.removeItem("token"),
			commit('logout')
		}
	}
})