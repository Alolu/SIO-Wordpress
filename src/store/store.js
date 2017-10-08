
import Vue from 'vue'
import Vuex from 'vuex'
import Resource from 'vue-resource'

Vue.use(Vuex)
Vue.use(Resource)

export const store = new Vuex.Store({
	state: {
		isLoggedIn: null
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
		check_auth({state,commit}){
			console.log(localStorage.getItem('id_token'));
			if(localStorage.getItem('id_token')){
				commit('login_success');
				Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
			}else{
				commit('login_failure');
			}
		},
		login({state,commit,rootState},log_info){
			commit('login');
			Vue.http.get('http://172.20.10.6/wordpressAPI/public/index.php/api/customers/compare',{params:  {mail: log_info.mail,pass: log_info.pass}})
			.then( (response) => {
		        if(response.status == 200){
		        	commit('login_success');
		        	console.log(response);
		        	localStorage.setItem('id_token', response.body.jwt)
		        	Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.jwt
		        }
		      }, (response) => {
		        if(response.status == 401){
		        	commit('login_failure');
		        }
		      })
				
		},
		logout({commit}){
			localStorage.removeItem('id_token'),
			delete Vue.http.headers.common['Authorization'],
			commit('logout')
		}
	}
})