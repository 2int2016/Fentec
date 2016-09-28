(function(){
	

	angular.module('fentec').controller('MatController', function($scope, $window, $http){
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

		$scope.create = function($p){
			$http.post('./service/tbmonit', $scope.model).success(function(data){
				if(window.innerWidth <= 800 || window.innerHeight > window.innerWidth) 		{
			window.location = 'monitmob.html'
				} 
				else {
					window.location = 'listamaterial.html'
				}
				
			});	
		};

		$scope.read = function(){
			try
			{
				aj.get('./service/tbmonit').success(function(data){
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
				url: './service/tbmonit',
				data: $scope.model,
			}).success(function(data){
				$scope.read();
			});
		};

		$scope.delete = function($id){
			aj.delete('./service/tbmonit/'+$id).success(function(data){
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

		$scope.init();

	});
	
	
})();
