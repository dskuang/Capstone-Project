Tumblr.Models.Post = Backbone.Model.extend({
  urlRoot: "/api/posts",

  parse: function(payload) {
    if(payload.follow_relation_id) {
      this.follow().set({id: payload.follow_relation_id}, {parse: true});
    }
    if(payload.like_relation_id) {
      this.like().set({id: payload.like_relation_id, post_id: payload.id}, {parse: true});
    }
    if(payload.tags) {
      this.tags().set(payload.tags, {parse: true});
      delete payload.tags;
    }

    if(payload.notes) {
      this.notes().set(payload.notes, {parse: true});
      delete payload.notes;
    }
    return payload;
  },

  notes: function() {
    if(!this._notes) {
      this._notes = new Tumblr.Collections.Notes([], {post: this});
    }
    return this._notes;
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

  tags: function() {
    if(!this._tags) {
      this._tags = new Tumblr.Collections.Tags([], {post: this});
    }
    return this._tags;
  },

  destroyLike: function() {
    this._like = null;
  },

  destroyFollow: function () {
    this._follow = null;
  }
});
