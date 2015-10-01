if (Meteor.isClient) {

    Template.registerHelper('formatDate', function(value) {
       return value ? moment(value).format('L') : '';
        // return date ? moment(value).format('DD/MM/YYYY') : '';
    });

    Template.registerHelper('formatTime', function(value) {
        return value ? moment(value).format('LTS') : '';
        // return value ? moment(value).format('HH:mm') : '';
    });

    Template.registerHelper('year', function() {
        return moment().format('YYYY');
    });

}
