(function(){

	angular.module('fentec').controller('avaliadorController', function($scope, $window, $http){
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
			$http.post('./service/tbavaliadors', $scope.model).success(function(data){
				$scope.read();
			});	
		};

		$scope.read = function(){
			try
			{
				aj.get('./service/tbavaliadors').success(function(data){
					$scope.arrAvaliador = data;
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
				url: './service/tbavaliadors',
				data: $scope.model,
			}).success(function(data){
				$scope.read();
			});
		};

		$scope.delete = function($id){
			aj.delete('./service/tbavaliadors/'+$id).success(function(data){
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
			window.location="AvaliadorEdit.html?id="+$id;
		};
		
		$scope.init();

	});
})();