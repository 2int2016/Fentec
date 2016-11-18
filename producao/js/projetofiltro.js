(function(){

	angular.module('fentec').controller('FiltroController', function($scope, $window, $http){
		var 
			$ = jQuery,
			ng = $scope,
			aj = $http,
			wi = $window
		;
		
		$scope.getUrlVars = function () {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
			});
			return vars;
		}
		
		$scope.init = function(){

			if($scope.getUrlVars()["objetivo"]!=null){
			$scope.o = $scope.getUrlVars()["objetivo"];
			switch ($scope.o) {
				
				case '1':
					document.getElementById("dropdown1-tab")  .click();
				
				break;
				case '2':
				document.getElementById("dropdown2-tab").click();
				
				break;
				case '3':
				document.getElementById("dropdown3-tab").click();
				break;
				case '4':
				document.getElementById("dropdown4-tab").click();
				break;
				case '5':
				document.getElementById("dropdown5-tab").click();
				break;
				case '6':
				document.getElementById("dropdown6-tab").click();
				break;
				case '7':
				document.getElementById("dropdown7-tab").click();
				break;
				case '8':
				document.getElementById("dropdown8-tab").click();
				break;
			
				
			}
			}
			$scope.u = $scope.getUrlVars()["meta"];
			switch ($scope.u) {
				case '1':
				document.getElementById("dropdown9-tab").click();
				break;
				case '2':
				document.getElementById("dropdown10-tab").click();
				break;
				case '3':
				document.getElementById("dropdown11-tab").click();
				break;
				case '4':
				document.getElementById("dropdown12-tab").click();
				break;
				case '5':
				document.getElementById("dropdown13-tab").click();
				break;
				case '6':
				document.getElementById("dropdown14-tab").click();
				break;
				case '7':
				document.getElementById("dropdown15-tab").click();
				break;
				case '8':
				document.getElementById("dropdown16-tab").click();
				break;
				case '9':
				document.getElementById("dropdown17-tab").click();
				break;
				case '10':
				document.getElementById("dropdown18-tab").click();
				break;
				case '11':
				document.getElementById("dropdown19-tab").click();
				break;
				case '12':
				document.getElementById("dropdown20-tab").click();
				break;
				case '13':
				document.getElementById("dropdown21-tab").click();
				break;
				case '14':
				document.getElementById("dropdown22-tab").click();
				break;
				case '15':
				document.getElementById("dropdown23-tab").click();
				break;
				case '16':
				document.getElementById("dropdown24-tab").click();
				break;
			
			}
			$scope.t = $scope.getUrlVars("")["turma"];
			switch ($scope.t) {
				case '1':
				document.getElementById("dropdown25-tab").click();
				break;
				case '2':
				document.getElementById("dropdown26-tab").click();
				break;
				case '3':
				document.getElementById("dropdown27-tab").click();
				break;
				case '4':
				document.getElementById("dropdown28-tab").click();
				break;
				
			
			}
		
		};
		$scope.init();

	});
	

	
})();