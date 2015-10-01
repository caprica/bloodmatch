Router.route('/management/accounts', {
    name: 'AdminAccounts',
    waitOn: function() {
        return Meteor.subscribe('admin/allAccounts');
    },
    data: function() {
        return {
            accounts: Meteor.users.find({})
        }
    }
});
