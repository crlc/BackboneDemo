window.Todo.Views.TodosIndex = Backbone.View.extend({
  initialize: function (options) {
    this.todos = options.todos;
  },

  render: function () {
    // building HTML in JS code
    var $ul = $("<ul>");

    this.todos.each(function (todo) {
      var $li = $("<li>");

      // using `get` to injext content in a view
      $li.text(todo.get("title"));

      $ul.append($li);
    });

    this.$el.html($ul);

    return this;
  }
});
