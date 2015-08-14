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

  renderFeed: function() {
    Backbone.history.navigate("#/feed/", {trigger: true})
    this.render();
  },

  renderIndex: function() {
    Backbone.history.navigate("#", {trigger: true})
    this.render();
  },

  findBlog: function(e) {
    e.preventDefault();
    var formData = $(".navbar-form").serializeJSON();
    // debugger
    var searchModel = new Tumblr.Models.Search();
    // debugger;
    searchModel.save(formData, {success: function(data) {
      debugger;
    }});
  },

  render: function () {
    var content = this.template({

    });
    this.$el.html(content);
    return this;
  }
});
