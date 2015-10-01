Meteor.methods({

    deleteAccount: function() {
        var userId = Meteor.userId();
        Meteor.users.update({_id: userId}, {$set: {deleted: true, deletedDate: new Date}});
    }

});
