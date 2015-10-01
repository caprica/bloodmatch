UserStatus.events.on('connectionLogin', function(fields) {
    Audit.userSignedIn(fields);
});

UserStatus.events.on('connectionLogout', function(fields) {
    Audit.userSignedOut(fields);
});

Meteor.users.find({"status.online": true}).observe({
    added: function(id) {
        Audit.userCameOnline(id);
        var userId = id._id;
        Hunters.update({createdBy: userId}, {$set: {online: true}}, {multi: true});
    },
    removed: function(id) {
        Audit.userWentOffline(id);
        var userId = id._id;
        Hunters.update({createdBy: userId}, {$unset: {online: ''}}, {multi: true});
        BeckoningBells.remove({createdBy: userId});
    }
});
