Template.Locations.rendered = function() {

    $('#customGlyphForm')
        .form({
            name: {
                identifier  : 'glyph',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a glyph'
                    },
                    {
                        type   : 'length[8]',
                        prompt : 'Glyph must be 8 characters'
                    },
                    {
                        type   : 'maxLength[8]',
                        prompt : 'Glyph must be 8 characters'
                    }
                ]
            }
        })
    ;

    this.$('.ui.accordion')
      .accordion()
    ;

    this.$('.dropdown')
        .dropdown()
    ;

};

Template.Layers.rendered = function() {

    this.$('.ui.accordion')
      .accordion()
    ;

};

Template.HeadstonesMenu.helpers({

    pathExpression: function() {
        return '^/locations/headstones/' + this;
    }

});

Template.ChalicesMenu.helpers({

    pathExpression: function() {
        return '^/locations/chalices/' + this;
    }

});
