Tumblr.Views.NavShow = Backbone.CompositeView.extend({
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
      this.follow_object.followees.forEach(function(followee) {
                          followee.type = "followee" });
      this.follow_object.followers.forEach(function(follower) {
                          follower.type = "follower" });
      this.notif_array = this.likeCollection.toJSON().
              concat(this.follow_object.followees).
              concat(this.follow_object.followers)
              this.notif_array = this.dateSort(this.notif_array);
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
    "click .followees-filler": "renderFollowees",
    "click .create-post": "renderCreatePost",
    "click .modal-text-icon": "renderNewPost",
    "click .modal-quote-icon": "renderNewQuote",
    "click .modal-link-icon": "renderNewLink",
    "click .modal-image-icon": "renderNewImage",
    "click .modal-song-icon": "renderNewSong",
    "click .modal-video-icon": "renderNewVideo",
    "click .shade": "removeBallView"

  },

  removeBallView: function(e) {
    this.removeSubview(".bouncing-balls", this.ballView);
  },

  renderNewPost: function() {
    this.removeBallView();
    Backbone.history.navigate("#/feed/", {trigger: true});
    $(".post-text-image").click();
  },

  renderNewQuote: function() {
    this.removeBallView();
    Backbone.history.navigate("#/feed/", {trigger: true});
    $(".post-quote-image").click();
  },

  renderNewLink: function() {
    this.removeBallView();
    Backbone.history.navigate("#/feed/", {trigger: true});
    $(".post-link-image").click();
  },

  renderNewSong: function() {
    this.removeBallView();
    Backbone.history.navigate("#/feed/", {trigger: true});
    $(".post-song-image").click();
  },

  renderNewVideo: function() {
    this.removeBallView();
    Backbone.history.navigate("#/feed/", {trigger: true});
    $(".post-video-image").click();
  },

  renderNewImage: function() {
    this.removeBallView();
    Backbone.history.navigate("#/feed/", {trigger: true});
    $(".post-picture-image").click();
  },

  renderFollowers: function() {
    Backbone.history.navigate("#followers/", {trigger: true})
  },

  renderCreatePost: function(e) {
    this.ballView = new Tumblr.Views.BouncingBalls();
    this.addSubview(".bouncing-balls", this.ballView);
  },

  dateSort: function(array) {
    if (array.length <= 1) { return array; }
      comparator = function (x, y) {
        if (x === y) {
          return 0;
        } else if (x < y) {
          return -1;
        } else {
          return 1;
        }
      }
    var pivot = array[0];
    var left = [];
    var right = [];

    for (var i = 1; i < array.length; i++) {
      if (comparator(new Date(array[i].created_at),
          new Date(pivot).created_at) === -1) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return this.dateSort(left).
      concat([pivot]).
      concat(this.dateSort(right));
    return new Date(b.date) - new Date(a.date);
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
      var $a = $("<a class='search-list-anchor'></a>");
      $a.text(blogModel.get('title'));
      $a.attr("href", "#blogs/" + blogModel.id);
      var $li = $("<li></li>");
      $li.addClass("search-list-item");
      $li.append($a);
      this.$ul.append($li);
    }
  },

  render: function () {
    var content = this.template({notifications: this.notif_array,
                                likes: this.likeCollection,
                                followObj: this.follow_object});
    this.$el.html(content);
    return this;
  }
});
