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
				if(data !== "0" && window.location.pathname == "/fentec/producao/conta.html"){
					window.location = "dadosorient.html";
				}
				
				
				else if(window.location.pathname == "/fentec/producao/conta.html"){
					alert('usuario ou senha incorretos');
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