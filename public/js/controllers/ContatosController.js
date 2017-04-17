angular.module('contatooh').controller('ContatosController', function($scope) {
    $scope.total = 0;
    $scope.incrementa = function() {
        $scope.total++;
    };
    $scope.filtro = '';
    $scope.contatos = [{
            "_id": 1,
            "nome": "Contato 1",
            "email": "cont1@email.com"
        },
        {
            "_id": 2,
            "nome": "Contato 2",
            "email": "cont2@email.com"
        },
        {
            "_id": 3,
            "nome": "Contato 3",
            "email": "cont3@email.com"
        }
    ]
});