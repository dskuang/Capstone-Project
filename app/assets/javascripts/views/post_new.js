Tumblr.Views.postNew = Backbone.CompositeView.extend({
  initialize: function() {
    // this.listenTo(this.model, "sync", this.render)
  },



  template: JST["postNew"],

  render: function() {
    // debugger
    var content = this.template({post: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },


});
