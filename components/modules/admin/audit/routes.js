Router.route('/management/audit', {
    name: 'AuditEvents',
    waitOn: function() {
        return Meteor.subscribe('auditEvents');
    },
    data: function() {
        return {
            auditEvents: AuditEvents.find({}, {sort: {eventDate: -1}})
        }
    }
});

Router.route('/management/audit/user/:userId', {
    name: 'UserAuditEvents',
    waitOn: function() {
        return Meteor.subscribe('auditEvents', this.params.userId);
    },
    data: function() {
        return {
            auditUser: this.params.userId,
            auditEvents: AuditEvents.find({userId: this.params.userId}, {sort: {eventDate: -1}})
        }
    },
    notFoundTemplate: 'AuditUserNotFound'
});
