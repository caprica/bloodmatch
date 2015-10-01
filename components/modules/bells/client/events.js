Template.MyBellCard.events({

    'click #silence': function(event, template) {
        Meteor.call('silenceBeckoningBell');
    }

});

Template.ResonantBell.events({

    'click #reset': function(event, template) {
        Template.instance().resetFilters();
    },

    'click .ping': function(event, template) {
        Meteor.call('ping', this._id, function(err) {
            if (err) {
            }
            else {
            }
        });
    }

});
