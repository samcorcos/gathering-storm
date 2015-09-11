Meteor.startup(function() {
  var id = "";
  if (Meteor.users.find().count() < 1) {
    id = Accounts.createUser({
      username: "butler",
      password: "butlerpassword",
    })
  }
})

Accounts.onCreateUser(function(options, user) {
  if (user.username === "butler") {
    user.data = {
      "roles": ["admin"]
    }
    user.profile = {
      nation: "N/A",
      amount_spent: "N/A"
    }
  }
  return user
})

Meteor.publish('users', function() {
  if(this.userId) {
    var user = Meteor.users.findOne(this.userId);
    if (user.data != null && user.data.roles[0] === "admin") {
      return Meteor.users.find()
    }
  } else {
    return null
  }
})

Accounts.validateLoginAttempt(function(attemptInfo) {
  if (attemptInfo.methodName == 'createUser') return false;
  if (attemptInfo.methodName == 'login') return true;
})
