Tumblr.Collections.Tags = Backbone.Collection.extend({
  initialize: function(options) {
    this.post = options.post;
  },
  url: "/api/tags",
  model: Tumblr.Models.Tag,

});
