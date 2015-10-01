Meteor.methods({

    adminDeleteAccount: function(id) {
        Meteor.users.update({_id: id}, {$set: {deleted: true, deletedDate: new Date, deletedByAdmin: true}});
    }

});
