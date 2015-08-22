Tumblr.Collections.NewsFeeds = Backbone.Collection.extend({
  url: "/api/newsfeed",

  model: Tumblr.Models.Post,

  parse: function (payload) {
    this.page = payload.page;
    this.total_pages = payload.total_pages;

    return payload.models;
  }

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
