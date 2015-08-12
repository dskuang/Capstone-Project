Tumblr.Views.postShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model.follow(), "sync remove", this.render);
  },
  tagName: "li",
  className: "post-item",
  template: JST['postShow'],

  events: {
    "click .follow-button": "toggleFollow"
  },

  render: function(){

    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  toggleFollow: function(e) {
    e.preventDefault();
    var followState = this.model.follow().get("followState")
    this.model.follow().set({followee_id: this.model.get("user_id")});
    if(followState === "unfollowed") {
      this.model.follow().save({}, {
        success: function() {
          this.model.follow().set({followState: "followed"});

          // this.$el.find(".follow-button").html("unFollow");
        }.bind(this)
      });
    } else {
      // debugger
      this.model.follow().destroy({
        success: function () {
          this.model.destroyFollow();
        }.bind(this)
      });
      // var attrs = {followee_id: this.model.user_id, followState: "followed"}
      // this.model.parse(attrs)
    }
    // if (this.followState == "followed") {
    //   this.followState = "unfollowing";
    //   model(P)



    // var attrs = {"followee-id": this.model.user_id}

  }



});
