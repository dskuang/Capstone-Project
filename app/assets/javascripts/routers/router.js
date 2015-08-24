Tumblr.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.blogCollection = new Tumblr.Collections.Blogs();
    this.feedCollection = new Tumblr.Collections.NewsFeeds();
    this.postCollection = new Tumblr.Collections.Posts();
    this.userCollection = new Tumblr.Collections.Users();
  },

  routes: {
    "": "postIndex",
    "feed/": "feedIndex",
    "blogs/:id": "blogShow",
    "user/:id": "userShow",
    "tags/:tag_name": "postsForTag",
    "followers/": "followerIndex",
    "followees/": "followeeIndex"
  },

  blogShow: function(id) {
    var blogModel = this.blogCollection.getOrFetch(id);
    var view = new Tumblr.Views.blogShow({feedCollection: this.feedCollection, model: blogModel});
    this._swapView(view);
  },

  feedIndex: function() {
    this.feedCollection.fetch();
    var view = new Tumblr.Views.newsFeed({blogCollection: this.blogCollection,
     postCollection: this.postCollection, feedCollection: this.feedCollection});
    this._swapView(view);
  },

  postIndex: function() {
    this.postCollection.fetch();
    var view = new Tumblr.Views.postIndex({blogCollection: this.blogCollection,
      collection: this.postCollection, feedCollection: this.feedCollection});
    this._swapView(view);
  },

  postsForTag: function(tag) {
    var postCollection = new Tumblr.Collections.TagPosts();
    postCollection.fetch({data: {tag: tag}, processData: true });
    var view = new Tumblr.Views.trendingTagPosts({blogCollection: this.blogCollection,
      collection: postCollection, feedCollection: this.feedCollection, tag: tag});
    this._swapView(view);
  },

  userShow: function(id) {
    this.userModel = this.userCollection.getOrFetch(id);
    var view = new Tumblr.Views.userShow({model: this.userModel});
    this._swapView(view);
  },

  followerIndex: function() {
    var followers = new Tumblr.Collections.Users();
    followers.fetch({data: {followers: true}, processData: true });
    var view = new Tumblr.Views.followShow({follows: followers, attr: "followers"});
    this._swapView(view);

  },

  followeeIndex: function() {
    var followees = new Tumblr.Collections.Users();
    followees.fetch({data: {followees: true}, processData: true });
    var view = new Tumblr.Views.followShow({follows: followees, attr: "followees"});
    this._swapView(view);

  },

  _swapView: function(view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(this.currentView.$el);
    this.currentView.render();
  }



});
