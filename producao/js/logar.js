(function(){
	angular.module('fentec').controller('LogarController', function($scope, $window, $http){
		var 
			$ = jQuery,
			ng = $scope,
			aj = $http,
			wi = $window
	
		;
		
		$scope.autenticar = function($email,$senha){
			try
			{
				aj.get('./service/tborientadores/buscar').success(function(data){
					if (data.senha == $senha  ) {	
						if (data.email == 'coordenacao@fmm.com') {window.location = 'perfilorient.html?email='+$email;}
						else if (data.email == 'avaliador@fmm.com') {window.location = 'cadastroavaliador.html?email='+$email;}	
						else if (data.email == 'monitoria@fmm.com') {window.location = 'cadastromaterial.html?email='+$email;}	
						else if (data.email == 'orientae@fmm.com') {window.location = 'dadosorient.html?email='+$email;}
						else if (data.email == 'orientai@fmm.com') {window.location = 'dadosorient.html?email='+$email;}
						else if (data.email == 'orientam@fmm.com') {window.location = 'dadosorient.html?email='+$email;}
						else if (data.email == 'orientat@fmm.com') {window.location = 'dadosorient.html?email='+$email;}
						else if (data.email == 'orientint@fmm.com') {window.location = 'dadosorient.html?email='+$email;}
						else{
							window.location = 'dadosorient.html?email='+$email;
						}
					}
					else {
							alert ('Usuário ou senha inválidos.');
						}
				});
			}
			catch(err)
			{	
			
				alert(err.message);
			}
		};

		

	
		
		
	
	
	
	});
	
})();