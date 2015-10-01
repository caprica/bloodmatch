Template.BeckoningBell.helpers({

    anyInRangeHunters: function() {
        return Template.currentData().hunters.count() > 0;
    }

});

Template.ResonantBell.onCreated(function() {

    var self = this;

    /**
     * Reactive filters object.
     *
     * This is shared with the template helpers.
     */
    self.filters = BeckoningBellFilters;

    /**
     * Reset all of the filters to their initial unset values.
     */
    self.resetFilters = function() {
        this.$('.ui.dropdown').eq(0).dropdown('set selected', '');
        self.filters.setType(null);
    };

    /**
     * Helper method to set a new filter value.
     *
     * @param type
     * @param value
     */
    var setFilter = function(type, value) {
        switch (type) {
            case 'type':
                self.filters.setType(value);
                break;
            case 'headstone':
                self.filters.setHeadstone(value);
                self.$('.ui.dropdown[data-type="lamp"]').dropdown('set selected', '');
                break;
            case 'lamp':
                self.filters.setLamp(value);
                break;
            case 'chalice':
                self.filters.setChalice(value);
                self.$('.ui.dropdown[data-type="dungeon"]').dropdown('set selected', '');
                break;
            case 'dungeon':
                self.filters.setDungeon(value);
                break;
        }
    };

    /**
     * Register a 'created' callback so that each time a FilterMenu is created, a listener for menu dropdown change events can be
     * added - this is how the reactive 'filters' object (owned by this ResonantBell template) is updated.
     */
    Template.FilterMenu.onCreated(function() {
        this.onChanged = function(value, text, $selectedItem) {
            setFilter($selectedItem.closest('.ui.dropdown').data('type'), value);
        };
    });

});

Template.ResonantBell.helpers({

    types: function() {
        return LocationUtils.types(Template.currentData().locations);
    },

    headstones: function() {
        var type = Template.instance().filters.getType();
        if (type === 'Headstone') {
            return LocationUtils.headstones(Template.currentData().locations);
        }
    },

    headstone: function() {
        var headstone = Template.instance().filters.getHeadstone();
        if (headstone) {
            return LocationUtils.headstone(Template.currentData().locations, headstone);
        }
    },

    chalices: function() {
        var type = Template.instance().filters.getType();
        if (type === 'Chalice') {
            return LocationUtils.chalices(Template.currentData().locations);
        }
    },

    chalice: function() {
        var chalice = Template.instance().filters.getChalice();
        if (chalice) {
            return LocationUtils.chalice(Template.currentData().locations, chalice);
        }
    },

    // FIXME ideally don't use this
    anyBells: function() {
        return Template.currentData().bells.count() > 0;
    }

});

Template.FilterMenu.onRendered(function() {

    var self = this;

    /**
     * Register the dropdown behaviours.
     *
     * This also adds a custom event callback for handling dropdown item selection changes - this change is propagated to the
     * 'onChanged' callback provided by the parent template.
     */
    this.$('.ui.dropdown')
        .dropdown({
            onChange: function(value, text, $selectedItem) {
                self.onChanged(value, text, $selectedItem);
            }
        })
    ;

});

Template.BellCard.helpers({

    pinged: function() {
        var bell = this;
        return _.find(bell.pings, function(ping) {
            return ping.userId === Meteor.userId();
        });
    },

    pingCount: function() {
        var bell = this;
        var pingCount = bell.pings ? bell.pings.length : 0;
        return pingCount + ' chime' + (pingCount !== 1 ? 's' : '');
    }

});

Template.MyBellCard.helpers({

    pingCount: function() {
        var pingCount = this.pings ? this.pings.length : 0;
        return pingCount + ' chime' + (pingCount !== 1 ? 's' : '');
    }

});

Template.HunterCard.helpers({

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
