angular.module('ToDo',[]).controller('todoController',['$scope',function($scope){
  $scope.todos = [
    {'title':'First todo','done':false},
    {'title':'Second todo','done':false},
    {'title':'Third todo','done':false},
    {'title':'Fourth todo','done':false},
    {'title':'Fifth todo','done':false},
    {'title':'Sixth todo','done':false},
    {'title':'Seventh todo','done':false},
    {'title':'Eighth todo','done':false},
    {'title':'Nineth todo','done':false},
    {'title':'Tenth todo','done':false}
  ];
  $scope.dones = [
    {'title':'Test Dones','done':false}
  ]
  $scope.sortType = 'title';
  $scope.sortReverse  = false;
  $scope.addTodo = function(){
    $scope.todos.push({'title':$scope.newTodo,'done':false})
    $scope.newTodo = '';
  }
  $scope.clearCompleted = function(){
    $scope.dones = $scope.dones.filter(function(item){
      return !item.done
    })
  }
  $scope.clearTodo = function(){
    $scope.dones.splice(this.$index, 1); 
  }
  $scope.goDone = function(){
    $scope.dones.push({'title':$scope.todos[this.$index].title,'done':false});
    $scope.todos.splice(this.$index, 1);
  }
  $scope.goBack = function(){
    $scope.todos.push({'title':$scope.dones[this.$index].title,'done':false});
    $scope.dones.splice(this.$index, 1);
  }
}])