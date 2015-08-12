Tumblr.Views.postShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model.follow(), "all", this.render);
  },
  tagName: "li",
  className: "post-item",
  template: JST['postShow'],

  events: {
    "click .follow-button": "toggleFollow"
  },

  render: function(){
    // debugger
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  toggleFollow: function(e) {
    e.preventDefault();
    var followID = this.model.get("follow_relation_id");
    // debugger
    this.model.follow().set({followee_id: this.model.get("user_id")});
    if(followID == null) {
      this.model.follow().save({}, {
        success: function() {
          // debugger
          // this.model.follow().set({followState: "followed"});
          this.model.set({follow_relation_id: 1});
          this.$el.find(".follow-button").text("unFollow");
          // this.render;
        }.bind(this)
      });
    } else {
      this.model.follow().destroy({
        success: function () {
          this.model.destroyFollow();
          this.model.set({follow_relation_id: null})
          this.$el.find(".follow-button").text("Follow");
          // this.render;
          // debugger
          // this.$el
          // this.render();
          // this.model.remove()

        }.bind(this)
      });
    }

  }



});
