/*
 * Route definitions for the "Locations" module.
 *
 * Note that in these routes the Locations collection is explicitly fetched (not lazy-loaded) since we need to iterate the entire
 * collection to build the navigation lists.
 */

Router.route('/locations', {
    name: 'Locations',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        var locations = Locations.find({}, {sort: {order: 1}}).fetch();
        return {
            headstones: LocationUtils.uniqueLocations(locations, 'Headstone'      , 'headstone'),
            dream     : LocationUtils.uniqueLocations(locations, 'Hunter\'s Dream', 'name'     ),
            chalices  : LocationUtils.uniqueLocations(locations, 'Chalice'        , 'chalice'  ),
            myHunter  : Hunters.findOne({})
        };
    }
});

Router.route('/locations/headstones', {
    name: 'Headstones',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        var locations = Locations.find({type: 'Headstone'}, {sort: {order: 1}}).fetch();
        return {
            headstones: LocationUtils.uniqueLocations(locations, 'Headstone', 'headstone'),
            myHunter  : Hunters.findOne({})
        };
    }
});


Router.route('/locations/headstones/:headstone', {
    name: 'Headstone',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        var locations = Locations.find({type: 'Headstone'}, {sort: {order: 1}}).fetch();
        return {
            headstone : this.params.headstone,
            headstones: LocationUtils.uniqueLocations(locations, 'Headstone', 'headstone'),
            lamps     : Locations.find({headstone: this.params.headstone}, {sort: {order: 1}}),
            myHunter  : Hunters.findOne({})
        };
    }
});

Router.route('/locations/headstones/:headstone/:location', {
    name: 'Location',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        var locations = Locations.find({type: 'Headstone'}, {sort: {order: 1}}).fetch();
        return {
            location  : Locations.findOne({name: this.params.location}),
            headstones: LocationUtils.uniqueLocations(locations, 'Headstone', 'headstone'),
            myHunter  : Hunters.findOne({})
        }
    }
});

Router.route('/locations/hunters-dream', {
    name: 'HuntersDream',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        return {
            dream     : Locations.find({type: 'Hunter\'s Dream'}, {sort: {order: 1}}),
            myHunter  : Hunters.findOne({})
        }
    }
});

// FIXME can probably get away with a shared location template with a bit more parameterisation/page-logic
Router.route('/locations/hunters-dream/:location', {
    name: 'Dream',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        return {
            location: Locations.findOne({name: this.params.location}),
            myHunter: Hunters.findOne({})
        };
    }
});

Router.route('/locations/chalices', {
    name: 'Chalices',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        var locations = Locations.find({type: 'Chalice'}, {sort: {order: 1}}).fetch();
        return {
            chalices: LocationUtils.uniqueLocations(locations, 'Chalice', 'chalice'),
            myHunter: Hunters.findOne({})
        };
    }
});

Router.route('/locations/chalices/:chalice', {
    name: 'Chalice',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        var locations = Locations.find({type: 'Chalice'}, {sort: {order: 1}}).fetch();
        // FIXME gotta be a much better way...!!! this is shit!
        var locations2 = Locations.find({chalice: this.params.chalice}, {sort: {order: 1}}).fetch();
        return {
            chalice : this.params.chalice,
            chalices: LocationUtils.uniqueLocations(locations, 'Chalice', 'chalice'),
            dungeons: _.uniq(locations2, function(location) {return location.name;}),
            myHunter: Hunters.findOne({})
        };
    }
});

Router.route('/locations/chalices/:chalice/:dungeon', {
    name: 'Dungeon',
    waitOn: function() {
        return [
            Meteor.subscribe('locations'),
            Meteor.subscribe('myHunter' )
        ];
    },
    data: function() {
        var locations = Locations.find({type: 'Chalice'}, {sort: {order: 1}}).fetch();
        var layers = Locations.find({name: this.params.dungeon}, {sort: {order: 1}}).fetch();
        return {
            chalice : this.params.chalice,
            dungeon : this.params.dungeon,
            chalices: LocationUtils.uniqueLocations(locations, 'Chalice', 'chalice'),
            layers  : layers,
            pvp     : _.find(layers, function(location) {return location.pvp === true;}),
            myHunter: Hunters.findOne({})
        }
    }
});
