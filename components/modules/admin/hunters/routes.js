Router.route('/management/hunters', {
    name: 'AdminHunters',
    waitOn: function() {
        return Meteor.subscribe('admin/allHunters');
    },
    data: function() {
        return {
            hunters: Hunters.find({})
        }
    }
});
