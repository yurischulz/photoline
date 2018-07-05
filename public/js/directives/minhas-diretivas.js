angular.module('minhasDiretivas', [])
	.directive('meuPainel', function() {

		var ddo = {};

		ddo.restrict = "AE";
        ddo.transclude = true;


		ddo.scope = {
            id: '@',
            titulo: '@',
            descricao: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive" src="{{url}}" alt="{{titulo}}">';           
        
        return ddo;

    })
    .directive('meuBotaoPerigo', function() {

        var ddo = {};
        ddo.restrict = "E"; //elemento

        ddo.scope = {
            nome: '@', //copia de valor, e este valor é sempre string
            acao: '&'  //tenta avaliar uma expressão dentro do contexto do controller
        };

        ddo.template = '<button type="button" class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--icon mdl-js-ripple-effect" ng-click="acao(foto)"><i class="material-icons">close</i></button>';

        return ddo;

    })
    .directive('meuFocus', function() {

        var ddo = {};
        ddo.restrict = "A"; //atributo

        // ddo.scope = {
        //     focado: '=' //permite que qualquer alteração que a diretiva faça, ou o controller, ambos ficam sabendo
        // };

        ddo.link = function(scope, element) {
            // scope.$watch('focado', function() {
            //     if (scope.focado) {
            //         element[0].focus();
            //         scope.focado = false;
            //     };
            // });
            scope.$on('fotoCadastrada', function() {
                element[0].focus();
            });
        };

        return ddo;

    });