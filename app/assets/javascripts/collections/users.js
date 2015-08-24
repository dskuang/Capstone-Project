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
  },

  fetchByUser: function(partial) {
    var newstr = "";
    for(var i = 0; i < partial.length; i++) {
      if (partial[i] !== parseInt(partial[i], 10)) {
        newstr += partial[i].toLowerCase();
      } else {
        newstr += partial[i];
      }
    }

    var filtered = this.filter(function(user) {
      var re = new RegExp(newstr);
      var name = user.get("username");
      var newName = "";
      for(var j = 0; j < name.length; j++) {
        if (name[j] !== parseInt(name[j], 10)) {
          newName += name[j].toLowerCase();
        } else {
          newName += name[j];
        }
      }
      var matches = newName.match(re);
      if(matches) {
        return user.get("username") ;
      }
    });
    return filtered;
  }

})
