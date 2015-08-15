Tumblr.Views.postShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model.follow(), "sync", this.render);
    this.listenTo(this.model.like(), "sync remove", this.render);
    this.listenTo(this.model, "sync add remove", this.render);
    this.listenTo(this.model.collection, "sync add remove", this.render);
    this.listenTo(this.model.tags(), "sync add", this.render);
  },


  className: "post-item",
  template: JST['postShow'],

  events: {
    "click .follow-button": "toggleFollow",
    "click .like-button": "toggleLike"
  },

  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  toggleFollow: function(e) {
    e.preventDefault();
    var followID = this.model.get("follow_relation_id");
    this.model.follow().set({followee_id: this.model.get("user_id")});
    if(followID == null) {
      this.model.follow().save({}, {
        success: function() {
          this.model.collection.fetch();
          this.$el.find(".follow-button").text("unFollow");
        }.bind(this)
      });
    } else {
      this.model.follow().destroy({
        success: function () {
          this.model.destroyFollow();
          this.model.collection.fetch();
          this.$el.find(".follow-button").text("Follow");

        }.bind(this)
      });
    }
  },

  toggleLike: function(e) {
    e.preventDefault();
    var likeID = this.model.get("like_relation_id");
      this.model.like().set({post_id: this.model.get("id")})
    if(likeID == null) {
      this.model.like().save({}, {
        success: function() {
          this.model.fetch();

        }.bind(this)
      });
    } else {
      this.model.like().destroy({
        success: function() {
          this.model.destroyLike();
          this.model.fetch();
        
        }.bind(this)
      });
    }
  }



});
