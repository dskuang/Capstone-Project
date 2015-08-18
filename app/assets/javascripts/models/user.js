Tumblr.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  parse: function(payload) {
    if(payload.blog) {
      this.blog().set(payload.blog, {parse: true});
      delete payload.blog;
    }
    return payload;
  },

  blog: function () {
    if (!this._blog) {
      this._blog = new Tumblr.Models.Blog();
    }
    return this._blog;
  }


})
