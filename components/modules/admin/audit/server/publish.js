Meteor.publish('auditEvents', function(user) {
    check(user, Match.Optional(String));

    if (Roles.userIsInRole(this.userId, ['admin'])) {
        return AuditEvents.find(user ? {userId: user} : {}, {limit: 500, sort: {eventDate: -1}});
    }
    else {
        return [];
    }
});
