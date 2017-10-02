<template>
  <div id="app">

    <!-- NAV BAR -->
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand mb-0" href="#">WordpressSIO</h1>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link"> Accueil </router-link>
          </li>
          <li class="nav-item">
            <router-link to="Pricing" class="nav-link"> Prix </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- FIN NAV BAR -->

    <!-- ROUTE -->
    <router-view></router-view>
    <!-- FIN ROUTE -->

    <!-- MODALS -->
      <!-- MODAL CONNECTION/INSCRIPTION -->
        <div class="modal fade" id="signin" tabindex="-1" role="dialog" aria-labelledby="#signin" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">

                <!-- LISTE ONGLETS -->
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#connection" role="tab">Connection</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#inscription" role="tab">Inscription</a>
                  </li>
                </ul>
                <!-- FIN LISTE ONGLETS -->

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="tab-content">

                <!-- FORMULAIRE CONNEXION -->
                <div class="modal-body tab-pane active" id="connection">
                  <div class="form-group">
                    <label for="inputEmail" class="sr-only">Identifiant</label>
                    <input type="email" id="inputEmail" class="form-control" placeholder="Identifiant" required autofocus>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword" class="sr-only">Mot de passe</label>
                    <input type="password" id="inputPassword" class="form-control" placeholder="Mot de passe" required>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" value="remember-me"> Se souvenir de moi
                    </label>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
                  </div>
                  <p> 
                    Pas de compte ? <a data-toggle="tab" href="#inscription" role="tab"> Inscris toi ici </a>
                  </p>
                </div>
                <!-- FIN FORMULAIRE CONNEXION -->

                <!-- FORMULAIRE INSCRIPTION -->
                <div class="modal-body tab-pane" id="inscription">
                  <div class="form-group">
                    <label for="inputEmail" class="sr-only">Mail</label>
                    <input type="mail" id="inputMail" v-model="client.mail" class="form-control" placeholder="Identifiant" required autofocus>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword" class="sr-only">Mot de passe</label>
                    <input type="password" id="inputPassword" v-model="client.pass" class="form-control" placeholder="Mot de passe" required>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword" class="sr-only">Nom</label>
                    <input type="text" id="inputNom" v-model="client.nom" class="form-control" placeholder="Nom" required>
                  </div>
                  <div class="form-group">
                    <label for="inputPassword" class="sr-only">Prenom</label>
                    <input type="text" id="inputPrenom" v-model="client.prenom" class="form-control" placeholder="Prenom" required>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-lg btn-primary btn-block" @click="ajouterClient" type="submit" >S'inscrire</button>
                  </div>
                  <p> 
                    Tu as deja un compte ? <a data-toggle="tab" href="#connection" role="tab"> Connecte toi ici </a>
                  </p>
                </div>
                <!-- FIN FORMULAIRE INSCRIPTION -->

              </div>
            </div>
          </div>
        </div>
      <!-- FIN MODAL CONNECTION/INSCRIPTION -->
    <!-- FIN MODALS -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      client: {}
    }
  },
  methods: {
    ajouterClient(){
      let newClient = {
        mail    : this.client.mail,
        pass    : this.client.pass,
        nom     : this.client.nom,
        prenom  : this.client.prenom
      }
      console.log(newClient);
      this.$http.post('http://172.20.10.6/wordpressAPI/public/index.php/api/customer/add',newClient)
      .then(function(response){
        console.log(response);
      });
    }
  }
}
</script>
