var app = angular.module("CRUDApp", []);
app.controller("ToDoListController", function ($scope, $http) {
  var vm = this;

  // Initialize an empty to do list array
  $scope.toDoList = [];

  // functions for api calls
  vm.removeToDoItem = removeToDoItem;
  vm.getToDoList = getToDoList;
  vm.addToDoItem = addToDoItem;

  removeToDoItem(1);

  //https://jsonplaceholder.typicode.com/
  // // GET request to fetch to do list from the API
  function getToDoList() {
    $http
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        console.log(response.data);
        //$scope.tasks = response.data;
      });
  }

  function addToDoItem(item) {
    $http
      .post("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        console.log(response.data);
        //$scope.tasks = response.data;
      });
  }

  function removeToDoItem(id) {
    $http
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(function (response) {
        console.log(response.status);
      });

  }




  // // Function to create a new to do list item
  // $scope.createTask = function(newTask) {
  //     $http.post('/api/tasks', newTask)
  //         .then(function(response) {
  //             // Add the new task to the tasks array
  //             $scope.tasks.push(response.data);
  //         });
  // };

  // // Function to delete a task
  // $scope.deleteTask = function(taskId) {
  //     $http.delete('/api/tasks/' + taskId)
  //         .then(function(response) {
  //             // Remove the task from the tasks array
  //             $scope.tasks = $scope.tasks.filter(function(task) {
  //                 return task.id !== taskId;
  //             });
  //         });
  // };
});
