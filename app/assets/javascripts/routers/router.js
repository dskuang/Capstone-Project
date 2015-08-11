Tumblr.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.blogCollection = new Tumblr.Collections.Blogs();
    // this.blogCollection.fetch();
    // debugger
  },

  routes: {
    "blogs/:id": "blogShow"
  },

  blogShow: function(id) {
    var blogModel = this.blogCollection.getOrFetch(id);
    // debugger
    var view = new Tumblr.Views.blogShow({model: blogModel, collection: this.blogCollection});
    this._swapView(view);
  },

  _swapView: function(view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(this.currentView.$el);
    this.currentView.render();
  }


});
