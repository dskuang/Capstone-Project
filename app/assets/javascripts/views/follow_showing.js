Tumblr.Views.followShowing = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, "sync reset", this.render);

  },
  template: JST["followShowing"],

  render: function(){
    var content = this.template({ follows: this.collection });
    this.$el.html(content);

    return this;
  },



});
