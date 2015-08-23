window.Guest = {
  initialize: function() {
    $(".demo-button").on("click", this.insertValues.bind(this));
  },
  insertValues: function() {
    $(".auto-user").val('myUser');
    $(".auto-pass").val(123456);
    $(".sign").click();
  }
};
