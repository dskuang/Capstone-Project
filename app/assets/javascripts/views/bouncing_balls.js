Tumblr.Views.BouncingBalls = Backbone.View.extend({
  template: JST["bouncingBalls"],

  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  },


});
