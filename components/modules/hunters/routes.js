Router.route('/hunters/add', {
    name: 'AddHunter',
    waitOn: function() {
        return Meteor.subscribe('covenants');
    },
    data: function() {
        return {
            covenants: Covenants.find({})
        };
    }
});

Router.route('/hunters/roster', {
    name: 'Hunters',
    waitOn: function() {
        return Meteor.subscribe('myHunters');
    },
    data: function() {
        return {
            activeHunter: Hunters.findOne({active: true}),
            otherHunters: Hunters.find({active: {$ne: true}}, {sort: {name: 1}})
        };
    }
});

Router.route('/hunters/roster/:hunter', {
    name: 'EditHunter',
    waitOn: function() {
        return [
            Meteor.subscribe('covenants'),
            Meteor.subscribe('myHunters')
        ];
    },
    data: function() {
        var hunter = Hunters.findOne({slug: this.params.hunter});
        if (hunter) {
            return {
                covenants: Covenants.find({}),
                hunter   : hunter
            };
        }
    }
});
