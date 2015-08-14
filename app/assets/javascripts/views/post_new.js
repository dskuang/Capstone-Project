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

  pickFile: function (event) {
    event.preventDefault();
    // filepicker.set()
    filepicker.pick({mimetype: 'image/*', service: "computer"},
      function(Blob) {
        $(".image-input").val(Blob.url);
      }.bind(this)
    );
  },





});
