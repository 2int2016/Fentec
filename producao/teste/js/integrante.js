(function(){
	var app = angular.module('fentec',[]);

	app.controller('IntegranteController', function($scope, $window, $http){
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
			$http.post('./service/tbintegrantes', $scope.model).success(function(data){
				$scope.read();
			});	
		};

		$scope.read = function(){
			try
			{
				aj.get('./service/tbintegrantes').success(function(data){
					$scope.arr = data;
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
				url: './service/tbintegrantes',
				data: $scope.model,
			}).success(function(data){
				$scope.read();
			});
		};

		$scope.delete = function($id){
			aj.delete('./service/tbintegrantes/'+$id).success(function(data){
				$scope.read();
			});
		};

		$scope.change = function($value){
			$scope.updateMode = true;
			$scope.model = $value;
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
		};
		$scope.editar = function($id){
			window.location="integranteEdite.html?id="+$id;
		};
		

		$scope.init();

	});
})();