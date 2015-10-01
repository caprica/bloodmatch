Template.SignIn.rendered = function() {
    // FIXME is this the right place for resetting this?
    Session.set('LoginError', null);
    // var input = this.find('#username');
    // if (input) {
    //     input.focus();
    // }
};

Template.Register.rendered = function() {
    Session.set('RegisterError', null);
    // var input = this.find('#username');
    // if (input) {
    //     input.focus();
    // }
};

Template.SignIn.helpers({
    loginError: function() {
        return Session.get('LoginError');
    }
});

Template.Register.helpers({
    registerError: function() {
        return Session.get('RegisterError');
    }
});
