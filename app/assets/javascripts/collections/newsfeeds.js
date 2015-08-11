Tumblr.Collections.NewsFeeds = Backbone.Collection.extend({
  url: "/api/newsfeed",

  model: Tumblr.Models.Post

  // getOrFetch: function(id) {
  //   var postModel = this.get(id);
  //   if(!Model) {
  //     blogModel = new Tumblr.Models.Blog({id: id});
  //     this.add(blogModel);
  //   }
  //   blogModel.fetch();
  //
  //   return blogModel;
  // }
});
