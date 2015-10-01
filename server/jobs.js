Meteor.startup(function() {

    var EXPIRY = 30;

    var journal = new JournalX();

    SyncedCron.add({
        name: 'Expire Beckoning Bells',
        schedule: function(parser) {
            return parser.text('every 30 min');
        },
        job: function() {
            BeckoningBells.remove({createdDate: {$lte: moment().subtract(EXPIRY, 'm').toDate()}});
            return true;
        }
    });

    SyncedCron.add({
        name: 'Journal Message',
        schedule: function(parser) {
            return parser.text('every 1 minute');
        },
        job: function() {
            Journal.update({}, {$set: {message: journal.getMessage()}});
            return true;
        }
    });

    // Set the initial value immediately
    Journal.remove({});
    Journal.insert({message: journal.getMessage()});

    SyncedCron.start();

});

Meteor.publish('journal', function() {
    return Journal.find({});
});
