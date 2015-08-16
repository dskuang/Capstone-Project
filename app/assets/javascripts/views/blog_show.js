Tumblr.Views.blogShow = Backbone.CompositeView.extend({
  initialize: function(options) {

    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.posts(), "sync", this.render);
    this.listenTo(this.model.posts(), 'add', this.addPostView);
    this.model.posts().each(this.addPostView.bind(this));
  },
  className: "blog-show",
  template: JST["blogShow"],

  render: function() {
    this.$el.html(this.template({blog: this.model}));
    this.attachSubviews();
    return this;
  },

  addPostView: function(post) {
    var subPostView = new Tumblr.Views.postShow({model: post})
    this.addSubview(".posts", subPostView)
  },


});
