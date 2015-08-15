Tumblr.Views.postNew = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .filepicker-button": "pickFile"

  },


  template: JST["postNew"],

  render: function() {
    // debugger
    var content = this.template({post: this.model});
    this.$el.html(content);
    // filepicker.constructWidget($('input[type=filepicker]')[0]);
    this.attachSubviews();
    return this;
  },

  pickFile: function (e) {
    e.preventDefault();
    var attr = $(e.currentTarget).data("attr")
    // filepicker.set()
    // debugger
    var type;
    var selector;
    if(attr === "Image"){
      type = {mimetype: 'image/*'};
      selector = $(".image-input");
    } else if (attr === "Song") {
      type = {mimetype: 'audio/*'};
      selector = $(".song-input");
    } else if (attr === "Video") {
      type = {mimetype: 'video/*'};
      selector = $(".video-input");
    }
    filepicker.pick({type, service: "computer"},
      function(Blob) {
        // debugger
          selector.val(Blob.url);
      }.bind(this)
    );
  },





});
