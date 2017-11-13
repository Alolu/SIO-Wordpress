
import Vue from 'vue'
import Vuex from 'vuex'
import Resource from 'vue-resource'

Vue.use(Vuex)
Vue.use(Resource)

export const store = new Vuex.Store({
	state: {
		url: 'http://172.20.10.6/wordpressAPI/public/index.php/api/',
		isLoggedIn: null,
		pending: false,
		Signed: null
	},
	getters: {
		isLoggedIn: state => {
			return state.isLoggedIn
		},
		Signed: state => {
			return state.Signed
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
		},
		sign: state => {
			state.pending = true
		},
		sign_success: state => {
			state.pending = false
			state.Signed = true
		},
		sign_failure: state => {
			state.pending = false
			state.Signed = false
		},
		sign_destroy: state => {
			state.Signed = null
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
			Vue.http.get(state.url+'customers/compare',{params:  {mail: log_info.mail,pass: log_info.pass}})
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
		},
		addCustomer({state,commit}, creds){
			commit('sign');
			Vue.http.post(state.url+'customer/add',creds)
			.then((response) => {
				if(response.status == 200){
					commit('sign_success')
				}
				if(response.status == 401){
					commit('sign_failure')
					console.log('unauthorized')
				}
			})
		}
	}
})