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
			decisao = confirm("Quer mesmo deletar?");
			if (decisao){
				aj.delete('./service/tbavaliadors/'+$id).success(function(data){
				$scope.read();
			});
			} else {
				
			}
			
		};

		$scope.change = function($value){
			$scope.updateMode = true;
			$scope.model = $value;
			window.location="cadastroavaliador.html?id="+$value.id;
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
				window.location="listaavaliador.html";
		})
		};
		
		$scope.init();

	});
})();