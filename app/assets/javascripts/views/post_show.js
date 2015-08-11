Tumblr.Views.postShow = Backbone.View.extend({
  tagName: "li",
  className: "post-item",
  template: JST['postShow'],

  render: function(){
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }


});
