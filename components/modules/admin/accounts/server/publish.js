Meteor.publish('admin/allAccounts', function() {

    if (Roles.userIsInRole(this.userId, ['admin'])) {
        return Meteor.users.find({}, {sort: {name: 1}});
    }
    else {
        return [];
    }

});
