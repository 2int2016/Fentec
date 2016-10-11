(function(){

	angular.module('fentec').controller('NavController', function($scope, $window, $http){
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
			$scope.arrestados=arrestados;
			
			var id = $scope.getUrlVars()["id"];
			if(id !== undefined){
				$scope.getitem(id);
				$scope.updateMode = true;
				$scope.selecttab("buttonarrow1");
			}
			else{
				$scope.read();
				$scope.updateMode = false;
			}
			
			$scope.model={};
		};
	
		

		

	});
	})();