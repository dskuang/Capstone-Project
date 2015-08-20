Tumblr.Views.NavShow = Backbone.View.extend({
  template: JST["nav"],

  initialize: function (options) {
    this.router = options.router;
    this.listenTo(this.router, "route", this.handleRoute);
    this.$input = this.$el.find("input[name=query]");

    this.likeCollection = new Tumblr.Collections.Likes();
    this.followCollection = new Tumblr.Collections.Follows();
    this.likeCollection.fetch({data: {user: true}, processData:true });
    this.followCollection.fetch({data: {user: true}, processData:true,
      success: function() {
      this.follow_object = arguments[1];
    }.bind(this)});
    this.listenTo(this.likeCollection, "sync", this.render);
    this.listenTo(this.followCollection,"sync", this.render);
  },

  events: {
    "click .home-icon": "renderFeed",
    "click .explore-icon": "renderIndex",
    "input input[name=query]": "findBlog",
    "blur .search-input": "resetSearch",
    "click .followers-filler": "renderFollowers",
    "click .followees-filler": "renderFollowees"
  },

  renderFollowers: function() {

    Backbone.history.navigate("#followers/", {trigger: true})

  },

  renderFollowees: function() {
    Backbone.history.navigate("#followees/", {trigger: true});

  },

  _resetSearch: function() {
    $(".search-input").val("");
    this.renderResults([]);
  },

  handleRoute: function (routeName, params) {
    this.$el.find(".active").removeClass("active");
    this.$el.find("." + routeName).addClass("active");
  },

  renderFeed: function(e) {
    e.preventDefault();
    Backbone.history.navigate("#/feed/")
    this.router.feedIndex();
  },

  renderIndex: function(e) {
    e.preventDefault();
    Backbone.history.navigate("#")
    this.router.postIndex();
  },

  resetSearch: function() {
    setTimeout(this._resetSearch.bind(this),200);
  },

  findBlog: function(e) {
    e.preventDefault();
    if ($(".search-input").val() === "") {
        this.renderResults([]);
        return;
    }
    var formData = $(".navbar-form").serializeJSON();
    var searchCollection = new Tumblr.Collections.Blogs();
    searchCollection.fetch({data: formData, processData: true,
      success: function () {
        this.renderResults(searchCollection);
      }.bind(this)
    });
  },

  renderResults: function(searchCollection) {
    this.$ul = this.$el.find(".search-ac");
    this.$ul.empty();
    for(var i = 0; i < searchCollection.length; i++) {
      var blogModel = searchCollection.at(i);
      var $a = $("<a></a>");
      $a.text(blogModel.get('title'));
      $a.attr("href", "#blogs/" + blogModel.id);
      var $li = $("<li></li>");
      $li.addClass("search-list-item");
      $li.append($a);
      this.$ul.append($li);
    }
  },

  render: function () {

    var content = this.template({likes: this.likeCollection,
                                followObj: this.follow_object});
    this.$el.html(content);
    return this;
  }
});
