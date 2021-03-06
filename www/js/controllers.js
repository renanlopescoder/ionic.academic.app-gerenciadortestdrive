angular.module('app.controllers', [])
  
.controller('AgendamentoController',
function ($scope, $stateParams, GerenciadorService) {
  $scope.agendamentos = [];
  GerenciadorService.obterAgendamentos().then(function(dados){
    $scope.agendamentos = dados;
  })
})
   
.controller('FornecedorController',
function ($scope, $stateParams, GerenciadorService) {
  $scope.fornecedores = [];

  GerenciadorService.obterFornecedores().then(function(dados){
    $scope.fornecedores = dados;
  })

})
    