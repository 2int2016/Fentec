(function(){

	angular.module('fentec').controller('OrientadorController', function($scope, $window, $http){
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
			$http.post('./service/tborientadores', $scope.model).success(function(data){
				
				if(data==0){
					alert("email já cadastrado");
				}
				else{
					window.location="dadosorient.html";
				}
				
			});	
		};

		$scope.read = function(){
			try
			{
				aj.get('./service/tborientadores').success(function(data){
					$scope.arrOrientadores = data;
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
				url: './service/tborientadores',
				data: $scope.model,
			}).success(function(data){
				$scope.read();
			});
		};

		$scope.delete = function($id){
			aj.delete('./service/tborientadores/'+$id).success(function(data){
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
			window.location="orientadoredit.html?id="+$id;
		};
		

		$scope.setcidades =function($estado){
			
			$scope.arrcidades=$estado["cidades"];
		};

		$scope.init();

	});
})();
