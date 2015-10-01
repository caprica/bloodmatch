var getUser = function(userId) {
    return Meteor.users.findOne({_id: userId});
};

// FIXME should be using prototypes instead?
Audit = {

    userRegistered: function(data) {
        var event = {
            eventDate: new Date,
            type     : 'Register',
            userId   : data._id,
            username : data.username
        };
        AuditEvents.insert(event);
    },

    userSignedIn: function(data) {
        var user = getUser(data.userId);
        var event = {
            eventDate: new Date,
            type     : 'Signin',
            userId   : data.userId,
            ip       : data.ipAddr,
            username : user ? user.username : null,
            time     : data.loginTime,
            ua       : data.userAgent
        };
        AuditEvents.insert(event);
    },

    userSignedOut: function(data) {
        var user = getUser(data.userId);
        var event = {
            eventDate: new Date,
            type     : 'Signout',
            userId   : data.userId,
            username : user ? user.username : null
        };
        AuditEvents.insert(event);
    },

    userCameOnline: function(data) {
        var user = getUser(data.userId);
        var event = {
            eventDate: new Date,
            type     : 'Online',
            userId   : data._id,
            username : data.username
        };
        AuditEvents.insert(event);
    },

    userWentOffline: function(data) {
        var user = getUser(data.userId);
        var event = {
            eventDate: new Date,
            type     : 'Offline',
            userId   : data._id,
            username : data.username
        };
        AuditEvents.insert(event);
    },

    hunterCreated: function(data) {
        var user = getUser(Meteor.userId());
        var event = {
            eventDate: new Date,
            type     : 'CreateHunter',
            userId   : user._id,
            username : user.username,
            hunter   : data.name
        };
        AuditEvents.insert(event);
    },

    hunterDeleted: function(data) {
        var user = getUser(Meteor.userId());
        var event = {
            eventDate: new Date,
            type     : 'DeleteHunter',
            userId   : user._id,
            username : user.username,
            hunter   : data.name
        };
        AuditEvents.insert(event);
    },

    beckoningBell: function(data) {
        var user = getUser(Meteor.userId());
        var event = {
            eventDate: new Date,
            type     : 'BeckoningBell',
            userId   : user._id,
            username : user.username,
            location : data.name
        };
        AuditEvents.insert(event);
    }

};
