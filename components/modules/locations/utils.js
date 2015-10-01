LocationUtils = {

    /**
     * Helper method to extract a unique set of location names.
     *
     * @param locations super-set of locations to extract names from
     * @param type type of location to extract
     * @param field document field containing the location name
     */
    uniqueLocations: function(locations, type, field) {
        return _.chain(locations)
            .filter(function(location) {return type == null || type === location.type;})
            .pluck(field)
            .uniq(true)
            .value();
    },

    types: function(locations) {
        return _.chain(locations)
            .pluck('type')
            .uniq(true)
            .value();
    },

    headstones: function(locations) {
        return _.chain(locations)
            .filter(function(location) {return location.type === 'Headstone';})
            .pluck('headstone')
            .uniq(true)
            .value();
    },

    headstone: function(locations, headstone) {
        return _.chain(locations)
            .filter(function(location) {return location.headstone === headstone;})
            .pluck('name')
            .value();
    },

    chalices: function(locations) {
        return _.chain(locations)
            .filter(function(location) {return location.type === 'Chalice';})
            .pluck('chalice')
            .uniq(true)
            .value();
    },

    chalice: function(locations, chalice) {
        return _.chain(locations)
            .filter(function(location) {return location.chalice === chalice;})
            .pluck('name')
            .uniq(true)
            .value();
    }

};
