// PSJ - V3

// V3 Requirements
// It should store the todos array on an object
// It should have a displayTodos method
// It should have an addTodo method
// It should have a changeTodo method
// It should have a deleteTodo method

var todoList = {
  todos:["item1","item2"],
  displayTodos: function(){
    console.log("My Todos:", this.todos);
  },
  addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newitem){
    this.todos[position]=newitem;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  }
};
