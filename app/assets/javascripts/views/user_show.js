Tumblr.Views.userShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },
  template: JST["userShow"],
  render: function(){
    // debugger
    var content = this.template({user: this.model});
    this.$el.html(content);
    return this;
  },
});
