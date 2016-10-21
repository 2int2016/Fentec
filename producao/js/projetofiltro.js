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

			
			$scope.o = $scope.getUrlVars()["objetivo"];
			switch ($scope.o) {
				
				case '1':
					document.getElementById("dropdown1-tab").click();
					
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
				case '9':
				document.getElementById("dropdown9-tab").click();
				break;
				case '10':
				document.getElementById("dropdown10-tab").click();
				break;
				case '11':
				document.getElementById("dropdown11-tab").click();
				break;
				case '12':
				document.getElementById("dropdown12-tab").click();
				break;
				case '13':
				document.getElementById("dropdown13-tab").click();
				break;
				case '14':
				document.getElementById("dropdown14-tab").click();
				break;
				case '15':
				document.getElementById("dropdown15-tab").click();
				break;
				case '16':
				document.getElementById("dropdown16-tab").click();
				break;
				case '17':
				document.getElementById("dropdown17-tab").click();
				break;
				case '18':
				document.getElementById("dropdown18-tab").click();
				break;
				case '19':
				document.getElementById("dropdown19-tab").click();
				break;
				case '20':
				document.getElementById("dropdown20-tab").click();
				break;
				case '21':
				document.getElementById("dropdown21-tab").click();
				break;
				case '22':
				document.getElementById("dropdown22-tab").click();
				break;
				case '23':
				document.getElementById("dropdown23-tab").click();
				break;
				case '24':
				document.getElementById("dropdown24-tab").click();
				break;
				case '25':
				document.getElementById("dropdown25-tab").click();
				break;
				case '26':
				document.getElementById("dropdown26-tab").click();
				break;
				case '27':
				document.getElementById("dropdown27-tab").click();
				break;
				case '28':
				document.getElementById("dropdown28-tab").click();
				break;
				
				
			}
		};
	

		$scope.init();

	});
	

	
})();