(function(){
	
	angular.module('fentec').controller('LogarController', function($scope, $window, $http){
		var 
			$ = jQuery,
			ng = $scope,
			aj = $http,
			wi = $window
	
		;

		$scope.init = function(){
			$scope.usu = {};
			$scope.buscar();
		};
		

		
		

		$scope.buscar = function(){
			try
			{
				aj.get('./service/tborientadores/buscar').success(function(data){
					if(data !== "0"){
						$scope.usu = data;
						$scope.autenticar();
					};
				});
			}
			catch(err)
			{
				alert(err.message);
			}
		};
		
		$scope.autenticar = function(){
			$http.post('./service/tborientadores/autenticar', $scope.usu).success(function(data){
				if(data == "34" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "cadastroorientador.html";
				}
				else if(data == "30" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "dadosorient.html?email=+$email";
				}
				else if(data == "35" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "dadosorient.html?email=+$email";
				}
				else if(data == "36" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "dadosorient.html?email=+$email";
				}
				else if(data == "37" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "dadosorient.html?email=+$email";
				}
				else if(data == "38" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "dadosorient.html?email=+$email";
				}
				else if(data == "39" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "cadastromaterial.html?email=+$email";
				}
				else if(data == "40" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "cadastroavaliador.html?email=+$email";
				}
				else if(data == "41" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "listprojetos.html?email=+$email";
				}
				else if(data !== "0" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "dadosorient.html?email=+$email";
				}
				
				
				
				else if(window.location.pathname == "/fentec/producao/conta.html"){
					alert('Usuário ou senha incorretos');
				};
			});
		};
	
		$scope.sair = function(){
			try
			{
				aj.get('./service/tborientadores/sair').success(function(data){
					window.location = "conta.html";
				});
			}
			catch(err)
			{
				alert(err.message);
			}
		}
	
		$scope.init();
		
	});
})();