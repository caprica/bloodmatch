/**
 * Publish the Beckoning Bells that are for Hunters within level range of the current user.
 *
 * The sort order is by created date, so the oldest bell appears first. The idea is to encourage a fair queue.
 */
Meteor.publish('inRangeBells', function() {
    var userId = this.userId;
    if (userId) {
        var hunter = Hunters.findOne({active: true, createdBy: userId});
        if (hunter) {
            var range = getRange(hunter.level);
            return BeckoningBells.find({'level': {$gte: range.min, $lte: range.max}}, {sort: {createdDate: 1}, limit: 100});
        }
    }
    return [];
});

Meteor.publish('myBeckoningBell', function() {
    var userId = this.userId;
    if (userId) {
        return BeckoningBells.find({createdBy: userId});
    }
    return [];
});
