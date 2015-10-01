/**
 *
 */
var HunterName = Match.Where(function(value) {

    var NAME_MIN = 2;
    var NAME_MAX = 16;

    check(value, String);

    if (value.length >= NAME_MIN && value.length <= NAME_MAX) {
        return true;
    }
    else {
        throw new Match.Error('Name ' + value + ' length must be in range ' + NAME_MIN + ' to ' + NAME_MAX);
    }

});

/**
 * Check implementation for Hunter Blood Level being a number within a specific minimum and maximum value.
 */
var HunterLevel = Match.Where(function(value) {

    var LEVEL_MIN = 4;
    var LEVEL_MAX = 544;

    check(value, Number);

    if (value >= LEVEL_MIN && value <= LEVEL_MAX) {
        return true;
    }
    else {
        throw new Match.Error('Level ' + value + ' must be in range ' + LEVEL_MIN + ' to ' + LEVEL_MAX);
    }

});

/**
 *
 */
var HunterCovenant = Match.Where(function(value) {

    check(value, String);

    var covenants = _.pluck(Covenants.find({}).fetch(), 'name');
    covenants.push('');
    if (_.indexOf(covenants, value) > -1) {
        return true;
    }
    else {
        throw new Match.Error('Covenant \'' + value + '\' is not allowed');
    }
});

Meteor.methods({

    addHunter: function(hunter) {
        var userId = Meteor.userId();
        if (!userId) {
            throw new Meteor.Error('Not authorised');
        }

        check(hunter, {
            name    : HunterName,
            level   : HunterLevel,
            covenant: HunterCovenant,
            coop    : Boolean,
            chalices: Boolean,
            pvp     : Boolean,
            active  : Boolean
        });

        var sluggedName = s.slugify(hunter.name);

        // Check if this user has already created a Hunter with this name
        if (Hunters.findOne({createdBy: userId, slug: hunter.name})) {
            throw new Meteor.Error('A Hunter with that name already exists for this user');
        }

        hunter.slug = sluggedName;

        hunter.createdBy = userId;
        hunter.createdDate = new Date();

        hunter.online = true; // FIXME do it via a collection hook?

        // If this is the only Hunter, make it active
        if (Hunters.find({createdBy: userId}).count() === 0) {
            hunter.active = true;
        }

        Hunters.insert(hunter);

        if (Meteor.isServer) {
            Audit.hunterCreated(hunter);
        }
    },

    updateHunter: function(id, updates) {
        var userId = Meteor.userId();
        if (!userId) {
            throw new Meteor.Error('Not authorised');
        }

        check(id, String);

        var hunter = Hunters.findOne({_id: id});
        if (hunter.createdBy !== userId) {
            throw new Meteor.Error('Not authorised');
        }

        // Only checked fields will be used in the update - this prevents e.g. changing the name
        check(updates, {
            level   : HunterLevel,
            covenant: HunterCovenant,
            coop    : Boolean,
            chalices: Boolean,
            pvp     : Boolean
        });

        Hunters.update(id, {$set: updates});

        // Update the user's current Beckoning Bell if there is one FIXME maybe do in a collection hook?
        BeckoningBells.update(
            {createdBy: userId},
            {$set: {level: updates.level, covenant: updates.covenant}}
        );
    },

    activateHunter: function(id) {
        var userId = Meteor.userId();
        if (!userId) {
            throw new Meteor.Error('Not authorised');
        }

        check(id, String);

        var hunter = Hunters.findOne({_id: id});
        if (hunter.createdBy !== userId) {
            throw new Meteor.Error('Not authorised');
        }

        // FIXME is this OK, can it be improved? e.g. hooks?
        BeckoningBells.remove({createdBy: userId});
        Hunters.update({createdBy: userId}, {$set: {active: false}}, {multi: true});
        Hunters.update(id, {$set: {active: true}});
    },

    deactivateHunter: function(id) {
        var userId = Meteor.userId();
        if (userId) {
            check(id, String);
            var hunter = Hunters.findOne({_id: id});
            if (hunter.createdBy !== userId) {
                throw new Meteor.Error('Not authorised');
            }
            // FIXME is this OK, can it be improved? e.g. use a collection hook
            BeckoningBells.remove({createdBy: userId});
            Hunters.update({createdBy: userId}, {$set: {active: false}}, {multi: true});
        }
    },

    deleteHunter: function(id) {
        var userId = Meteor.userId();
        if (userId) {
            check(id, String);
            var hunter = Hunters.findOne({_id: id});
            if (hunter.createdBy !== userId) {
                throw new Meteor.Error('Not authorised');
            }
            BeckoningBells.remove({createdBy: userId, hunter: hunter.name});
            Hunters.remove({_id: id});

            if (Meteor.isServer) {
                Audit.hunterDeleted(hunter);
            }
        }
    }

});
