/**
 * Class to encapsulate Location this.filters.
 */
var LocationFilters = function() {

    /**
     * This reactive dictionary contains the current filters when searching through Resonant Bells.
     *
     * This dictionary is not named because we do not care about restoring it after a hot-deploy (we would in fact prefer it to be
     * reset anyway).
     */
    this.filters = new ReactiveDict();

};

LocationFilters.prototype.getType = function() {
    return this.filters.get('type');
};

LocationFilters.prototype.setType = function(type) {
    this.filters.set('type', type);
    this.setHeadstone(null);
    this.setChalice(null);
};

LocationFilters.prototype.getHeadstone = function() {
    return this.filters.get('headstone');
};

LocationFilters.prototype.setHeadstone = function(headstone) {
    this.filters.set('headstone', headstone);
    this.setLamp(null);
};

LocationFilters.prototype.getLamp = function() {
    return this.filters.get('lamp');
};

LocationFilters.prototype.setLamp = function(lamp) {
    this.filters.set('lamp', lamp);
};

LocationFilters.prototype.getChalice = function() {
    return this.filters.get('chalice');
};

LocationFilters.prototype.setChalice = function(chalice) {
    this.filters.set('chalice', chalice);
    this.setDungeon(null);
};

LocationFilters.prototype.getDungeon = function() {
    return this.filters.get('dungeon');
};

LocationFilters.prototype.setDungeon = function(dungeon) {
    this.filters.set('dungeon', dungeon);
};

LocationFilters.prototype.reset = function() {
    this.setType(null);
};

/**
 * Location filters for Beckoning Bells.
 *
 * This must be in the global namespace as it used by templates and the router.
 */
BeckoningBellFilters = new LocationFilters();
