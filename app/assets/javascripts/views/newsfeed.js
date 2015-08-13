Tumblr.Views.newsFeed = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.postCollection = options.postCollection;
    this.feedCollection = options.feedCollection;
    this.listenTo(this.feedCollection, "sync add", this.render);
    this.listenTo(this.feedCollection, 'add', this.addPostView);
    this.feedCollection.each(this.addPostView.bind(this));

  },

  template: JST["newsFeed"],

  events: {
    "click .submit-post": "createPost",
    "click .text-post": "renderNewForm",
    "click .quote-post": "renderNewForm",
    "click .link-post": "renderNewForm",
    "click .cancel-post": "removeNewPostView"
  },

  renderNewForm: function(e) {
    this.removeNewPostView();
    // this.$el.find(":not(.new-post)").addClass("shade");
    // this.$el.find(".div-hider").removeClass("hide");
    var attr = $(e.currentTarget).text()
    // debugger
    this.addNewPostView({attr: attr});
    // this.render();
  },

  removeNewPostView: function() {
    if (this.postModel) {
      this.removeModelSubview(".new-form", this.postModel);
    }
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

  addNewPostView: function(attr) {
    this.postModel = new Tumblr.Models.Post(attr);
    var subPostView = new Tumblr.Views.postNew({model: this.postModel})
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
