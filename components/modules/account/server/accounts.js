// Accounts.validateNewUser(function (user) {
//   if (user.username && user.username.length >= 3)
//     return true;
//   throw new Meteor.Error(403, "Username must have at least 3 characters");
// });

Accounts.validateNewUser(function(user) {
    if (user.username && user.username.length >= 3) {
        return true;
    }
    throw new Meteor.Error(403, 'Username must have at least 3 characters');
});

Accounts.validateNewUser(function(user) {
    var forbiddenUsernames = ['bimble', 'caprica', 'admin'];
    if (!_.contains(forbiddenUsernames, user.username.toLowerCase())) {
        return true;
    }
    throw new Meteor.Error(403, 'Invalid username');
});

Accounts.onCreateUser(function(options, user) {
    Audit.userRegistered(user);
    return user;
});

Accounts.validateLoginAttempt(function(attempt) {
    if (!attempt.allowed) {
        return false;
    }
    if (attempt.user) {
        if (attempt.user.deleted) {
            // throw new Meteor.Error('Account was deleted');
            return false;
        }
    }
    return true;
});
