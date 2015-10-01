if (Meteor.isClient) {

    Meteor.subscribe('config');

    Meteor.subscribe('journal');

}

config = function() {
    return Config.findOne({});
};
