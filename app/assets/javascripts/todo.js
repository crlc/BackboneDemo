window.Todo = {
  Models: {},
  Collections: {},
  Views: {},

  initialize: function () {
    Todo.Collections.todos.fetch();

    var view = new Todo.Views.TodosIndex({
      collection: Todo.Collections.todos
    });
    $("body").append(view.$el);
  }
};

$(Todo.initialize);
