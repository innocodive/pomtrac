window.App = {};

// App.MainView is the top-level UI for PomTrac
App.MainView = Backbone.View.extend({
  el: $("#pomtracapp"),

  initialize: function() {
    this.collection = new App.Tasks();
    this.collection.url = "/tasks";
    this.collection.fetch({
      success: _.bind(function(resp, status, xhr) {
        this.render(); 
      }, this)
    });
  }, 

  render: function() {
    this.collection.each(this.renderTask, this);
  },

  renderTask: function(model) {
    var taskView = new App.TaskView({model: model});
    console.dir(taskView.el);
    $("#activityinventory").append(taskView.el);
  }
});
