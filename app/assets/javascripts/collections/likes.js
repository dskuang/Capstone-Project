Tumblr.Collections.Likes = Backbone.Collection.extend({
  url: "/api/likes",
  model: Tumblr.Models.Like
});
