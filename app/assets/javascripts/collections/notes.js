Tumblr.Collections.Notes = Backbone.Collection.extend({

  initialize: function(options) {
    this.post = options.post;
  },
  url: "/api/notes",
  model: Tumblr.Models.Note,

  fetchByLike: function(like_id) {
    var filtered = this.filter(function(note) {
      return note.get("like_id") === like_id;
    });
    return new Tumblr.Collections.Notes(filtered);
  }


});
