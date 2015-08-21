Tumblr.Views.followShow = Backbone.CompositeView.extend({
  initialize: function(options) {
    this.attr = options.attr;
    this.follows = options.follows
    this.addFollowView();
  },

  className: "follows-index",

  events: {
    "input input[name=followquery]": "findFollow",
    "blur .follow-search": "resetSearch"
  },

  template: JST["followShow"],

  findFollow: function(e) {
    if (this.attr === "followers"){
      this.follows.fetch({data: {followers: true}, processData: true,
      success: function () {
        var input = $(e.currentTarget).val();
        var rendered = this.follows.fetchByUser(input);
        this.follows.reset(rendered);
      }.bind(this) });
    } else {
      this.follows.fetch({data: {followees: true}, processData: true,
      success: function() {
        var input = $(e.currentTarget).val();
        var rendered = this.follows.fetchByUser(input);
        this.follows.reset(rendered);
      }.bind(this) });
    }
    if ($(".follow-search").val() === "") {
      this.reRender();
    }

  },

  reRender: function() {
    if (this.attr === "followers"){
      this.follows.fetch({data: {followers: true}, processData: true });
    } else {
      this.follows.fetch({data: {followees: true}, processData: true });
    }
  },

  addFollowView: function() {
    var subPostView = new Tumblr.Views.followShowing({collection: this.follows});
    this.addSubview(".all-container", subPostView);

  },

  resetSearch: function() {
    $(".follow-search").val("");
    this.reRender();
  },


  render: function(){
    var content = this.template({follows: this.follows});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
});
