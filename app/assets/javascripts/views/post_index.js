Tumblr.Views.postIndex = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.feedCollection = options.feedCollection;
    this.listenTo(this.collection, "change sync", this.render);
    this.listenTo(this.collection, 'add', this.addPostView);
    this.listenTo(this.collection, "remove", this.removePostView);
    this.colCount = 0;
    this.margin = 20;
    this.colWidth = 0;
    this.collection.each(this.addPostView.bind(this));
    $(window).on("resize", this.render.bind(this));
  },

  className: "index",

  template: JST["postIndex"],

  setupBlocks: function() {
    this.windowWidth = $(window).width();
    this.colWidth = $('.post-item').outerWidth();
    this.colCount = Math.floor(this.windowWidth/(this.colWidth+this.margin)) - 1;
    this.blocks = [];
    for(var i = 0; i < this.colCount; i++) {
        this.blocks.push(this.margin);
    }
  },

  positionBlocks: function(parent) {
    var view = this;
      $('.post-item').each(function(idx, block){
          var min = view.min(view.blocks);
          var index = $.inArray(min, view.blocks);
          var leftPos = view.margin+(index*(view.colWidth+view.margin));
          $(block).css({
              'left':leftPos+'px',
              'top':min+'px'
          });
          view.blocks[index] = min+$(block).outerHeight()+view.margin;
      });
  },

  min: function(array) {
    return Math.min.apply(Math, array);
  },

  render: function() {
    var content = this.template({posts: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  onRender: function () {
    this.setupBlocks($(".posts-index"));
    this.positionBlocks($(".posts-index"));
  },

  addPostView: function(post) {
    var subPostView = new Tumblr.Views.postShow({model: post, feedCollection: this.feedCollection});
    this.addSubview(".posts-index", subPostView);
  },

  remove: function () {
    $(window).off("resize");
    Backbone.CompositeView.prototype.remove.call(this);
  },

  removePostView: function(post) {
    this.removeModelSubview(".posts-index", post);
  }


});
