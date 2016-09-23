(function(){
	angular.module('fentec').controller('LogarController', function($scope, $window, $http){
		var 
			$ = jQuery,
			ng = $scope,
			aj = $http,
			wi = $window
	
		;
	$scope.logar = function(){
		if(document.getElementById('email').value == 'material' &&  document.getElementById('senha').value == 'material'){
			window.location="listamaterialnew.html";
		}
		else if(document.getElementById('email').value == 'orientador' &&  document.getElementById('senha').value == 'orientador'){
			window.location="cadastroorientador.html";
		}
		else if(document.getElementById('email').value == 'avaliador' &&  document.getElementById('senha').value == 'avaliador'){
			window.location="listaavaliadores.html";
		}
		else if(document.getElementById('email').value == 'coordenacao' &&  document.getElementById('senha').value == 'coordenacao'){
			window.location="perfilorient.html";
		}
		else if(document.getElementById('email').value == 'visitante' &&  document.getElementById('senha').value == 'visitante'){
			window.location="listavisitantes.html";
		}
		else if(document.getElementById('email').value == 'orientador2' &&  document.getElementById('senha').value == 'orientador2'){
			window.location="dadosorient.html";
		}
		else{
			alert("Email ou Senha inválida");
		}
		
		
		
	
	};
	
	});
	
})();