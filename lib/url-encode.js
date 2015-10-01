// FIXME not actually used anymore

if (Meteor.isClient) {

    Template.registerHelper('escapeUrl', function(route, id) {
        var path = Meteor.absoluteUrl() + Router.routes[route].path({_id: id}).substring(1);
        return encodeURIComponent(path);
    });

}
