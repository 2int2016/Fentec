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
		 
		 $scope.sair = function(){
			try
			{
				aj.get('./service/tborientadores/sair').success(function(data){
					window.location = "conta.html";
				});
			}
			catch(err)
			{
				alert(err.message);
			}
		}
		
		$scope.create = function(){
			$http.post('./service/tborientadores', $scope.model).success(function(data){
				
				if(data==0){
					alert("email j? cadastrado");
				}
				else{
					alert('cadastro efetuado com sucesso');
					window.location="conta.html";
					
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
				alert('cadastro efetuado com sucesso');
				$scope.sair();
			}
		};
		
		$scope.editar = function($id){
			window.location="orientadoredit.html?id="+$id;
		};
		

		$scope.setcidades =function($estado){
			
			$scope.arrcidades=$estado["cidades"];
		};
		$("#fileUpload").on('change', function(){
			if(typeof (FileReader) !="undefined"){
				var image_holder = $("#image-holder");
				image_holder.empty();
				var reader = new FileReader();
				reader.onload - function (e) {
					$("<img/>",{
						"src": e.target.result,
						"class": "thumb-image"
					}).appendTo(image_holder);
				}
				image_holder.show();
				$scope.model.arquivo = $(this) [0].files[0].name;
				reader.readAsDataURL($(this) [0].files[0]);
			} else{
				alert("Este navegador não suporta FileReader.");
			}
		});
		$scope.uploadFile = function(){
			var fd = new FormData();
			$scope.files = document.getElementById("fileUpload");
			
			fd.append('file', $scope.files.files[0]);
			
			$http.post('./upload.php',fd,
			{
				transformRequest:angular.identify,
				headers:{'Content-Type':undefined}
			})
			.success(function(d){
				window.location="perfilorient.html";
		})
		};

		$scope.init();

	});
})();
