/**
 * Publish the currently active hunter for the current user.
 */
Meteor.publish('myHunter', function() {
    if (this.userId) {
        return Hunters.find({createdBy: this.userId, active: true});
    }
    return [];
});

/**
 * Publish all Hunters that were created by the current user.
 */
Meteor.publish('myHunters', function() {
    if (this.userId) {
        return Hunters.find({createdBy: this.userId});
    }
    return [];
});

/**
 * Publish all active Hunters that are in range of the current user based on level, for those users that are currently
 * on-line, excluding those hunters created by the current user.
 */
Meteor.publish('inRangeHunters', function() {
    var userId = this.userId;
    if (userId) {
        var hunter = Hunters.findOne({active: true, createdBy: userId});
        if (hunter) {
            var range = getRange(hunter.level);
            return Hunters.find({
                online   : true,
                active   : true,
                createdBy: {$ne: userId},
                level    : {$gte: range.min, $lte: range.max}
            });
        }
    }
    return [];
});
