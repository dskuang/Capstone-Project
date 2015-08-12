Tumblr.Models.Post = Backbone.Model.extend({
  urlRoot: "/api/posts",

  parse: function(payload) {
    // debugger
    if(payload.follow_relation_id) {
      this.follow().set({id: payload.follow_relation_id}, {parse: true});
      // delete payload.followState;
    }
    if(payload.like_relation_id) {
      this.like().set({id: payload.like_relation_id, post_id: payload.id}, {parse: true});
    }
    return payload;
  },

  follow: function () {
    if (!this._follow) {
      this._follow = new Tumblr.Models.Follow();
    }
    return this._follow;
  },

  like: function() {
    if(!this._like) {
      this._like = new Tumblr.Models.Like();
    }
    return this._like;
  },

  destroyLike: function() {
    this._like = null;
  },

  destroyFollow: function () {
    this._follow = null;
  }
});
