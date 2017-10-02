
import Vue from 'vue'
import Vuex from 'vuex'
import Resource from 'vue-resource'

Vue.use(Vuex)
Vue.use(Resource)

export const store = new Vuex.Store({
	state: {
		isLoggedIn: !!localStorage.getItem('token')
	},
	mutations: {
		login: state => {
			state.pending = true;
		},
		login_success: state => {
			state.isLoggedIn = true;
      		state.pending = false;
		},
		login_failure: state => {
			state.isLoggedIn = false;
			state.pending = false;
		}
	},
	actions: {
		login({state,commit,rootState},log_info){
			commit('login');
			Vue.http.get('http://172.20.10.6/wordpressAPI/public/index.php/api/customers/compare',{params:  {mail: log_info.mail,pass: log_info.pass}})
				.then((response) => Promise.resolve(
						console.log(response.data)
					))
            	.catch((error) => Promise.reject(
            			console.log(error),
            			commit('login_failure')
            		));
		}
	}
})