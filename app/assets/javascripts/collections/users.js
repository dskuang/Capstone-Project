Tumblr.Collections.Users = Backbone.Collection.extend({
  url: "/api/users",
  model: Tumblr.Models.User,

  getOrFetch: function(id) {
    var userModel = this.get(id);
    if(!userModel) {
      userModel = new Tumblr.Models.User({id: id});
      this.add(userModel);
    }
    userModel.fetch();

    return userModel;
  }

})
