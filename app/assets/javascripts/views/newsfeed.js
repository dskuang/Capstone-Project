Tumblr.Views.newsFeed = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, 'add', this.addPostView);
    this.collection.each(this.addPostView.bind(this));
  },

  template: JST["newsFeed"],

  render: function() {
    var content = this.template({posts: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPostView: function(post) {
    var subPostView = new Tumblr.Views.postShow({model: post})
    this.addSubview(".newsfeed-posts", subPostView)
  },


});
