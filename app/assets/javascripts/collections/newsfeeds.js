Tumblr.Collections.NewsFeeds = Backbone.Collection.extend({
  url: "/api/newsfeed",

  model: Tumblr.Models.Post,

  parse: function(response) {
     this.page = response.page;
     this.total_pages = response.total_pages;
     return response.models;
   }

});
