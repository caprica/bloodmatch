Template.Hunters.events({
    'click .activate': function(event, template) {
        Meteor.call('activateHunter', this._id);
    }
});

Template.AddHunter.events({
    'submit #addHunterForm': function(event, template) {
        event.preventDefault();
        var hunter = {
            name    : template.find('#name').value,
            level   : Number(template.find('#level').value),
            covenant: template.find('#covenant').value,
            coop    : template.find('#coop').checked,
            chalices: template.find('#chalices').checked,
            pvp     : template.find('#pvp').checked,
            active  : false
        };
        Meteor.call('addHunter', hunter, function(err) {
            if (!err) {
                Router.go('Hunters');
            }
            else {
                // FIXME report errors
            }
        });
        return false;
    }
});

Template.EditHunter.events({
    'submit #editHunterForm': function(event, template) {
        var hunter = {
            level   : Number(template.find('#level').value),
            covenant: template.find('#covenant').value,
            coop    : template.find('#coop').checked,
            chalices: template.find('#chalices').checked,
            pvp     : template.find('#pvp').checked,
        };
        Meteor.call('updateHunter', this.hunter._id, hunter, function(err) {
            if (!err) {
                Router.go('Hunters');
            }
            else {
                // FIXME report errors
            }
        });
        return false;
    },
    'click #deleteHunter': function(event, template) {
        Meteor.call('deleteHunter', this.hunter._id, function(err) {
            if (!err) {
                Router.go('Hunters');
            }
            else {
                // FIXME report errors
            }
        });
    }
});
