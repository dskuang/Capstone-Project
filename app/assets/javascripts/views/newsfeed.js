Tumblr.Views.newsFeed = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.postCollection = options.postCollection;
    this.feedCollection = options.feedCollection;
    this.listenTo(this.feedCollection, "sync add", this.render);
    this.listenTo(this.feedCollection, 'add', this.addPostView);
    this.feedCollection.each(this.addPostView.bind(this));
    this.addNewPostView();
  },

  template: JST["newsFeed"],

  events: {
    "click .submit-post": "createPost"
  },

  render: function() {
    var content = this.template({posts: this.feedCollection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPostView: function(post) {
    var subPostView = new Tumblr.Views.postShow({model: post})
    this.addSubview(".newsfeed-posts", subPostView)
  },

  addNewPostView: function() {
    var postModel = new Tumblr.Models.Post();
    var subPostView = new Tumblr.Views.postNew({model: postModel})
    this.addSubview(".new-form", subPostView)
  },

  createPost: function(e) {
    // debugger
    e.preventDefault();
    var formData= $('.new-post').serializeJSON();
    var postModel = new Tumblr.Models.Post(formData);
    postModel.save({}, { success: function() {
      this.postCollection.add(postModel);
      this.feedCollection.add(postModel);
      Backbone.history.navigate("#/feed/", {trigger: true})
    }.bind(this)});

  }




});
