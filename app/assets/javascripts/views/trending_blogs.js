Tumblr.Views.trendingBlogs = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.feedCollection = options.feedCollection;
    this.postCollection = new Tumblr.Collections.TrendingPosts();
    this.blogCollection = options.blogCollection;
    this.listenTo(this.blogCollection, "sync", this.render);

    this.blogCollection.fetch({data: {trending: true}, processData:true,
      success: function () {
      }.bind(this)
    });
    this.postCollection.fetch({data: {trending: true}, processData:true,
      success: function () {
        this.addPostView();
      }.bind(this)
    });

  },
  template: JST["trending"],

  events: {
    "click .user-thumbnail-pic": "renderUserPage"
  },

  renderUserPage: function(e){
    var id = $(e.currentTarget).data("user-id");
    Backbone.history.navigate("#user/" + id, {trigger: true})
  },

  checkIfIncluded:function(value) {
    for(var i = 0; i < this.numbers.length; i++) {
      if (this.numbers[i] == value) {
        return true;
      }
    }
    return false;
  },

  render: function() {

    this.numbers = [];

    while(this.numbers.length < 3) {
      var value = this.getRandomInt(0,7);
      if (!this.checkIfIncluded(value)){
        this.blogCollection.remove(this.blogCollection.at(value));
        this.numbers.push(value);
      }
    }
    
    var content = this.template({blogs: this.blogCollection,
                                 posts: this.postCollection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  invokeResizeFont: function() {
      $(".rightSubPost .post-item").textfill(10);
  },

  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  addPostView: function() {
    if (this.currentPost) {
      this.removeModelSubview(".rightSubPost", this.currentPost);
    }
    this.currentPost = this.postCollection.at(this.getRandomInt(0, 4));

    var subPostView = new Tumblr.Views.postShow({model: this.currentPost,
                                          feedCollection: this.feedCollection});
    this.addSubview(".rightSubPost", subPostView);
  },

  removePostView: function(post) {
      this.removeModelSubView(".rightSubPost", post)
  },

});
