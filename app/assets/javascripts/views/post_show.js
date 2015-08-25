Tumblr.Views.postShow = Backbone.View.extend({
  initialize: function(options) {
    this.feedCollection = options.feedCollection;
    this.listenTo(this.model.follow(), "sync", this.render);
    this.listenTo(this.model.like(), "sync remove", this.render);
    this.listenTo(this.note, "sync destroy", this.render);
    this.listenTo(this.model.tags(), "sync add", this.render);

    this.listenTo(this.model, "sync add remove", this.render);
    this.listenTo(this.model.collection, "sync add remove", this.render);

    $("#content").on("click", this.removeNotes.bind(this));
  },


  className: "post-item",
  template: JST['postShow'],

  events: {
    "click .follow-button": "toggleFollow",
    "click .like-button": "toggleLike",
    "click .reblog-image": "reblogPost",
    "click .tag-post-index": "renderTagPostIndex",
    "click .delete-button": "deletePost",
    // "click .note-text": "fetchNotes",

  },

  deletePost: function(e) {
    e.preventDefault();
    this.model.destroy();
  },

  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  renderTagPostIndex: function(e) {
    e.preventDefault();
    var tag = $(e.currentTarget).data("tag");
    Backbone.history.navigate("#tags/" + tag, {trigger: true});

  },

  fetchNotes: function(e) {
    var offset = $(this.$el).offset();
    var left = e.pageX;
    var top = e.pageY;
    this.model.notes().fetch({data: {"post_id": this.model.id}, processData: true,
    success: function() {
          this.renderNotes(left, top);
    }.bind(this)});

  },

  renderNotes: function(left, top) {
    // $ul = $("*[data-id='"+ this.model.id +"']")
    var $ul = $(".notes-ul");
      top = top + 5
      debugger
      $ul.css({'left': left +'px' });
      $ul.css({'top': top +'px' });
      this.model.notes().each(function(note) {

        $li = $("<li></li>");
        $li.addClass("notes-li");
        $li.text(note.get("note_text"));
        $ul.append($li)
      });

  },

  removeNotes: function() {
    var $ul = $(".notes-ul");
    $ul.empty();
    this.model.notes().reset(null)
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
          this.model.collection.fetch();
          this.model.destroyFollow();
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
      var likeId = this.model.like().id
      this.model.like().destroy({
        success: function() {
          this.destroyNote(likeId);
          this.model.destroyLike();
        }.bind(this)
      });
    }
  },

  createNewNote: function() {
    this.newNote = new Tumblr.Models.Note();
    var noteText = Tumblr.CURRENT_USER.username + " liked this";
    var attrs = {post_id: this.model.id, note_text: noteText, like_id: this.model.like().id};
    this.model.set('notes', this.model.escape('notes') + 1);
    this.newNote.save(attrs, {success: function() {
      this.model.notes().add(this.newNote);
    }.bind(this)});
  },

  destroyNote: function(id) {
    this.model.notes().fetch({success: function() {
    this.note = this.model.notes().fetchByLike(id).at(0);
    this.note.destroy();
    this.model.destroyNote();
    this.model.fetch();

    }.bind(this)});

  },

  reblogPost: function(e){
    var that = this;
    e.preventDefault();
    var postID = $(e.currentTarget).data("post-id");
    this.model.fetch({id: postID,
      success: function(){
        var og_post_id;

        var attrs = that.model.attributes;
        if(attrs.og_post_id) {
          og_post_id = attrs.og_post_id;
        } else {
          og_post_id = attrs.id;
        }

        var reblogModel = that.model.clone();
        reblogModel.set({user_id: Tumblr.CURRENT_USER.id,
                        blog_id: Tumblr.CURRENT_USER.blog_id,
                        follow_relation_id: null,
                        like_relation_id: null,
                        id: null,
                        og_post_id: og_post_id
                      });
        reblogModel.save({}, {
            success: function() {
              that.model.tags().each(function(tag) {
                var label = {label: tag.attributes.label};
                var newTag = new Tumblr.Models.Tag(label);
                newTag.save({}, {
                  success: function() {
                    reblogModel.tags().add(newTag);
                    var newTaggingModel = new Tumblr.Models.Tagging();
                    newTaggingModel.save({post_id: reblogModel.id, tag_id: newTag.id});
                  }
                });
              });
            that.feedCollection.add(reblogModel);
        }});
      }});
        Backbone.history.navigate("#feed/", {trigger: true});
    },




});
