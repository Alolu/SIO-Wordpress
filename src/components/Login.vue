<template>
	<div class="login">
		<div class="container mt-5">
	        <form class="form-horizontal" role="form" method="POST" v-on:submit.prevent>
	            <div class="row">
	                <div class="col-md-3"></div>
	                <div class="col-md-6">
	                    <h2>Veuillez vous connecter</h2>
	                    <hr>
	                </div>
	            </div>
	            <div class="row">
	                <div class="col-md-3"></div>
	                <div class="col-md-6">
	                    <div class="form-group has-danger">
	                        <label class="sr-only" for="email">Adresse Email</label>
	                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
	                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
	                            <input type="text" name="email" class="form-control" id="email"
	                                   placeholder="vous@exemple.com" v-model="mail" required autofocus>
	                        </div>
	                    </div>
	                </div>
	                <div class="col-md-3">
	                    <div class="form-control-feedback">
	                        <span class="text-danger align-middle">
	                            <i class="fa fa-close"></i> Erreur
	                        </span>
	                    </div>
	                </div>
	            </div>
	            <div class="row">
	                <div class="col-md-3"></div>
	                <div class="col-md-6">
	                    <div class="form-group">
	                        <label class="sr-only" for="password">Mot de passe</label>
	                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
	                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-key"></i></div>
	                            <input type="password" name="password" class="form-control" id="password"
	                                   placeholder="Mot de passe" v-model="pass" required>
	                        </div>
	                    </div>
	                </div>
	                <div class="col-md-3">
	                    <div class="form-control-feedback">
	                        <span class="text-danger align-middle">
	                        <!-- Put password error message here -->    
	                        </span>
	                    </div>
	                </div>
	            </div>
	            <div class="row">
	                <div class="col-md-3"></div>
	                <div class="col-md-6" style="padding-top: .35rem">
	                    <div class="form-check mb-2 mr-sm-2 mb-sm-0">
	                        <label class="form-check-label">
	                            <input class="form-check-input" name="remember"
	                                   type="checkbox">
	                            <span style="padding-bottom: .15rem">Remember me</span>
	                        </label>
	                    </div>
	                </div>
	            </div>
	            <div class="row" style="padding-top: 1rem">
	                <div class="col-md-3"></div>
	                <div class="col-md-6">
	                    <button type="submit" @click="login()" class="btn btn-success"><i class="fa fa-sign-in"></i> Login</button>
	                    <a class="btn btn-link" href="/password/reset">Mot de passe oublié?</a>
	                    <router-link class="btn btn-link" :to="{ path: 'inscription', query: { redirect: redirect }}">Pas de compte?</router-link>
	                </div>
	            </div>
	        </form>
	    </div>
	</div>
</template>
<script>
  import { mapActions } from 'vuex'	
  export default {
    name: 'Login',
    data(){
    	return{
    		mail: '',
    		pass: '',
    		redirect: this.$route.query.redirect
    	}
    },
    beforeRouteLeave (to, from, next) {
    	if(to.meta.requiresAuth && !this.isLoggedIn){
    		console.log("unauthorized");
    	}else{
    		next()
    	}
  	},
    methods: {
    	login() {
		    this.$store.dispatch('login',{
		    	mail : this.mail,
		    	pass : this.pass
		    })
		},
    },
    computed: {
    	isLoggedIn: function(){
    		return this.$store.getters.isLoggedIn
    	}
    },
    watch: {
    	isLoggedIn: function(){
    		if(!this.$route.query.redirect){
    			this.$router.push('/');
    		}else{
    			this.$router.push(this.redirect)
    		}
    	}
    }
  }
</script>