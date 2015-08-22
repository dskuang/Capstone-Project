Tumblr.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",

  model: Tumblr.Models.Post,

  getOrFetch: function(id) {
    var postModel = this.get(id);
    if(!postModel) {
      postModel = new Tumblr.Models.Post({id: id});
      this.add(postModel);
    }
    postModel.fetch();

    return postModel;
  },

  parse: function(response) {
     this.page = response.page;
     this.total_pages = response.total_pages;
     return response.models;
   }
});
