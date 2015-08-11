Tumblr.Views.blogShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
    // this.listenTo(this.collection, "add", this.render);
  },
  template: JST["blogShow"],

  render: function() {
    this.$el.html(this.template({blog: this.model}));
    return this;
  }


});
