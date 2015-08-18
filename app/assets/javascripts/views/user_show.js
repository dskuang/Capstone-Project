Tumblr.Views.userShow = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  className: "user-show-page",

  events: {
    "dblclick .user-name": "editUsername",
    "dblclick .user-blog": "editBlogTitle",
    "dblclick .user-img": "pickFile"
  },

  template: JST["userShow"],

  render: function(){
    var content = this.template({user: this.model});
    this.$el.html(content);
    return this;
  },

  pickFile: function (e) {
    e.preventDefault();

    filepicker.pick({mimetype: 'image/*', service: "computer"},
      function(Blob) {
          // $('.profile-pic').attr("src", Blob.url);
          this.model.save({profileUrl: Blob.url});
      }.bind(this)
    );
  },

  editUsername: function() {
    var $textarea = $("<input type = 'text' value = '"+ this.model.escape('username') + "'>");
    var $h2 = $(".user-name");
    $h2.replaceWith($textarea);
    $textarea.on("blur", function(){
      var username = $textarea.val();
      this.model.save({username: username});
      $h2.text(username);
      $textarea.replaceWith($h2);
    }.bind(this));
  },

  editBlogTitle: function() {
    var that = this;
    var $textarea = $("<input type = 'text' value = '"+ this.model.blog().escape('title') + "'>");
    var $p = $(".user-blog");
    $p.replaceWith($textarea);
    $textarea.on("blur", function(){
      var title = $textarea.val();
      that.model.blog().fetch({success: function() {
        that.model.blog().save({title: title});
        $p.text(title);
        $textarea.replaceWith($p);
      }});
    });
  },
});
