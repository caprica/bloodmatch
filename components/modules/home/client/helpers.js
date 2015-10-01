Template.Home.helpers({

    anyHunters: function() {
        return Template.currentData().myHunters.count() > 0;
    },

    journal: function() {
        var result = Journal.findOne({});
        if (result) {
            return result.message;
        }
    }

});
