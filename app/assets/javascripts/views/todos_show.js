window.Todo.Views.TodosShow = Backbone.View.extend({
  template: JST["todos/show"],

  render: function () {
    var renderedContent = this.template({
      todo: this.model,
      comments: _([])
    });

    this.$el.html(renderedContent);

    return this;
  }
});
