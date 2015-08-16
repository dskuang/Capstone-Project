Tumblr.Views.NavShow = Backbone.View.extend({
  template: JST["nav"],

  initialize: function (options) {
    this.router = options.router;
    this.listenTo(this.router, "route", this.handleRoute);
    this.$input = this.$el.find("input[name=query]");
  },

  events: {
    "click .home-icon": "renderFeed",
    "click .explore-icon": "renderIndex",
    "click .blog-search": "findBlog",
    "input input[name=query]": "findBlog"
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

  findBlog: function(e) {
    e.preventDefault();
    if ($(".search-input").val() === "") {
        this.renderResults([]);
        return;
    }
    var formData = $(".navbar-form").serializeJSON();
    // debugger
    var searchCollection = new Tumblr.Collections.Blogs();
    // debugger;
    searchCollection.fetch({data: formData, processData:true,
      success: function () {
        this.renderResults(searchCollection)
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
      // debugger
      $a.attr("href", "#blogs/" + blogModel.id);
      var $li = $("<li></li>");
      $li.addClass("search-list-item")
      $li.append($a);
      // $li.append($followToggle);
      this.$ul.append($li);
    }
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    return this;
  }
});
