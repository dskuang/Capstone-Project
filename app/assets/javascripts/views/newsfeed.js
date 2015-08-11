Tumblr.Views.newsFeed = Backbone.View.extend({
  initialize: function() {
    // this.listenTo(this.model, "sync", this.render);
  },
  template: JST["newsFeed"],

  render: function() {
    this.$el.html(this.template({post: this.model}));
    return this;
  }


});
