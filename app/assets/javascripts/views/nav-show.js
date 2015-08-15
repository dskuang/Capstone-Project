Tumblr.Views.NavShow = Backbone.View.extend({
  template: JST["nav"],

  initialize: function (options) {
    this.router = options.router;
    this.listenTo(this.router, "route", this.handleRoute);
  },

  events: {
    "click .home-icon": "renderFeed",
    "click .explore-icon": "renderIndex",
    "click .blog-search": "findBlog"
  },

  handleRoute: function (routeName, params) {
    this.$el.find(".active").removeClass("active");
    this.$el.find("." + routeName).addClass("active");
  },

  renderFeed: function(e) {
    e.preventDefault();
    this.router.feedIndex();
    // Backbone.history.navigate("#/feed/", {trigger: true})
  },

  renderIndex: function(e) {
    e.preventDefault();
    this.router.postIndex();
    // Backbone.history.navigate("#", {trigger: true})
  },

  findBlog: function(e) {
    e.preventDefault();
    var formData = $(".navbar-form").serializeJSON();
    // debugger
    var searchCollection = new Tumblr.Collections.Blogs();
    // debugger;
    searchCollection.fetch({data: {query: [1,2,3,4]}, processData:true,
      success: function () {
        console.log(searchCollection);

      }
    });
  },

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    return this;
  }
});
