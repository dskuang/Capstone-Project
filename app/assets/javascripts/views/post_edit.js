Tumblr.Views.postEdit = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .filepicker-button": "pickFile"
  },


  template: JST["postEdit"],

  render: function() {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  },

  pickFile: function (e) {
    e.preventDefault();
    var attr = $(e.currentTarget).data("attr")
    var type;
    var selector;
    var options;
    if(attr === "Image"){
      options = {mimetype: 'image/*', service: "computer", maxSize: 15728640}
      selector = $(".image-input");
    } else if (attr === "Song") {
      options = {service: "computer", maxSize: 15728640, extensions: ['.mp3','.flac','.wav','.mp4','.gp5','.ogg','.mpgg']};
      selector = $(".song-input");
    } else if (attr === "Video") {
      options = {service: "computer", maxSize: 15728640, extensions: ['.mp4','.avi', '.mov', '.mkv', '.flv', '.avc', '.swf']};
      selector = $(".video-input")
    }
    filepicker.pick(options,
      function(Blob) {

          selector.val(Blob.url);
      }.bind(this)
    );
  },





});
