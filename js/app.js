angular.module("todoApp", [])      //Start of  funtion
.controller("TodoListController", function($scope) {
  var todoList = this;
  todoList.todoItems = [
   
        { name: "-Drop out of school", //given examples
 done: false
 },
    { name: "-Follow your dreams",  //given examples
 done: false
 },
    {name:"-Become selfish",  //given examples
 done: false
},
    { name: "-Make Billions",  //given examples
 done: false
 },
       { name: "Live Your life as a pleasant wealthy object", done: false } //given examples
  ]

  todoList.addTodo = function() { // adds list items
    todoList.todoItems.push(
      { name: todoList.todoText }
    )
    todoList.todoText = "";
  };

  todoList.remove = function() {  // removes list items
    var oldTodos = todoList.todoItems;
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  };

  todoList.remaining = function() { // leftover on the list
    var notCompletedCount = 0;
    angular.forEach(todoList.todoItems, function(todo) {
      notCompletedCount += todo.done ? 0 : 1;
    })

    return notCompletedCount
  }


}); // end TodoListController


    $(document).ready(function(){
      $('.carousel').carousel();
    });
        
