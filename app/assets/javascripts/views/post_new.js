Tumblr.Views.postNew = Backbone.CompositeView.extend({
  initialize: function() {
    // this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .image-input": "fixPosition",

  },


  template: JST["postNew"],

  render: function() {
    // debugger
    var content = this.template({post: this.model});
    this.$el.html(content);
    filepicker.constructWidget($('input[type=filepicker]')[0] );
    this.attachSubviews();
    return this;
  },

  fixPosition: function() {
    // debugger
     $(".new-post").addClass("remove-zindex");
    // $(".post-nav").addClass("hide");
  },



});
