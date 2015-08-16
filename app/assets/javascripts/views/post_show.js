Tumblr.Views.postShow = Backbone.View.extend({
  initialize: function(options) {
    this.feedCollection = options.feedCollection;
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
    "click .like-button": "toggleLike",
    "click .reblog-image": "reblogPost"
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
           this.$el.find(".like-button").text("unLike");

        }.bind(this)
      });
    } else {
      this.model.like().destroy({
        success: function() {
          this.model.destroyLike();
          this.model.fetch();
           this.$el.find(".like_button").text("Like");

        }.bind(this)
      });
    }
  },

  reblogPost: function(e){
    var that = this;
    e.preventDefault();
    var postID = $(e.currentTarget).data("post-id");
    // var getBlogModel = new Tumblr.Models.Post();
    this.model.fetch({id: postID,
      success: function(){

        var attrs = that.model.attributes;
        var reblogModel = new Tumblr.Models.Post(attrs);
        reblogModel.set({user_id: Tumblr.CURRENT_USER.id,
                        blog_id: Tumblr.CURRENT_USER.blog_id,
                        follow_relation_id: null,
                        like_relation_id: null,
                        id: null,
                        og_post_id: attrs.id
                      })
                      debugger
        reblogModel.save({}, {
          success: function() {
            that.feedCollection.add(reblogModel);
          }
        })
        // debugger
      }
    });

  }



});
