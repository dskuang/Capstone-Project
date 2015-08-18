Tumblr.Views.trendingBlogs = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.postCollection = options.postCollection;
    this.blogCollection = options.blogCollection;
    this.listenTo(this.blogCollection, "sync", this.render);
    this.listenTo(this.postCollection, "sync", this.addPostView);
    this.blogCollection.fetch({data: {trending: true}, processData:true,
      success: function () {
      }.bind(this)
    });
    this.postCollection.fetch({data: {trending: true}, processData:true,
      success: function () {
        // debugger
      }.bind(this)
    });
    // this.addPostView();
  },

  template: JST["trending"],

  render: function() {

    var content = this.template({blogs: this.blogCollection,
                                 posts: this.postCollection});

    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  addPostView: function() {
    var post = this.postCollection.at(this.getRandomInt(0, 4));
    // debugger
    var subPostView = new Tumblr.Views.postShow({model: post});
    this.addSubview(".rightSubPost", subPostView);
  },

});
