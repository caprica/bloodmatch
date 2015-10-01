Journal     .remove({});

Messages    .remove({});
Creatures   .remove({});
Humans      .remove({});
TacticsA    .remove({});
TacticsB    .remove({});
PlacesThings.remove({});
Concepts    .remove({});
Conjunctions.remove({});

Messages.insert({value: 'fear %s'                          , param: true });
Messages.insert({value: 'remember %s'                      , param: true });
Messages.insert({value: 'time for %s'                      , param: true });
Messages.insert({value: 'it\'s the scourge of %s'          , param: true });
Messages.insert({value: 'reeks of %s'                      , param: true });
Messages.insert({value: '%s is effective'                  , param: true });
Messages.insert({value: 'beware of %s'                     , param: true });
Messages.insert({value: 'treat %s with care'               , param: true });
Messages.insert({value: 'it\'s all thanks to %s'           , param: true });
Messages.insert({value: 'despicable %s'                    , param: true });
Messages.insert({value: 'woeful %s'                        , param: true });
Messages.insert({value: 'wondrous %s'                      , param: true });
Messages.insert({value: 'nothing but %s here'              , param: true });
Messages.insert({value: '%s waits ahead'                   , param: true });
Messages.insert({value: 'you must accept %s'               , param: true });
Messages.insert({value: 'have mercy, %s'                   , param: true });
Messages.insert({value: 'no mercy for %s'                  , param: true });
Messages.insert({value: 'have audience with %s'            , param: true });
Messages.insert({value: 'reminiscent of %s'                , param: true });
Messages.insert({value: 'oh, %s!'                          , param: true });
Messages.insert({value: 'you\'ve come to the right place'  , param: false});
Messages.insert({value: 'bless us with blood'              , param: false});
Messages.insert({value: 'may the good blood guide your way', param: false});
Messages.insert({value: 'fear your blindness'              , param: false});
Messages.insert({value: 'the sky and the cosmos are one'   , param: false});
Messages.insert({value: 'let us cleanse these foul streets', param: false});
Messages.insert({value: 'you\'re in the know, right?'      , param: false});
Messages.insert({value: 'oh, i can\'t wait... hee hee...'  , param: false});
Messages.insert({value: 'take a step forward'              , param: false});
Messages.insert({value: 'turn back'                        , param: false});
Messages.insert({value: 'those with faith will be spared'  , param: false});
Messages.insert({value: 'don\'t be fooled'                 , param: false});
Messages.insert({value: 'pitiful, really'                  , param: false});
Messages.insert({value: 'behind you'                       , param: false});
Messages.insert({value: 'don\'t you dare look at me!'      , param: false});
Messages.insert({value: 'sincerest thanks'                 , param: false});
Messages.insert({value: 'a hunter is never alone'          , param: false});
Messages.insert({value: 'please, carry on in my stead'     , param: false});
Messages.insert({value: 'run!'                             , param: false});
Messages.insert({value: 'don\'t give up'                   , param: false});

Creatures.insert({value: 'beast'            });
Creatures.insert({value: 'man-beast'        });
Creatures.insert({value: 'giant beasts'     });
Creatures.insert({value: 'abhorrent beast'  });
Creatures.insert({value: 'infected one'     });
Creatures.insert({value: 'foe'              });
Creatures.insert({value: 'strong foe'       });
Creatures.insert({value: 'giant foe'        });
Creatures.insert({value: 'terrible foe'     });
Creatures.insert({value: 'hound'            });
Creatures.insert({value: 'bird'             });
Creatures.insert({value: 'snake'            });
Creatures.insert({value: 'animal'           });
Creatures.insert({value: 'insect'           });
Creatures.insert({value: 'watcher'          });
Creatures.insert({value: 'shaman'           });
Creatures.insert({value: 'the dead'         });
Creatures.insert({value: 'foul spirit'      });
Creatures.insert({value: 'the lost'         });
Creatures.insert({value: 'malformed thing'  });
Creatures.insert({value: 'monster'          });
Creatures.insert({value: 'unknown thing'    });
Creatures.insert({value: 'slimy thing'      });
Creatures.insert({value: 'blobby thing'     });
Creatures.insert({value: 'kin of the cosmos'});
Creatures.insert({value: 'evil eye'         });
Creatures.insert({value: 'false god'        });
Creatures.insert({value: 'superior being'   });
Creatures.insert({value: 'messenger'        });
Creatures.insert({value: 'doll'             });

