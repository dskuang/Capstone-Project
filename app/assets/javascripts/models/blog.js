Tumblr.Models.Blog = Backbone.Model.extend({
  urlRoot: "/api/blogs",

  parse: function(payload) {

  if(payload.posts) {
    this.posts().set(payload.posts, {parse: true});
    delete payload.posts;
  }
  this.page = payload.page;
  this.total_pages = payload.total_pages;
    return payload;
  },

  posts: function () {
    if (!this._posts) {
      this._posts = new Tumblr.Collections.Posts([], { blog: this });
    }

    return this._posts;
  },
});
