(function(){

	angular.module('fentec').controller('NotaController', function($scope, $window, $http){
		var 
			$ = jQuery,
			ng = $scope,
			aj = $http,
			wi = $window
		;

		$scope.init = function(){
			$scope.updateMode = false;
			$scope.read();
		};

		$scope.create = function(){
			$http.post('./service/tbprojetoavaliador', $scope.model).success(function(data){
				$scope.read();
			});	
		};

		$scope.read = function(){
			try
			{
				aj.get('./service/tbprojetoavaliador').success(function(data){
					$scope.arrNota = data;
				});
			}
			catch(err)
			{
				alert(err.message);
			}
		};

		$scope.update = function(){
			jQuery.ajax({
				type: 'put',
				url: './service/tbprojetoavaliador',
				data: $scope.model,
			}).success(function(data){
				$scope.read();
			});
		};

		$scope.cancel = function(){
			$scope.model = {};
			$scope.updateMode = false;
		};

		$scope.save = function(){
			if($scope.updateMode){
				$scope.update();
			}
			else{
				$scope.create();
			}
		}
		
		$scope.init();

	});
})();