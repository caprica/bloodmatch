/**
 *
 */
var NetworkPassword = Match.Where(function(value) {

    var PASSWORD_MIN = 1;
    var PASSWORD_MAX = 8;

    check(value, String);

    if (value.length === 0 || (value.length >= PASSWORD_MIN && value.length <= PASSWORD_MAX)) {
        return true;
    }
    else {
        throw new Match.Error('Network password ' + value + ' length must be in range ' + PASSWORD_MIN + ' to ' + PASSWORD_MAX);
    }

});


Meteor.methods({

    setNetworkPassword: function(networkPassword) {
        check(networkPassword, NetworkPassword);
        Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.networkPassword': networkPassword}});
    }

});
