Tumblr.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.blogCollection = new Tumblr.Collections.Blogs();
    this.feedCollection = new Tumblr.Collections.NewsFeeds();
    this.postCollection = new Tumblr.Collections.Posts();
    // this.blogCollection.fetch();
    // debugger
  },

  routes: {
    "": "postIndex",
    "blogs/:id": "blogShow",
    "feed/": "feedIndex",
  },

  blogShow: function(id) {
    var blogModel = this.blogCollection.getOrFetch(id);
    var view = new Tumblr.Views.blogShow({model: blogModel});
    this._swapView(view);
  },

  feedIndex: function() {
    this.feedCollection.fetch();
    var view = new Tumblr.Views.newsFeed({postCollection: this.postCollection, feedCollection: this.feedCollection})
    this._swapView(view);
  },

  postIndex: function() {
    this.postCollection.fetch();
    var view = new Tumblr.Views.postIndex({collection: this.postCollection})
    this._swapView(view);
  },

  _swapView: function(view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(this.currentView.$el);
    this.currentView.render();
  }



});
