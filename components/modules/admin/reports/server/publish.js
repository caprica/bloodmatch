Meteor.publish('admin/hunterLevels', function() {

    if (Roles.userIsInRole(this.userId, ['admin'])) {
        return Hunters.find({}, {fields: {level: 1, covenant: 1}, sort: {level: 1}});
    }
    else {
        return [];
    }

});
