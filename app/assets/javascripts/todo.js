window.Todo = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function () {
    new Todo.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(Todo.initialize);
