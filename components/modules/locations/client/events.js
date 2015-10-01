Template.Beckon.events({

    'click .beckon': function(event, template) {
        var glyph = this.glyph ? this.glyph.glyph : null;
        if (!glyph) {
            var $input = Template.instance().$('button').prev('input').eq(0);
            if ($input) {
                glyph = $input.val();
            }
        }
        Meteor.call('beckon', this.location._id, glyph ? glyph : '', function(err) {
            if (!err) {
                Router.go('/beckoning-bell');
            }
            else {
                // FIXME report?
            }
            return false;
        });
        return false;
    }

});
