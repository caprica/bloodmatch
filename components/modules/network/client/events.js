Template.Network.events({

    'submit #networkForm': function(event, template) {
        var newValue = template.find('#networkPassword').value;
        Meteor.call('setNetworkPassword', newValue, function(err) {
            if (!err) {
                Router.go('Home');
            }
            else {
                UIkit.notify({
                    message: '<i class="uk-icon-exclamation"></i> Failed to save network settings.',
                    status : 'danger',
                    timeout: 0,
                    pos    : 'top-center'
                });
            }
        });
        return false;
    },

    'click #clearNetworkPassword': function(event, template) {
        template.find('#networkPassword').value = '';
        return false;
    }

});
