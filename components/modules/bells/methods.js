/**
 * Helper method to insert a Beckoning Bell entity.
 *
 * @param hunter
 * @param location
 * @param glyph
 * @return
 */
var insertBeckoningBell = function(hunter, location, glyph) {
    var userId = Meteor.userId();
    var bell = {
        createdBy  : userId,
        createdDate: new Date,
        type       : location.type,
        hunter     : hunter.name,
        level      : hunter.level,
        covenant   : hunter.covenant,
        location   : location.name
    };
    switch (location.type) {
        case 'Headstone':
            bell.headstone = location.headstone;
            break;
        case 'Hunter\'s Dream':
            break;
        case 'Chalice':
            bell.chalice = location.chalice;
            bell.layer = location.layer;
            if (glyph) {
                var glyphDetails = Glyphs.findOne({glyph: glyph});
                if (glyphDetails) {
                    bell.glyph = _.pick(glyphDetails, 'name', 'glyph');
                }
                else {
                    bell.glyph = {name: 'My Glyph', glyph: glyph};
                }
            }
            break;
        default:
            return;
    }
    // A beckoner may only have one Beckoning Bell ringing at a time
    BeckoningBells.remove({createdBy: userId});
    // Insert the new one
    return BeckoningBells.insert(bell);
};

/**
 * Beckoning Bell methods.
 */
Meteor.methods({

    beckon: function(where, glyph) {
        check(where, String);
        check(glyph, Match.Optional(String));
        // There must be an authenticated user...
        var userId = Meteor.userId();
        if (userId) {
            // There must be an active Hunter for the current user
            var hunter = Hunters.findOne({createdBy: userId, active: true});
            if (hunter) {
                // The location must exist...
                var location = Locations.findOne({_id: where});
                if (location) {
                    // There must not already be a Beckoning Bell for this user in this location (any existing bell could just be
                    // removed first, but this way prevents e.g. queue jumping)

                    // FIXME it's ok if the glyph has changed, currently we ignore same dungeon, same level, but different glyph

                    var bell = BeckoningBells.findOne({createdBy: userId});
                    if (!bell || location.name !== bell.location || (location.type === 'Chalice' && location.layer !== bell.layer)) {
                        insertBeckoningBell(hunter, location, glyph);
                        if (Meteor.server) { // FIXME really?
                            Audit.beckoningBell(location); // FIXME maybe all params?
                        }
                    }
                    else {
                        console.log("Already ringing a bell here");
                    }
                }
            }
        }// FIXME throw unauth?
    },

    /**
     *
     */
    silenceBeckoningBell: function() {
        BeckoningBells.remove({createdBy: Meteor.userId()});
    },

    ping: function(bellId) {
        check(bellId, String);

        var userId = Meteor.userId();
        if (userId) {
            var bell = BeckoningBells.findOne({_id: bellId});
            if (bell) {
                var alreadyPinged = _.find(bell.pings, function(ping) {
                    return ping.userId === userId;
                });
                if (!alreadyPinged) {
                    var ping = {
                        userId: userId
                    };
                    BeckoningBells.update({_id: bellId}, {$push: {pings: ping}});
                }
            }
        }
    }

});