Humans.insert({value: 'man'                });
Humans.insert({value: 'woman'              });
Humans.insert({value: 'the elderly'        });
Humans.insert({value: 'ailing one'         });
Humans.insert({value: 'madman'             });
Humans.insert({value: 'keeper'             });
Humans.insert({value: 'mob'                });
Humans.insert({value: 'wheelchair'         });
Humans.insert({value: 'small gent'         });
Humans.insert({value: 'small lady'         });
Humans.insert({value: 'titan'              });
Humans.insert({value: 'amazon'             });
Humans.insert({value: 'fatty'              });
Humans.insert({value: 'dullard'            });
Humans.insert({value: 'liar'               });
Humans.insert({value: 'scoundrel'          });
Humans.insert({value: 'child'              });
Humans.insert({value: 'friend'             });
Humans.insert({value: 'darling'            });
Humans.insert({value: 'master'             });
Humans.insert({value: 'infant'             });
Humans.insert({value: 'queen'              });
Humans.insert({value: 'yourself'           });
Humans.insert({value: 'hunter'             });
Humans.insert({value: 'co-operator'        });
Humans.insert({value: 'adversary'          });
Humans.insert({value: 'Executioner'        });
Humans.insert({value: 'Vileblood'          });
Humans.insert({value: 'Hunter of hunters'  });
Humans.insert({value: 'blood-addled Hunder'});

TacticsA.insert({value: 'physical attack'     });
TacticsA.insert({value: 'blunt attack'        });
TacticsA.insert({value: 'thrust attack'       });
TacticsA.insert({value: 'blood attack'        });
TacticsA.insert({value: 'arcane'              });
TacticsA.insert({value: 'fire'                });
TacticsA.insert({value: 'bolt'                });
TacticsA.insert({value: 'quick weapon'        });
TacticsA.insert({value: 'long weapon'         });
TacticsA.insert({value: 'poison'              });
TacticsA.insert({value: 'frenzy'              });
TacticsA.insert({value: 'exploiting species'  });
TacticsA.insert({value: 'beast transformation'});
TacticsA.insert({value: 'firearm'             });
TacticsA.insert({value: 'blunderbuss'         });
TacticsA.insert({value: 'torch'               });
TacticsA.insert({value: 'shield'              });
TacticsA.insert({value: 'rally'               });
TacticsA.insert({value: 'charge attack'       });
TacticsA.insert({value: 'visceral attack'     });
TacticsA.insert({value: 'rolling'             });
TacticsA.insert({value: 'quickstep'           });
TacticsA.insert({value: 'blood vial'          });
TacticsA.insert({value: 'quicksilver bullet'  });
TacticsA.insert({value: 'medicine'            });
TacticsA.insert({value: 'special medicine'    });
TacticsA.insert({value: 'projectile'          });
TacticsA.insert({value: 'oil'                 });
TacticsA.insert({value: 'coarse paper'        });
TacticsA.insert({value: 'special item'        });

TacticsB.insert({value: 'ambush'                });
TacticsB.insert({value: 'pincer attack'         });
TacticsB.insert({value: 'sneak attack'          });
TacticsB.insert({value: 'patrol'                });
TacticsB.insert({value: 'reinforcements caller' });
TacticsB.insert({value: '"focus on attacks"'    });
TacticsB.insert({value: '"focus on evasion"'    });
TacticsB.insert({value: '"focus on healing"'    });
TacticsB.insert({value: '"close-range fight"'   });
TacticsB.insert({value: '"long-range fight"'    });
TacticsB.insert({value: '"hit-and-run"'         });
TacticsB.insert({value: 'sniping'               });
TacticsB.insert({value: 'counter'               });
TacticsB.insert({value: '"attack from behind"'  });
TacticsB.insert({value: '"open when attacking"' });
TacticsB.insert({value: '"strike and be struck"'});
TacticsB.insert({value: '"kill in order"'       });
TacticsB.insert({value: '"kill first"'          });
TacticsB.insert({value: 'charging forth'        });
TacticsB.insert({value: 'lure'                  });
TacticsB.insert({value: 'stealth'               });
TacticsB.insert({value: 'ignoring'              });
TacticsB.insert({value: 'retreat'               });
TacticsB.insert({value: 'use of terrain'        });
TacticsB.insert({value: 'tight spot'            });
TacticsB.insert({value: 'high spot'             });
TacticsB.insert({value: 'fall'                  });
TacticsB.insert({value: 'alertness'             });
TacticsB.insert({value: 'unbreakable will'      });
TacticsB.insert({value: 'leaden constitution'   });

PlacesThings.insert({value: 'Blood Echoes'   });
PlacesThings.insert({value: 'Insight'        });
PlacesThings.insert({value: 'blood stone'    });
PlacesThings.insert({value: 'blood gem'      });
PlacesThings.insert({value: 'rune'           });
PlacesThings.insert({value: 'ritual material'});
PlacesThings.insert({value: 'key'            });
PlacesThings.insert({value: 'item'           });
PlacesThings.insert({value: 'special item'   });
PlacesThings.insert({value: 'paleblood'      });
PlacesThings.insert({value: 'message'        });
PlacesThings.insert({value: 'rating'         });
PlacesThings.insert({value: 'dead body'      });
PlacesThings.insert({value: 'treasure'       });
PlacesThings.insert({value: 'lever'          });
PlacesThings.insert({value: 'statue'         });
PlacesThings.insert({value: 'light'          });
PlacesThings.insert({value: 'bonfire'        });
PlacesThings.insert({value: 'footing'        });
PlacesThings.insert({value: 'trap'           });
PlacesThings.insert({value: 'Yharnam'        });
PlacesThings.insert({value: 'Clinic'         });
PlacesThings.insert({value: 'Grand Cathedral'});
PlacesThings.insert({value: 'church'         });
PlacesThings.insert({value: 'safe place'     });
PlacesThings.insert({value: 'old labyrinth'  });
PlacesThings.insert({value: 'Workshop'       });
PlacesThings.insert({value: 'Healing Church' });
PlacesThings.insert({value: 'hidden path'    });
PlacesThings.insert({value: 'Unseen Village' });

