/**
 *
 *
 * @param level
 * @return
 */
getRange = function(level) {
    return {
        min: getRangeMin(level),
        max: getRangeMax(level)
    }
};

getRangeMin = function(level) {
    return Math.round(level - 20 - (level * .2));
};

getRangeMax = function(level) {
    return Math.round(level + 20 + (level * .2));
};

/**
 *
 *
 * @param userId
 * @param level
 */
getRangeForHunter = function(userId, hunterId) {
}
