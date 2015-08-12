Tumblr.Models.Post = Backbone.Model.extend({
  urlRoot: "/api/posts",

  parse: function(payload) {
    // debugger
    if(payload.follow_relation_id) {
      // if(payload.followState == "followed"){
      var attrs = {followState: payload.followState}
      this.follow().set(attrs, {parse: true});
      delete payload.followState;
    }
    return payload;
  },

  follow: function () {
    if (!this._follow) {
      this._follow = new Tumblr.Models.Follow();
    }

    return this._follow;
  },

  destroyFollow: function () {
    this._follow = null;
  }
});
