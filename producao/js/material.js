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
			$scope.model = {};
		};

		$scope.create = function($p){
			$scope.uploadFile();
			$http.post('./service/tbmonit', $scope.model).success(function(data){
				
				if(data==0){
					alert("Numero do ativo já cadastrado");
				}
				else{
					if(window.innerWidth <= 800 || window.innerHeight > window.innerWidth) 		{
			window.location = 'listamaterialmob.html'
				} 
				else {
					window.location = 'listamaterial.html'
				}
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
			decisao = confirm("Quer mesmo deletar?");
			if (decisao){
				aj.delete('./service/tbmonit/'+$id).success(function(data){
				$scope.read();
			});
			} else {
				
			}
			
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
			$scope.model.projeto = document.getElementById("ipt9").value;
			
			$agora = new Date();
			$ano=$scope.model.ida.substr(6,9);
			$mes=$scope.model.ida.substr(3,2);
			$dia=$scope.model.ida.substr(0,2);
			$anoo=$scope.model.retorno.substr(6,9);
			$mess=$scope.model.retorno.substr(3,2);
			$diaa=$scope.model.retorno.substr(0,2);
			
			
			if(  $ano != '2016'  || $mes > '12'  || $dia > '31' && $anoo != '2016'  || $mess > '12'  || $diaa > '31'   ){
					alert("Data invalida");
				}
				
				else{
			
						if($scope.updateMode){
							$scope.update();
							
						}
						else{
							
							$scope.create();
							
						}
				}
		};
		
		
		$("#fileUpload").on('change' , function (){
			if (typeof (FileReader) != "undefined"){
				var image_holder = $("#image_holder");
				image_holder.empty();
				
				var reader = new FileReader();
				reader.onload = function (e) {
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
