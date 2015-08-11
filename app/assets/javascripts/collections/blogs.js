Tumblr.Collections.Blogs = Backbone.Collection.extends({
  url: "/api/blogs",
  model: Tumblr.Models.Blog,
  getOrFetch: function(id) {
    var blogModel = this.get(id);
    if(!blogModel) {
      blogModel = new Tumblr.Models.Blog();
      this.add(blogModel);
    }
    blogModel.fetch();
    return blogModel;
  }
});
