Tumblr.Collections.Blogs = Backbone.Collection.extend({
  url: "/api/blogs",

  model: Tumblr.Models.Blog,

  getOrFetch: function(id) {
    var blogModel = this.get(id);
    if(!blogModel) {
      blogModel = new Tumblr.Models.Blog({id: id});
      this.add(blogModel);
    }
    blogModel.fetch();

    return blogModel;
  }
});
