/**
 *
 */
var HunterName = Match.Where(function(value) {

    var NAME_MIN = 2;
    var NAME_MAX = 20;

    check(value, String);

    if (value.length >= NAME_MIN && value.length <= NAME_MAX) {
        return true;
    }
    else {
        throw new Match.Error('Name ' + name + ' length must be in range ' + NAME_MIN + ' to ' + NAME_MAX);
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
