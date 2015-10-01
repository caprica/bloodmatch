Meteor.publish('admin/allHunters', function() {

    if (Roles.userIsInRole(this.userId, ['admin'])) {
        return Hunters.find({}, {sort: {name: 1}});
    }
    else {
        return [];
    }

});
