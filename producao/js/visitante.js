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
			$scope.model ={};
		};
		

		$scope.create = function(){
			$scope.uploadFile();
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
		
		$("fileUpload").on('change' , function (){
			if (typeof (FileReader) != "undefined"){
				var image_holder = $("#image_holder");
				image_holder.empty();
				
				var reader = new FileReader();
				read.onload = function (e) {
					$("<img />" , {
						"src": e.target.result,
						"class": "thumb-image"
					}).appendTo(image_holder);
				}
				image_holder.show();
				$scope.model.arquivo = $(this)[0].files[0].name;
				reader.readAsDataURL($(this)[0].files[0]);
			}else{
				alert("Este navegador n?o suporta FileReader");
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
		})
		};
		
		
		$scope.init();

	});
})();