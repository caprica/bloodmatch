Template.SignIn.events({
    'submit #signInForm': function(event, template) {
        event.preventDefault();

        var username = template.find('#username').value;
        var password = template.find('#password').value;
        // Trim and validate your fields here....
        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(username, password, function(err) {
            if (err) {
                // FIXME is this the best way?
                Session.set('LoginError', err.reason);
                var input = template.find('#username');
                input.focus();
            }
            else {
                Session.set('LoginError', null);
                // The user has been logged in.
                Router.go('Home');
            }
        });
        return false;
    }
});

Template.Register.events({
    'submit #registerForm': function(event, template) {
        event.preventDefault();
        var username = template.find('#username').value;
        var password = template.find('#password').value;
        // Trim and validate your fields here....
        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Accounts.createUser({username: username, password : password}, function(err) {
            if (err) {
                // FIXME is this the best way?
                Session.set('RegisterError', err.reason);
                // template.find('#username').value = '';
                template.find('#password').value = '';
                var input = template.find('#username');
                input.focus();
            }
            else {
                Session.set('RegisterError', null);
                Router.go('Home');
            }
        });
        return false;
    }
});

Template.DeleteAccount.events({
    'click #deleteAccount': function(event, template) {
        Meteor.call('deleteAccount');
        Meteor.logoutOtherClient();
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
        });
    }

});
