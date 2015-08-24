Tumblr.Models.Blog = Backbone.Model.extend({
  urlRoot: "/api/blogs",

  parse: function(payload) {
    if(payload.posts) {
      this.posts().set(payload.posts, {parse: true});
      delete payload.posts;
    }
    if(payload.follow_relation_id) {
      this.follow().set({id: payload.follow_relation_id}, {parse: true});
    } else {
      this._follow = null;
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

  follow: function () {
    if (!this._follow) {
      this._follow = new Tumblr.Models.Follow();
    }
    return this._follow;
  },

  destroyFollow: function () {
    this._follow = null;
  },
});
