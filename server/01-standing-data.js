/**
 * Reset the, essentially fixed, standing data for the application.
 *
 * This is the data that can be safely reset each time the application is deployed.
 */
Meteor.startup(function() {

    var userMark = Meteor.users.findOne({'username': 'mark'});
    if (!userMark) {
        Accounts.createUser({username: 'mark', password: 'XXXXXXXXXX'});
        var markAccountId = Meteor.users.findOne({username: 'mark'})._id;
        Roles.addUsersToRoles(markAccountId, ['admin']);
    }

    Config.remove({});

    Config.insert({
        application       : 'Bloodmatch',
        allowSignin       : true,
        allowSignup       : true,
        allowDeleteAccount: true,
        allowUploadAvatar : false,
        enableEvents      : false
        // enableBellFilters: true,
        // enableBeckons    : true,
        // maxHunters       : 101
    });

    Covenants.remove({});
    Covenants.insert({name: 'Cainhurst Vilebloods'});
    Covenants.insert({name: 'Executioners'        });
    Covenants.insert({name: 'Hunter of Hunters'   });

    Locations.remove({});
    Locations.insert({name: '1st Floor Sick Room'        , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: false, order: 101});
    Locations.insert({name: 'Central Yharnam'            , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: true , order: 102});
    Locations.insert({name: 'Great Bridge'               , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: false, order: 103});
    Locations.insert({name: 'Tomb of Oedon'              , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: false, order: 104});
    Locations.insert({name: 'Cathedral Ward'             , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: true , order: 105});
    Locations.insert({name: 'Grand Cathedral'            , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: false, order: 106});
    Locations.insert({name: 'Upper Cathedral Ward'       , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: true , order: 107});
    Locations.insert({name: 'Lumenflower Gardens'        , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: false, order: 108});
    Locations.insert({name: 'Altar of Despair'           , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: false, order: 109});
    Locations.insert({name: 'Old Yharnam'                , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: true , order: 110});
    Locations.insert({name: 'Church of the Good Chalice' , type: 'Headstone'      , headstone: 'Yharnam'           , pvp: false, order: 111});
    Locations.insert({name: 'Graveyard of the Dark Beast', type: 'Headstone'      , headstone: 'Yharnam'           , pvp: false, order: 112});
    Locations.insert({name: 'Hemwick Charnel Lane'       , type: 'Headstone'      , headstone: 'Frontier'          , pvp: true , order: 201});
    Locations.insert({name: 'Witch\'s Abode'             , type: 'Headstone'      , headstone: 'Frontier'          , pvp: false, order: 202});
    Locations.insert({name: 'Forbidden Woods'            , type: 'Headstone'      , headstone: 'Frontier'          , pvp: true , order: 203});
    Locations.insert({name: 'Forbidden Grave'            , type: 'Headstone'      , headstone: 'Frontier'          , pvp: false, order: 204});
    Locations.insert({name: 'Byrgenwerth'                , type: 'Headstone'      , headstone: 'Frontier'          , pvp: true , order: 205});
    Locations.insert({name: 'Moonside Lake'              , type: 'Headstone'      , headstone: 'Frontier'          , pvp: false, order: 206});
    Locations.insert({name: 'Yahar\'gul, Unseen Village' , type: 'Headstone'      , headstone: 'Unseen'            , pvp: true , order: 301});
    Locations.insert({name: 'Yahar\'gul Chapel'          , type: 'Headstone'      , headstone: 'Unseen'            , pvp: false, order: 302});
    Locations.insert({name: 'Advent Plaza'               , type: 'Headstone'      , headstone: 'Unseen'            , pvp: false, order: 303});
    Locations.insert({name: 'Hypogean Gaol'              , type: 'Headstone'      , headstone: 'Unseen'            , pvp: false, order: 304});
    Locations.insert({name: 'Forsaken Castle Cainhurst'  , type: 'Headstone'      , headstone: 'Unseen'            , pvp: true , order: 305});
    Locations.insert({name: 'Logarius\' Seat'            , type: 'Headstone'      , headstone: 'Unseen'            , pvp: false, order: 306});
    Locations.insert({name: 'Vileblood Queen\'s Chamber' , type: 'Headstone'      , headstone: 'Unseen'            , pvp: false, order: 307});
    Locations.insert({name: 'Abandoned Old Workshop'     , type: 'Headstone'      , headstone: 'Unseen'            , pvp: false, order: 308});
    Locations.insert({name: 'Lecture Building'           , type: 'Headstone'      , headstone: 'Nightmare'         , pvp: false, order: 401});
    Locations.insert({name: 'Lecture Building 2nd Floor' , type: 'Headstone'      , headstone: 'Nightmare'         , pvp: false, order: 402});
    Locations.insert({name: 'Nightmare Frontier'         , type: 'Headstone'      , headstone: 'Nightmare'         , pvp: true , order: 403});
    Locations.insert({name: 'Amygdala\'s Chamber'        , type: 'Headstone'      , headstone: 'Nightmare'         , pvp: false, order: 404});
    Locations.insert({name: 'Nightmare of Mensis'        , type: 'Headstone'      , headstone: 'Nightmare'         , pvp: true , order: 405});
    Locations.insert({name: 'Mergo\'s Loft Base'         , type: 'Headstone'      , headstone: 'Nightmare'         , pvp: true , order: 406});
    Locations.insert({name: 'Mergo\'s Loft Middle'       , type: 'Headstone'      , headstone: 'Nightmare'         , pvp: true , order: 407});
    Locations.insert({name: 'Wet Nurse\'s Lunarium'      , type: 'Headstone'      , headstone: 'Nightmare'         , pvp: false, order: 408});
    Locations.insert({name: 'Workshop'                   , type: 'Hunter\'s Dream'                                 , pvp: true , order: 501});
    Locations.insert({name: 'Pthumeru Labyrinth'         , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 1, pvp: false, order: 601});
    Locations.insert({name: 'Pthumeru Labyrinth'         , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 2, pvp: false, order: 602});
    Locations.insert({name: 'Pthumeru Labyrinth'         , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 3, pvp: false, order: 603});
    Locations.insert({name: 'Central Pthumeru'           , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 1, pvp: false, order: 611});
    Locations.insert({name: 'Central Pthumeru'           , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 2, pvp: false, order: 612});
    Locations.insert({name: 'Central Pthumeru'           , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 3, pvp: false, order: 613});
    Locations.insert({name: 'Lower Pthumeru'             , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 1, pvp: false, order: 621});
    Locations.insert({name: 'Lower Pthumeru'             , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 2, pvp: false, order: 622});
    Locations.insert({name: 'Lower Pthumeru'             , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 3, pvp: false, order: 623});
    Locations.insert({name: 'Lower Pthumeru'             , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 4, pvp: false, order: 624});
    Locations.insert({name: 'Sinister Lower Pthumeru'    , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 1, pvp: true , order: 631});
    Locations.insert({name: 'Sinister Lower Pthumeru'    , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 2, pvp: true , order: 632});
    Locations.insert({name: 'Sinister Lower Pthumeru'    , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 3, pvp: true , order: 633});
    Locations.insert({name: 'Defiled Pthumeru'           , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 1, pvp: false, order: 641});
    Locations.insert({name: 'Defiled Pthumeru'           , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 2, pvp: false, order: 642});
    Locations.insert({name: 'Defiled Pthumeru'           , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 3, pvp: false, order: 643});
    Locations.insert({name: 'Great Pthumeru Ihyll'       , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 1, pvp: false, order: 651});
    Locations.insert({name: 'Great Pthumeru Ihyll'       , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 2, pvp: false, order: 652});
    Locations.insert({name: 'Great Pthumeru Ihyll'       , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 3, pvp: false, order: 653});
    Locations.insert({name: 'Sinister Pthumeru Ihyll'    , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 1, pvp: true , order: 661});
    Locations.insert({name: 'Sinister Pthumeru Ihyll'    , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 2, pvp: true , order: 662});
    Locations.insert({name: 'Sinister Pthumeru Ihyll'    , type: 'Chalice'        , chalice: 'Pthumeru'  , layer: 3, pvp: true , order: 663});
    Locations.insert({name: 'Hintertomb'                 , type: 'Chalice'        , chalice: 'Hintertomb', layer: 1, pvp: false, order: 671});
    Locations.insert({name: 'Hintertomb'                 , type: 'Chalice'        , chalice: 'Hintertomb', layer: 2, pvp: false, order: 672});
    Locations.insert({name: 'Hintertomb'                 , type: 'Chalice'        , chalice: 'Hintertomb', layer: 3, pvp: false, order: 673});
    Locations.insert({name: 'Lower Hintertomb'           , type: 'Chalice'        , chalice: 'Hintertomb', layer: 1, pvp: false, order: 681});
    Locations.insert({name: 'Lower Hintertomb'           , type: 'Chalice'        , chalice: 'Hintertomb', layer: 2, pvp: false, order: 682});
    Locations.insert({name: 'Lower Hintertomb'           , type: 'Chalice'        , chalice: 'Hintertomb', layer: 3, pvp: false, order: 683});
    Locations.insert({name: 'Sinister Hintertomb'        , type: 'Chalice'        , chalice: 'Hintertomb', layer: 1, pvp: true , order: 691});
    Locations.insert({name: 'Sinister Hintertomb'        , type: 'Chalice'        , chalice: 'Hintertomb', layer: 2, pvp: true , order: 692});
    Locations.insert({name: 'Sinister Hintertomb'        , type: 'Chalice'        , chalice: 'Hintertomb', layer: 3, pvp: true , order: 693});
    Locations.insert({name: 'Ailing Loran'               , type: 'Chalice'        , chalice: 'Loran'     , layer: 1, pvp: false, order: 701});
    Locations.insert({name: 'Ailing Loran'               , type: 'Chalice'        , chalice: 'Loran'     , layer: 2, pvp: false, order: 702});
    Locations.insert({name: 'Ailing Loran'               , type: 'Chalice'        , chalice: 'Loran'     , layer: 3, pvp: false, order: 703});
    Locations.insert({name: 'Lower Ailing Loran'         , type: 'Chalice'        , chalice: 'Loran'     , layer: 1, pvp: false, order: 711});
    Locations.insert({name: 'Lower Ailing Loran'         , type: 'Chalice'        , chalice: 'Loran'     , layer: 2, pvp: false, order: 712});
    Locations.insert({name: 'Lower Ailing Loran'         , type: 'Chalice'        , chalice: 'Loran'     , layer: 3, pvp: false, order: 713});
    Locations.insert({name: 'Sinister Lower Loran'       , type: 'Chalice'        , chalice: 'Loran'     , layer: 1, pvp: true , order: 721});
    Locations.insert({name: 'Sinister Lower Loran'       , type: 'Chalice'        , chalice: 'Loran'     , layer: 2, pvp: true , order: 722});
    Locations.insert({name: 'Sinister Lower Loran'       , type: 'Chalice'        , chalice: 'Loran'     , layer: 3, pvp: true , order: 723});
    Locations.insert({name: 'Great Isz'                  , type: 'Chalice'        , chalice: 'Isz'       , layer: 1, pvp: false, order: 731});
    Locations.insert({name: 'Great Isz'                  , type: 'Chalice'        , chalice: 'Isz'       , layer: 2, pvp: false, order: 732});
    Locations.insert({name: 'Great Isz'                  , type: 'Chalice'        , chalice: 'Isz'       , layer: 3, pvp: false, order: 733});
    Locations.insert({name: 'Sinister Isz'               , type: 'Chalice'        , chalice: 'Isz'       , layer: 1, pvp: true , order: 741});
    Locations.insert({name: 'Sinister Isz'               , type: 'Chalice'        , chalice: 'Isz'       , layer: 2, pvp: true , order: 742});
    Locations.insert({name: 'Sinister Isz'               , type: 'Chalice'        , chalice: 'Isz'       , layer: 3, pvp: true , order: 743});

    Locations.find({}).forEach(function(location) {
        Locations.update({_id: location._id}, {$set: {slug: s.slugify(location.name)}});
    });

    var addGlyph = function(dungeon, name, glyph) {
        Glyphs.insert({name: name, glyph: glyph});
        var update = {
            name : name,
            glyph: glyph
        };
        Locations.update({name: dungeon}, {$push: {glyphs: update}}, {multi: true});
    };

    addGlyph('Defiled Pthumeru', 'Fextralife Community', 'b4bi2s3n');
    addGlyph('Great Pthumeru Ihyll', 'Fextralife Community', 'egn5rrdj');

});
