window.Tumblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#content");
    var router = new Tumblr.Routers.Router({$rootEl: $rootEl});
    var nav = new Tumblr.Views.NavShow({router: router});
    $("#navbar").html(nav.render().$el);

    Backbone.history.start();
  }
}
