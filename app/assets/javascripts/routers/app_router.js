window.Todo.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "":"todosIndex",
    "todos/new": "todosNew",
    "todos/:id": "todosShow"
  },

  todosIndex: function () {
    var indexView = new Todo.Views.TodosIndex({
      collection: Todo.Collections.todos
    });

    Todo.Collections.todos.fetch();
    $("body").html(indexView.$el);
  },

  todosNew: function () {
    var newView = new Todo.Views.TodosNew();
    $("body").html(newView.render().$el);
  },

  todosShow: function (id) {
    var todo = Todo.Collections.todos.get(id);
    var showView = new Todo.Views.TodosShow({
      model: todo
    });

    $("body").html(showView.render().$el);
  }
});
