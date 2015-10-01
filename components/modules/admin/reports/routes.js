Router.route('/management/reports', {
    name: 'Reports',
    waitOn: function() {
        return Meteor.subscribe('admin/hunterLevels');
    },
    data: function() {
        return {
            hunterLevels: Hunters.find({})
        };
    }
});
