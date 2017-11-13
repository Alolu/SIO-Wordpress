<template>
	<div class="inscription">
		<div class="container mt-5">
	        <form class="form-horizontal" role="form" method="POST" v-on:submit.prevent>
	            <div class="row">
	                <div class="col-md-3"></div>
	                <div class="col-md-6">
	                    <h2>S'inscrire</h2>
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
	                <div class="col-md-6">
	                    <div class="form-group">
	                        <label class="sr-only" for="nom">Nom</label>
	                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
	                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
	                            <input type="nom" name="nom" class="form-control" id="nom"
	                                   placeholder="Nom" v-model="nom" required>
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
	                <div class="col-md-6">
	                    <div class="form-group">
	                        <label class="sr-only" for="prenom">Prenom</label>
	                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
	                            <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
	                            <input type="prenom" name="prenom" class="form-control" id="prenom"
	                                   placeholder="Prenom" v-model="prenom" required>
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
	                    <button type="submit" @click="sign()" class="btn btn-success"><i class="fa fa-sign-in"></i> S'inscrire</button>
	                    <router-link class="btn btn-link" :to="{ path: 'inscription', query: { redirect: redirect }}">Vous avez deja un compte?</router-link>
	                </div>
	            </div>
	        </form>
	    </div>
	</div>
</template>
<script>
  export default {
    name: 'Hello',
    data(){
    	return {
      		nom: '',
      		prenom: '',
      		mail: '',
      		pass: '',
      		redirect: this.$route.query.redirect
      	}
    },
    methods: {
    	sign(){
    		this.$store.dispatch('addCustomer', {
    			mail: this.mail,
    			pass: this.pass,
    			nom: this.nom,
    			prenom: this.prenom
    		})
    	}
    },
    computed: {
    	Signed: function(){
    		return this.$store.getters.Signed
    	}
    },
    watch: {
    	Signed: function(){
    		console.log(this.Signed);
    		if(this.Signed){
    			this.$router.push({path: '/login', query: this.redirect}),
    			this.$store.commit('sign_destroy')
    		}else{
    			console.log('fail')
    		}
    	}
    }
  }
</script>