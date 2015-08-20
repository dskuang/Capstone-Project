Tumblr.Views.trendingTags = Backbone.View.extend({
  initialize: function(){
    this.tagCollection = new Tumblr.Collections.TrendingTags();
    this.tagCollection.fetch({data: {trending: true}, processData: true });
    this.listenTo(this.tagCollection, "sync", this.render);
  },
  class: "trending-tags",

  events: {
    "click .index-tag-label": "renderTagPostIndex"
  },

  template: JST["trendingTags"],

  renderTagPostIndex: function(e) {
    e.preventDefault();
    var tag = $(e.currentTarget).data("tag");
    Backbone.history.navigate("#tags/" + tag, {trigger: true});
  },

  render: function() {
    var content = this.template({tags: this.tagCollection});
    this.$el.html(content);
    return this;
  }

})