Concepts.insert({value: 'hunting'        });
Concepts.insert({value: 'night'          });
Concepts.insert({value: 'dawn'           });
Concepts.insert({value: 'blood'          });
Concepts.insert({value: 'warm blood'     });
Concepts.insert({value: 'scourge'        });
Concepts.insert({value: 'life'           });
Concepts.insert({value: 'nightmare'      });
Concepts.insert({value: 'Moon'           });
Concepts.insert({value: 'cosmos'         });
Concepts.insert({value: 'eye'            });
Concepts.insert({value: 'Oedon'          });
Concepts.insert({value: 'communion'      });
Concepts.insert({value: 'donation'       });
Concepts.insert({value: 'ritual'         });
Concepts.insert({value: 'contact'        });
Concepts.insert({value: 'encounter'      });
Concepts.insert({value: 'evolution'      });
Concepts.insert({value: 'oath'           });
Concepts.insert({value: 'corruption'     });
Concepts.insert({value: 'execution'      });
Concepts.insert({value: 'cleansing'      });
Concepts.insert({value: 'prayer'         });
Concepts.insert({value: 'curse'          });
Concepts.insert({value: 'defilement'     });
Concepts.insert({value: 'sinister'       });
Concepts.insert({value: 'courage'        });
Concepts.insert({value: 'respect'        });
Concepts.insert({value: 'inquisitiveness'});
Concepts.insert({value: 'pity'           });
Concepts.insert({value: 'grief'          });
Concepts.insert({value: 'joy'            });
Concepts.insert({value: 'wrath'          });
Concepts.insert({value: 'sanity'         });
Concepts.insert({value: 'madness'        });
Concepts.insert({value: 'fervour'        });
Concepts.insert({value: 'seduction'      });
Concepts.insert({value: 'feasting'       });
Concepts.insert({value: 'tastiness'      });
Concepts.insert({value: 'tonsil'         });
Concepts.insert({value: 'metamorphosis'  });
Concepts.insert({value: 'common sense'   });
Concepts.insert({value: 'darkness'       });
Concepts.insert({value: 'secret'         });
Concepts.insert({value: 'singing'        });
Concepts.insert({value: 'sobbing'        });
Concepts.insert({value: 'howling'        });
Concepts.insert({value: '"all is well"'  });
Concepts.insert({value: 'the unseen'     });
Concepts.insert({value: 'all'            });

Conjunctions.insert({value: ' and '       });
Conjunctions.insert({value: ' but '       });
Conjunctions.insert({value: ' or '        });
Conjunctions.insert({value: ' therefore ' });
Conjunctions.insert({value: ' eventually '});
Conjunctions.insert({value: ', '          });

// FIXME rename to Notebook?

// This structure OK, or should it be a "class" with .prototype.getMessage ??? and this.messages = ???
// this can't be right, exposes too much internal state
JournalX = function() {

    var messages     = Messages    .find({}).fetch();
    var creatures    = Creatures   .find({}).fetch();
    var humans       = Humans      .find({}).fetch();
    var tacticsA     = TacticsA    .find({}).fetch();
    var tacticsB     = TacticsB    .find({}).fetch();
    var placesThings = PlacesThings.find({}).fetch();
    var concepts     = Concepts    .find({}).fetch();
    var conjunctions = Conjunctions.find({}).fetch();

    var random = function(count) {
        return Math.floor(Math.random() * count);
    };

    var subject = function() {
        var arr;
        switch (random(6)) {
            case 0:
                arr = creatures;
                break;
            case 1:
                arr = humans;
                break;
            case 2:
                arr = tacticsA;
                break;
            case 3:
                arr = tacticsB;
                break;
            case 4:
                arr = placesThings;
                break;
            case 5:
                arr = concepts;
                break;
        }
        return arr[random(arr.length)].value;
    };

    var conjunction = function() {
        return conjunctions[random(conjunctions.length)].value;
    };

    var clause = function() {
        var message = messages[random(messages.length)];
        if (message.param) {
            return s.sprintf(message.value, subject());
        }
        else {
            return message.value;
        }
    };

    this.getMessage = function() {
        var result = clause();
        if (Math.random() >= 0.5) {
            result += conjunction() + clause();
        }
        return result;
    };

};
