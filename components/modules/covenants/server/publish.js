Meteor.publish('covenants', function() {
    return Covenants.find({}, {sort: {name: 1}});
});
