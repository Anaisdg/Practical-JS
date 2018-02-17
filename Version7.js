// PSJ - V7

// V7 Requirements

// Clicking “Display todos” should run todoList.displayTodos
// Clicking “Toggle all” should run todoList.toggleAll

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length == 0) {
      console.log("Your list is empty!");
    } else {
      console.log("My Todos:");
      for (item of this.todos) {
        if (item.completed == true) {
          console.log("[X]", item.todoText);
        } else {
          console.log("[ ]", item.todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    var todo = this.todos[position];
    todo.todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },

  toggleAll: function() {
    var completedTodos = 0;
    var total = this.todos.length;
    for (item of this.todos) {
      if (item.completed == true) {
        completedTodos++;
      }
    }

    if (completedTodos == total) {
      for (item of this.todos) {
        item.completed = false;
      }
    } else {
      for (item of this.todos) {
        item.completed = true;
      }
    }
    this.displayTodos();
  }
};


var displayTodosButton = document.getElementById("todoButton")
var togallAllButton = document.getElementById('toggleButton')

displayTodosButton.addEventListenter("click", function(){
  todoList.displayTodos()
});

togallAllButton = document.getElementById("click"), function(){
  todoList.displayTodos()
});
