Tumblr.Views.followShowing = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, "sync reset", this.render);
  },

  events: {
    "click .profile-pic": "renderUserPage",
    "click .follow-blog": "renderBlogPage"
  },
  template: JST["followShowing"],

  renderBlogPage: function(e) {
    var id = $(e.currentTarget).data("blog-id");
    Backbone.history.navigate("#blogs/" + id, {trigger: true})
  },

  render: function(){
    var content = this.template({ follows: this.collection });
    this.$el.html(content);

    return this;
  },
  renderUserPage: function(e){
    var id = $(e.currentTarget).data("user-id");
    Backbone.history.navigate("#user/" + id, {trigger: true})
  }



});
