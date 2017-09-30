export default {
	name: 'Hello',
	methods: {
		ajouterClient(){
			this.$http.get('172.20.10.6/wordpressAPI/public/index.php/api/customers').then(function(response){
				console.log(response);
			});
		}
	}
}