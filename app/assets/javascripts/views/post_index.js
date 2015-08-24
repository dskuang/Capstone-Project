Tumblr.Views.postIndex = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.feedCollection = options.feedCollection;
    this.blogCollection = options.blogCollection;
    this.listenTo(this.collection, "change sync", this.render);
    this.listenTo(this.collection, 'add', this.addPostView);
    this.listenTo(this.collection, "remove", this.removePostView);
    this.colCount = 0;
    this.margin = 20;
    this.colWidth = 0;
    this.collection.each(this.addPostView.bind(this));
    $(window).load(function () {
      this.onRender();
    }.bind(this));
    $(window).on("resize", this.render.bind(this));
    this.addTrendingTags();
  },

  events: {
    "click .posts-index .username-header": "performSlide",
    "click .blog-shade": "removeSlide",
    "click .thumbnail-user": "renderUserPage"
  },

  template: JST["postIndex"],

  performSlide: function(e) {
    e.preventDefault();
    var blog_id = $(e.currentTarget).data("blog-id");
    this.addSideView(blog_id);
    this.$shadediv = $("<div class='blog-shade'></div>");
    this.$el.append(this.$shadediv);
    $('.leftSideBar').toggle("slide", {
      "direction": "left",
      "distance": "575px"
    }, "fast");
    $('#parent-form').toggleClass('left-float');
  },

  renderUserPage: function(e){
    var id = $(e.currentTarget).data("user-id");
    Backbone.history.navigate("#user/" + id, {trigger: true})
  },

  addTrendingTags: function() {
    var subPostView = new Tumblr.Views.trendingTags();
    this.addSubview(".trending-tags", subPostView);
  },

  removeSlide: function(e) {
    e.preventDefault();
    this.$shadediv.remove();
    this.removeSideView();
    $('.leftSideBar').toggle("slide", {
      "direction": "left",
      "distance": "575px"
    }, "fast");
    $('#parent-form').toggleClass('left-float');

  },

  addSideView: function(id) {
    this.blogModel = this.blogCollection.getOrFetch(id);
    this.subSideView = new Tumblr.Views.blogShow({model: this.blogModel});
    this.addSubview(".leftSideBar", this.subSideView);
  },

  removeSideView: function() {
    this.removeModelSubview(".leftSideBar", this.blogModel);
    this.subSideView = null;
  },

  setupBlocks: function() {
    this.windowWidth = $(window).width();
    this.colWidth = $('.post-item').outerWidth();
    this.colCount = Math.floor(this.windowWidth/(this.colWidth+this.margin)) - 1;
    if (this.colCount == 3) {
      $('.posts-index').css({'width': 955 +'px' });
    } else if (this.colCount == 2) {
      $('.posts-index').css({'width': 634 +'px' });
    }
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
    // this.addTrendingTags();
    this.attachSubviews();
    // this.invokeMasonry();
    this.setupBlocks();
    this.positionBlocks();
    this.listenForScroll();
    // this.onRender();
    return this;
  },

  listenForScroll: function () {
    $(window).off("scroll"); // remove previous listeners
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var view = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (view.collection.page < view.collection.total_pages) {
        view.collection.fetch({
          data: { page: parseInt(view.collection.page) + 1 },
          remove: false
        });
      }
    }
  },


  invokeMasonry: function() {
    $('.grid').masonry({
      itemSelector: '.post-item',
      columnWidth: 200
    });
  },

  onRender: function () {
    this.setupBlocks($(".posts-index"));
    this.positionBlocks($(".posts-index"));
  },

  addPostView: function(post) {
    var subPostView = new Tumblr.Views.postShow({blogcollection: this.blogCollection, model: post, feedCollection: this.feedCollection});
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
