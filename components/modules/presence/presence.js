if (Meteor.client) {

    Template.presence.labelClass = function() {
        if (this.status.idle) {
            return "label-warning";
        }
        else if (this.status.online) {
            return "label-success";
        }
        else {
            return "label-default";
        }
    };

}
