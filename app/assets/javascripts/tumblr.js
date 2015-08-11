window.Tumblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("#content");
    var router = new Tumblr.Routers.Router({$rootEl: $rootEl});
    Backbone.history.start();

  }
};

$(document).ready(function(){
  Tumblr.initialize();
});
