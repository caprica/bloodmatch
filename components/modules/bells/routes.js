// FIXME for myBellCard, remove hunter name etc, just put the location etc
Router.route('/beckoning-bell', {
    name: 'BeckoningBell',
    waitOn: function() {
        return [
            Meteor.subscribe('myBeckoningBell'),
            Meteor.subscribe('myHunters'      ),
            Meteor.subscribe('inRangeHunters' )
        ];
    },
    data: function() {
        var userId = Meteor.userId();
        var myBell = BeckoningBells.findOne({})
        var hunterCriteria = {
            createdBy: {$ne: Meteor.userId()}
        };
        if (myBell) {
            switch (myBell.type) {
                case 'Headstone':
                case 'Hunter\'s Dream':
                    hunterCriteria.coop = true;
                    break;
                case 'Chalice':
                    hunterCriteria.chalices = true;
                    break;
            }
        }
        return {
            myBeckoningBell: myBell,
            myHunter       : Hunters.findOne({createdBy: Meteor.userId(), active: true}),
            hunters        : Hunters.find(hunterCriteria)
        }
    }
});

Router.route('/resonant-bell', {
    name: 'ResonantBell',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'   ),
            Meteor.subscribe('inRangeBells')
        ];
    },
    data: function() {
        var filters = BeckoningBellFilters;
        var userId = Meteor.userId();
        var find = {createdBy: {$ne: userId}};
        var type = filters.getType();
        if (type) {
            find.type = type;
        }
        var headstone = filters.getHeadstone();
        if (headstone) {
            find.headstone = headstone;
        }
        var lamp = filters.getLamp();
        if (lamp) {
            find.location = lamp;
        }
        var chalice =  filters.getChalice();
        if (chalice) {
            find.chalice = chalice;
        }
        var dungeon =  filters.getDungeon();
        if (dungeon) {
            find.location = dungeon;
        }
        return {
            bells: BeckoningBells.find(find),
            locations: Locations.find({}).fetch()
        }
    }
});
