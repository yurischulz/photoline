angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';
	
	recursoFoto.query(function(fotos) { //success

		$scope.fotos = fotos;
		console.log(fotos);

	}, function(erro) { //error

		console.log(erro);

	});

	$scope.remover = function (foto) {
		
		recursoFoto.delete({ fotoId : foto._id }, function() { //success
			
			let indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
			
			console.log('Foto ' + foto.titulo + ' foi removida com sucesso');

		}, function(erro) { //error

			$scope.mensagem = 'Foto ' + foto.titulo + ' não pôde ser removida';
			
			console.log(erro);

		});
	};
});