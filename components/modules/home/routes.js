Router.route('/home', {
    name: 'Home',
    waitOn: function() {
        return [
            Meteor.subscribe('myHunters'      ),
            Meteor.subscribe('myBeckoningBell')
        ];
    },
    data: function() {
        return {
            myHunters      : Hunters.find({}),
            myHunter       : Hunters.findOne({active: true}),
            myBeckoningBell: BeckoningBells.findOne({})
        }
    }
});
