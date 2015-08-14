Tumblr.Views.newsFeed = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.postCollection = options.postCollection;
    this.feedCollection = options.feedCollection;
    this.listenTo(this.feedCollection, "sync add", this.render);
    this.listenTo(this.feedCollection, 'add', this.addPostView);
    this.feedCollection.each(this.addPostView.bind(this));

    // this.listenTo(this.postModel, "sync", this.render);
    // this.listenTo(this.postModel.tags(), "sync add", this.render);

  },

  template: JST["newsFeed"],

  events: {
    "click .submit-post": "createPost",
    "click .text-post": "renderNewForm",
    "click .quote-post": "renderNewForm",
    "click .link-post": "renderNewForm",
    "click .picture-post": "renderNewForm",
    "click .cancel-post": "removeNewPostView"
  },

  renderNewForm: function(e) {
    this.removeNewPostView();
    // this.$el.find(":not(.new-post)").addClass("shade");
    // this.$el.find(".div-hider").removeClass("hide");
    var attr = $(e.currentTarget).data("attr");
    // debugger
    this.addNewPostView({attr: attr});
    // this.render();
  },

  removeNewPostView: function() {
    if (this.postModel) {
      this.removeModelSubview(".new-form-view", this.postModel);
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
    this.addSubview(".new-form-view", subPostView)
  },

  createPost: function(e) {
    e.preventDefault();
    var formData= $('.new-post').serializeJSON();
    var regex = /(#[A-Za-z][A-Z]+)/ig
    var tags = this.findHashtags(formData.post.tag)
    postModel = new Tumblr.Models.Post(formData);
    postModel.save({}, { success: function() {
      if(tags) {
        this.createTagsAndTaggings(postModel, tags);
      }
      this.postCollection.add(postModel);
      this.feedCollection.add(postModel);
      Backbone.history.navigate("#/feed/", {trigger: true})
    }.bind(this)});

  },

  createTagsAndTaggings: function(postModel, tags) {
    // this.listenTo(postModel.tags(), "sync add", this.render)
    tags.forEach(function(tag) {
      var tagModel = new Tumblr.Models.Tag({label: tag});
      tagModel.save({}, {
        success: function() {
          postModel.tags().add(tagModel);
          var taggingModel = new Tumblr.Models.Tagging();
          taggingModel.set({tag_id: tagModel.id, post_id: postModel.id});
          taggingModel.save();
        }
      });
    })
  },

  findHashtags: function(searchText) {
    var regexp = /#([a-z0-9]+)\b(?!;)/igm
    searchText = searchText.split(" ").join("").split(",").join("");
    var result = searchText.match(regexp);
    if (result) {
        result = result.map(function(s){ return s.trim();});
    }
    return result;

  }


});
