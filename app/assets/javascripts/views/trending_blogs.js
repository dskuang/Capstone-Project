Tumblr.Views.trendingBlogs = Backbone.View.extend({
  initialize: function(options) {
    this.blogCollection = options.blogCollection;
    this.listenTo(this.blogCollection, "sync", this.render);
    this.blogCollection.fetch({data: {trending: true}, processData:true,
      success: function () {
      }.bind(this)
    });
  },

  template: JST["trending"],

  render: function() {

    var content = this.template({blogs: this.blogCollection});
    this.$el.html(content);
    return this;
  }

});
