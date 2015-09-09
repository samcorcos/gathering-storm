Meteor.startup(function() {
  var id = "";
  if (Meteor.users.find().count() < 1) {
    id = Accounts.createUser({username: "butler", password: "butlerpassword"})
  }
})

Accounts.onCreateUser(function(options, user) {
  user.data = {
    "roles": ["admin"]
  }
  return user
})
