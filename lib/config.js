if (Meteor.isClient) {

    Template.registerHelper('config',
        function(name) {
            var c = config();
            if (c) {
                var res = c[name];
                return res;
            }
        }
    );

}
