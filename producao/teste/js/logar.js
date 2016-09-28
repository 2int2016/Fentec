(function(){
	angular.module('fentec').controller('LogarController', function($scope, $window, $http){
		var 
			$ = jQuery,
			ng = $scope,
			aj = $http,
			wi = $window
	
		;
	$scope.logar = function(){
		if(document.getElementById('email').value == 'material' &&  document.getElementById('senha').value == 'material123'){
			window.location="cadastromaterial.html";
		
		}
		else if(document.getElementById('email').value == 'orient' &&  document.getElementById('senha').value == 'orient123'){
			window.location="cadastroprojeto.html";
		}
		else if(document.getElementById('email').value == 'avaliador' &&  document.getElementById('senha').value == 'aval123'){
			window.location="listaavaliadores.html";
		}
		else if(document.getElementById('email').value == 'coordenacao' &&  document.getElementById('senha').value == 'coord123'){
			window.location="perfilorient.html";
		}
	
	
	};
	
	});
	
})();