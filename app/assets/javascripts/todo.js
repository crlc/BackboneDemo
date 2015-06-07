window.Todo = {
  Models: {},
  Collections: {},
  Views: {},

  initialize: function () {
    Todo.Collections.todos.fetch();

    var indexView = new Todo.Views.TodosIndex({
      collection: Todo.Collections.todos
    });
    $("body").append(indexView.$el);

    var newView = new Todo.Views.TodosNew();
    $("body").append(newView.render().$el);
  }
};

$(Todo.initialize);
