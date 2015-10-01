if (Meteor.isClient) {

    Template.registerHelper('selected', function(value, equalTo) {
        return value === equalTo ? 'selected' : '';
    });

}
