Tumblr.Views.newsFeed = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.blogCollection = options.blogCollection;
    this.postCollection = options.postCollection;
    this.feedCollection = options.feedCollection;
    this.listenTo(this.feedCollection, "sync add", this.render);
    this.listenTo(this.feedCollection, 'add', this.addPostView);
    this.feedCollection.each(this.addPostView.bind(this));
    this.listenTo(this.feedCollection, "remove", this.removePostView);
    this.addTrendingBlogs();

  },

  template: JST["newsFeed"],

  events: {
    "click .submit-post": "createPost",
    "click .button-post": "renderNewForm",
    "click .cancel-post": "removeNewPostView",
    "click .post-item .user-blog-icon": "performSlide",
    "click .blog-shade": "removeSlide"
  },

  performSlide: function(e) {
    e.preventDefault();
    var blog_id = $(e.currentTarget).data("blog-id");
    this.addSideView(blog_id);
    this.$shadediv = $("<div class='blog-shade'></div>");
    this.$el.append(this.$shadediv);
    $('#leftSideBar').toggle("slide", {
      "direction": "left",
      "distance": "575px"
    }, "fast");
    $('#parent-form').toggleClass('left-float');
  },

  removeSlide: function(e) {
    e.preventDefault();
    this.$shadediv.remove();
    this.removeSideView();
    $('#leftSideBar').toggle("slide", {
      "direction": "left",
      "distance": "575px"
    }, "fast");
    $('#parent-form').toggleClass('left-float');

  },

  addSideView: function(id) {
    this.blogModel = this.blogCollection.getOrFetch(id);
    this.subSideView = new Tumblr.Views.blogShow({model: this.blogModel});
    this.addSubview("#leftSideBar", this.subSideView);
  },

  removeSideView: function() {
    this.removeModelSubview("#leftSideBar", this.blogModel);
    this.subSideView = null;
  },

  renderNewForm: function(e) {
    e.preventDefault();
    if(this.subNewView) {
      this.removeNewPostView();
    }
    var attr = $(e.currentTarget).data("attr");
    this.addNewPostView({attr: attr});
  },

  removeNewPostView: function(e) {
     e.preventDefault();
    if (this.postModel) {
      this.removeModelSubview(".new-form-view", this.postModel);
      this.subNewView = null;
    }
  },

  render: function() {
    var content = this.template({posts: this.feedCollection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPostView: function(post) {
    var subPostView = new Tumblr.Views.postShow({model: post, feedCollection: this.feedCollection});
    this.addSubview(".newsfeed-posts", subPostView);
  },

  removePostView: function(post) {
    this.removeModelSubView(".newsfeed-posts", post)
  },

  addNewPostView: function(attr) {
    this.postModel = new Tumblr.Models.Post(attr);
    this.subNewView = new Tumblr.Views.postNew({model: this.postModel});
    this.addSubview(".new-form-view", this.subNewView);
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
    }.bind(this)});
    this.removeNewPostView();
  },


  createTagsAndTaggings: function(postModel, tags) {
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

  },

  addTrendingBlogs: function() {

    this.trendingView = new Tumblr.Views.trendingBlogs({
                        blogCollection: this.blogCollection });
    this.addSubview("#rightSideContent", this.trendingView);
  }


});
