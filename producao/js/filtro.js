(function(){

	angular.module('fentec').controller('NavController', function($scope, $window, $http){
		var 
			$ = jQuery,
			ng = $scope,
			aj = $http,
			wi = $window
		;
		
		$scope.getUrlVars = function () {
			var vars = {};
			var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
			});
			return vars;
		}

		$scope.init = function(){

			
			var id = $scope.getUrlVars()["id"];
			if(id !== undefined){
				$scope.getitem(id);
				$scope.updateMode = true;
				$scope.selecttab("buttonarrow1");
			}
			else{
				$scope.read();
				$scope.updateMode = false;
			}
			
			$scope.model={};
		};
		$scope.selecttab=function($tab){
			document.getElementById("buttonarrow1").className="buttonarrow";
			document.getElementById("buttonarrow2").className="buttonarrow";
			document.getElementById("buttonarrow3").className="buttonarrow";
			document.getElementById("buttonarrow4").className="buttonarrow";
			document.getElementById($tab).className+="selecionado";
			
		};

		$scope.create = function(){
			
			$http.post('./service/tbcadastroprojetos', $scope.model).success(function(data){
				//$scope.read();
				$scope.uploadFile();
				
			});	
		};

		$scope.read = function(){
			try
			{
				aj.get('./service/tbcadastroprojetos').success(function(data){
					$scope.arrProjeto = data;
				});
			}
			catch(err)
			{	
				alert(err.message);
			}
		};
		

		
		$scope.getitem = function($id){
			try
			{
				aj.get('./service/tbcadastroprojetos/'+$id).success(function(data){
					$scope.model = data;
				});
			}
			catch(err)
			{	
				alert(err.message);
			}
		};

		$scope.update = function(){
			delete $scope.model.escola;
			jQuery.ajax({
				
				type: 'put',
				url: './service/tbcadastroprojetos',
				data: $scope.model,
			}).success(function(data){
				//$scope.read();
				window.location="perfilorient.html";
			});
		};

		$scope.delete = function($id){
			var r = confirm("Deseja apagar este projeto?");
				if(r == true){
					aj.delete('./service/tbcadastroprojetos/'+$id).success(function(data){
					$scope.read();
					});
				}
			
			
		};

		$scope.change = function($value){
			$scope.updateMode = true;
			$scope.model = $value;
			window.location="cadastroprojeto.html?id="+$value.id;
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
		
	$scope.setcidades = function($estado){
		$scope.attcidades=$estado["cidades"];
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