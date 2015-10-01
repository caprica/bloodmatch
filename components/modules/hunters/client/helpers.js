Template.Hunters.helpers({

    anyHunters: function() {
        return Template.currentData().activeHunter || Template.currentData().otherHunters.count() > 0;
    }

});

Template.AddHunter.rendered = function() {
    $('#addHunterForm')
        .form({
            name: {
                identifier  : 'name',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a name'
                    },
                    {
                        type   : 'maxLength[16]',
                        prompt : 'Name must not be more than 16 characters'
                    }
                ]
            },
            level: {
                identifier : 'level',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a Blood Level'
                    },
                    {
                        type   : 'integer[4..544]',
                        prompt : 'Blood Level must be in the range 4 to 544'
                    }
                ]
            },
            covenant: {
                identifier : 'covenant',
                rules: [
                ]
            },
        })
    ;
};

Template.EditHunter.rendered = function() {
    $('#editHunterForm')
        .form({
            level: {
                identifier : 'level',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter a Blood Level'
                    },
                    {
                        type   : 'integer[4..544]',
                        prompt : 'Blood Level must be in the range 4 to 544'
                    }
                ]
            },
            covenant: {
                identifier : 'covenant',
                rules: [
                ]
            },
        })
    ;
};

Template.MyHunterCard.helpers({

    covenantSlug: function() {
        return s.slugify(this.covenant);
    },

    covenantColour: function() {
        var colour;
        switch (this.covenant) {
            case 'Cainhurst Vilebloods':
                colour = 'red';
                break;
            case 'Executioners':
                colour = 'purple';
                break;
            case 'Hunter of Hunters':
                colour = 'yellow';
                break;
            default:
                colour = 'green';
                break;
        }
        return colour;
    }

});
