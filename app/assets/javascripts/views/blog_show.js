Tumblr.Views.blogShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.feedCollection = options.feedCollection;
    this.model.posts().fetch({data: {id: this.model.id}, success: function(){
    }.bind(this)});
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.posts(), "sync", this.render);
    this.listenTo(this.model.posts(), 'add', this.addPostView);
    this.model.posts().each(this.addPostView.bind(this));
  },
  className: "blog-show",
  template: JST["blogShow"],

  events: {
      "click .thumbnail-user-blog": "renderUserPage",
      "click .blog-follow": "toggleFollowBlog"
  },

  render: function() {
    this.$el.html(this.template({blog: this.model}));
    // debugger
    this.attachSubviews();
    this.listenForScroll();
    return this;
  },

  renderUserPage: function(e){
    var id = $(e.currentTarget).data("user-id");
    Backbone.history.navigate("#user/" + id, {trigger: true})
  },

  addPostView: function(post) {
    var subPostView = new Tumblr.Views.postShow({feedCollection: this.feedCollection,
                                                model: post});
    this.addSubview(".posts", subPostView);
  },

  listenForScroll: function () {
    $(window).off("scroll"); // remove previous listeners
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var view = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (view.model.posts().page < view.model.posts().total_pages) {
        view.model.posts().fetch({
          data: { id: this.model.id, page: parseInt(view.model.posts().page) + 1 },
          remove: false
        });
      }
    }
  },

  toggleFollowBlog: function(e) {
    e.preventDefault();
    var followID = this.model.get("follow_relation_id");
    this.model.follow().set({followee_id: this.model.get("user_id")});
    if(followID == null) {
      this.model.follow().save({}, {
        success: function() {
          this.model.fetch();
          this.$el.find(".follow-button").text("unFollow");
        }.bind(this)
      });
    } else {
      this.model.follow().destroy({
        success: function () {
          this.model.fetch();
          this.model.destroyFollow();
          this.$el.find(".follow-button").text("Follow");

        }.bind(this)
      });
    }
  }


});
