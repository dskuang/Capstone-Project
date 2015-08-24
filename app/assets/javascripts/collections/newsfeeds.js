Tumblr.Collections.NewsFeeds = Backbone.Collection.extend({
  url: "/api/newsfeed",

  model: Tumblr.Models.Post,

  parse: function(response) {
     this.page = response.page;
     this.total_pages = response.total_pages;
     return response.models;
   },

   getOrFetch: function(id) {
     var postModel = this.get(id);
     if(!postModel) {
       postModel = new Tumblr.Models.Post({id: id});
       this.add(postModel);
     }
     postModel.fetch();
     return postModel;
   },

   comparator: function(item) {
     return -(new Date(item.get("created_at")));
   }

});
