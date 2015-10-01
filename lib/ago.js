if (Meteor.isClient) {

    var clock = new ReactiveDict;

    clock.set('now', new Date);
    setInterval(function() {
        clock.set('now', new Date);
    }, 30 * 1000);
    var getNow = function() {
        return clock.get('now');
    };

    Template.registerHelper('ago', function(value) {
        getNow();
        return value ? moment(value).fromNow() : '';
    });

}
