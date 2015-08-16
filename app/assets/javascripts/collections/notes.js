Tumblr.Collections.Notes = Backbone.Collection.extend({

  initialize: function(options) {
    this.post = options.post;
  },
  url: "/api/notes",
  model: Tumblr.Models.Note,

});
