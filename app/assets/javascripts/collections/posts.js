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

  parse: function (payload) {
    this.page = payload.page;
    this.total_pages = payload.total_pages;
    
    return payload.models;
  }
});
