Template.AdminAccounts.events({

    'click .delete': function(event, template) {
        Meteor.call('adminDeleteAccount', this._id);
    }

});
