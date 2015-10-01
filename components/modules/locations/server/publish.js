Meteor.publish('locations', function() {
    if (this.userId) {
        return Locations.find({}, {sort: {order: 1}});
    }
    else {
        return [];
    }
});
