Template.MainLayout.events({

    /**
     * Handle an explicit logout.
     *
     * This will trigger some behaviour by the "presence" handler, e.g. to silence any currently ringing Beckoning Bell.
     */
    'click .sign-out': function(event, template) {
        Meteor.logout(function(err) {
            if (!err) {
                Router.go('Intro');
            }
            else {
                UIkit.notify({
                    message: '<i class="uk-icon-exclamation"></i> Sign Out Failed, ' + err,
                    status : 'danger',
                    timeout: 5000,
                    pos    : 'top-center'
                });
            }
            Meteor.logoutOtherClients();
        });
        return false;
    }

});
