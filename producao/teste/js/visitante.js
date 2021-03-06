(function(){
	
	angular.module('fentec').controller('NavController', function($scope, $window, $http){
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
			$http.post('./service/tbvisitantes', $scope.model).success(function(data){
				
				if(data==0){
					alert("email já cadastrado");
				}
				else{
					window.location="cadastroefetuado.html";
				}
				
			});	
		};
		 
		$scope.read = function(){
			try
			{
				aj.get('./service/tbvisitantes').success(function(data){
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
				url: './service/tbvisitantes',
				data: $scope.model,
			}).success(function(data){
				$scope.read();
			});
		};

		$scope.delete = function($id){
			aj.delete('./service/tbvisitantes/'+$id).success(function(data){
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
			window.location="visitanteEdite.html?id="+$id;
		};
		
		$scope.editarMob = function($id){
			window.location="visitanteEditeMob.html?id="+$id;
		};
		
	
		
		
		$scope.init();

	});
})();