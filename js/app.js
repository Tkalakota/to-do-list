angular.module("todoApp", [])
.controller("TodoListController", function($scope) {
  var todoList = this;
  todoList.todoItems = [
   
        { name: "-Drop out of school",
 done: false
 },
		{ name: "-Follow your dreams",
 done: false
 },
		{name:"-Become selfish",
 done: false
},
		{ name: "-Make Billions",
 done: false
 },
       { name: "Live Your life as a pleasant wealthy object", done: false }
  ]

  todoList.addTodo = function() {
    todoList.todoItems.push(
      { name: todoList.todoText }
    )
    todoList.todoText = "";
  };

  todoList.remove = function() {
    var oldTodos = todoList.todoItems;
    todoList.todoItems = [];
    angular.forEach(oldTodos, function(todo) {
      if(!todo.done) todoList.todoItems.push(todo);
    })
    todoList.todoItems
  };

  todoList.remaining = function() {
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
        