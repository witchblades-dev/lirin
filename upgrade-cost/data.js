const CATS=['WEAPONS','ARMOURS','HELMETS','SHIELDS','EARRINGS','BRACELET','NECKLACE','SHOES','BELTS'];
const MAT={onyx:'Onyx Crystal',ash:"Demon's Ashes",claw:'Dragon Claw',pamphlet:'Fencing Pamphlet',mithril:'Mithril',dye:"Azrael's Dye",
  pearl:'Shimmering Multicolor Pearl',scales:'Dragon Scales',wing:"Blue Dragon's Wing",thread:'Thin Thread',yarn:'Gray Yarn',
  pattern:'Sewing Pattern',wubba:'Wubba Insignia',flame:'Flame Stone',ice:'Ice Flame Stone',
  ruby:'Ruby Crystal',fur:'Monkey Fur',legs:'Spider Legs',white:'White Pearl',symbol:"Beast's Symbol",blue:'Blue Pearl',
  blood:'Blood-Red Pearl',aquatic:'Aquatic Crystal',amethyst:'Amethyst Crystal',clam:'Clam', talismandeath:'Talisman of Death',
  emerald:'Emerald Crystal',titanium:'Titanium Dioxide',bluedye:'Blue Dye',reddragonhorn:'Red Dragon Horn',cords:'Sturdy Cords',
  agate:'Agate',whitedye:'White Dye',dragonwings:'Dragon Wings',armourdesign:'Armour Design',reddragonscale:'Red Dragon Scale',
  golddye:'Metallic Gold Dye',moonstone:'Moonstone',reddye:'Red Dye',garnet:'Garnet Crystal',gaya:'Gaya',
  soulsbelt:'Souls Belt',shadowbelt:'Shadow Belt',onyxboots:'Onyx Boots',warmasterhelmet:'War Master Helmet',devilshornarmour:"Devil's Horn Armour",
  toughstraps:'Tough Straps',linenbelt:'Linen Belt',multicolorpearl:'Multicolored Pearl',firebirdshoes:'Fire Bird Shoes',
  soulcrystalnecklace:'Soul Crystal Necklace',heavenstearnecklace:"Heaven's Tear Necklace",soulcrystalbracelet:'Soul Crystal Bracelet',
  heavenstearbracelet:"Heaven's Tear Bracelet",soulcrystalearrings:'Soul Crystal Earrings', amethystearrings:'Amethyst Earrings',
  falconshield:'Falcon Shield',blackroundshield:'Black Round Shield',fearmask:'Fear Mask',ghostmasksallet:'Ghost Mask Sallet',
  bluesteelarmour:'Blue Steel Armour',blacksteelarmour:'Black Steel Armour',battlesword:'Battle Sword',tritonsword:'Triton Sword',
  phoenixshoes:'Phoenix Shoes'};
const ITEMS=[
  {c:0,n:'Battle Sword',fails:{},steps:[
    [100e6,'talismandeath',1], // Craft
    [150e3],                                  // +1
    [180e3],                                  // +2
    [225e3],                                  // +3
    [270e3],                                  // +4
    [360e3,'amethyst',2,'clam',3],            // +5
    [720e3,'amethyst',2,'clam',4],            // +6
    [1.5e6,'ruby',2,'white',1],               // +7
    [3e6,'ruby',2,'blue',1],                  // +8
    [6e6,'ruby',2,'blood',1,'talismandeath',1]     // +9
  ]
},
  {c:0,n:'Soul Stealing Blade',fails:{7:1,8:2,9:2},steps:[
    [100e6,'talismandeath',1,'dye',1], // Craft
    [500e3],                                        // +1
    [500e3],                                        // +2
    [500e3,'amethyst',1],                           // +3
    [500e3,'amethyst',1],                           // +4
    [1e6,'amethyst',2,'clam',3],                    // +5
    [2e6,'amethyst',2,'clam',6],                    // +6
    [4e6,'ruby',2,'white',2,'fur',1,'legs',1],      // +7
    [5e6,'ruby',3,'blue',2,'fur',2,'legs',2],       // +8
    [7.5e6,'ruby',4,'blood',2,'symbol',1,'talismandeath',1] // +9
  ]
},
  {c:0,n:'Poison Sword',fails:{7:1,8:2,9:2},steps:[
    [100e6,'talismandeath',1], // Craft
    [500e3],                                               // +1
    [500e3],                                               // +2
    [500e3,'amethyst',1],                                  // +3
    [500e3,'amethyst',1],                                  // +4
    [1e6,'amethyst',2,'clam',3],                           // +5
    [2e6,'amethyst',2,'clam',6],                           // +6
    [4e6,'ruby',2,'white',2,'fur',1,'legs',1],             // +7
    [5e6,'ruby',3,'blue',2,'fur',2,'legs',2],              // +8
    [7.5e6,'ruby',4,'blood',2,'symbol',1,'talismandeath',1] // +9
  ]
},
  {c:0,n:'Triton Sword',fails:{5:1,6:1,7:1,8:1,9:2},steps:[
    [100e6,'battlesword',1,'claw',5,'scales',5,'wing',2,'pamphlet',5,'ash',5,'dye',2,'multicolorpearl',5,'ruby',50,'gaya',100], // Craft
    [10e6,'ruby',10,'fur',2,'legs',2],
    [10e6,'ruby',10,'fur',3,'legs',3],
    [10e6,'ruby',10,'symbol',2,'white',2],
    [10e6,'ruby',10,'ash',3,'blue',2],
    [15e6,'ruby',10,'ash',4,'blood',2],
    [15e6,'ruby',10,'dye',2,'multicolorpearl',1],
    [20e6,'aquatic',5,'claw',1,'scales',1,'multicolorpearl',2],
    [20e6,'aquatic',5,'claw',2,'scales',2,'multicolorpearl',2],
    [25e6,'aquatic',5,'wing',2,'pamphlet',1,'multicolorpearl',2]
  ]
},
  {c:0,n:'Rune Sword',fails:{5:1,6:1,7:1,8:1,9:2},steps:[
    [250e6,'tritonsword',1,'thread',5,'yarn',2,'mithril',10,'onyx',50,'ice',5,'flame',5,'pattern',2,'wubba',2,'pearl',3,'gaya',150], // Craft
    [25e6,'onyx',15,'claw',3,'scales',3,'pearl',1],           // +1
    [25e6,'onyx',15,'wing',1,'pamphlet',1,'pearl',1],         // +2
    [25e6,'onyx',15,'mithril',3,'yarn',2,'pearl',1],          // +3
    [25e6,'onyx',25,'mithril',3,'thread',2,'pearl',2],        // +4
    [30e6,'onyx',25,'mithril',3,'thread',4,'pearl',2],        // +5
    [30e6,'onyx',25,'mithril',3,'wubba',1,'pattern',1],       // +6
    [40e6,'onyx',30,'mithril',5,'flame',1,'ice',1],           // +7
    [40e6,'onyx',30,'mithril',5,'flame',1,'ice',1],           // +8
    [50e6,'onyx',30,'mithril',5,'flame',2,'ice',2]            // +9
  ]
},
  {c:1,n:'Black Steel Armour',fails:{},steps:[
    [100e6,'talismandeath',1], // Craft
    [150e3], // +1
    [180e3], // +2
    [225e3], // +3
    [270e3], // +4
    [360e3,'amethyst',2,'clam',3], // +5
    [720e3,'amethyst',2,'clam',4], // +6
    [1.5e6,'ruby',2,'white',1], // +7
    [3e6,'ruby',3,'blue',1], // +8
    [6e6,'ruby',4,'blood',1,'talismandeath',1] // +9
  ]},
  {c:1,n:'Blue Steel Armour',fails:{5:1,6:1,7:1,8:1,9:2},steps:[
    [100e6,'blacksteelarmour',1,'claw',5,'scales',5,'wing',2,'multicolorpearl',5,'ash',5,'dye',2,'ruby',50,'gaya',100], // Craft
    [10e6,'ruby',10,'fur',2,'legs',2], // +1
    [10e6,'ruby',10,'fur',3,'legs',3], // +2
    [10e6,'ruby',10,'symbol',2,'white',2], // +3
    [10e6,'ruby',10,'ash',3,'blue',2], // +4
    [15e6,'ruby',10,'ash',4,'blood',2], // +5
    [15e6,'ruby',10,'dye',2,'multicolorpearl',1], // +6
    [20e6,'aquatic',5,'claw',1,'scales',1,'multicolorpearl',2], // +7
    [20e6,'aquatic',5,'claw',2,'scales',2,'multicolorpearl',2], // +8
    [25e6,'aquatic',5,'wing',2,'pamphlet',1,'multicolorpearl',2] // +9
  ]},
  {c:1,n:"Devil's Horn Armour",fails:{5:1,6:2,7:3,8:3,9:5},steps:[
    [500e6,'bluesteelarmour',1,'thread',10,'yarn',3,'mithril',25,'onyx',100,'ice',10,'flame',10,'pattern',3,'wubba',3,'pearl',5,'gaya',250], // Craft
    [25e6,'onyx',15,'claw',4,'scales',4,'pearl',2], // +1
    [25e6,'onyx',15,'wing',2,'pamphlet',1,'pearl',2], // +2
    [25e6,'onyx',15,'mithril',5,'yarn',2,'pearl',2], // +3
    [25e6,'onyx',25,'mithril',5,'thread',3,'pearl',3], // +4
    [30e6,'onyx',25,'mithril',5,'thread',5,'pearl',3], // +5
    [30e6,'onyx',25,'mithril',5,'wubba',1,'pattern',2], // +6
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +7
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +8
    [50e6,'onyx',30,'mithril',7,'flame',3,'ice',3] // +9
  ]},
  {c:1,n:'Aurora Armour',fails:{5:3,6:3,7:4,8:5,9:6},steps:[
    [2.5e9,'devilshornarmour',1,'flame',15,'ice',15,'pattern',5,'titanium',5,'agate',5,'moonstone',5,'golddye',1,'garnet',100,'toughstraps',15,'gaya',250], // Craft
    [100e6,'cords',2,'titanium',2,'agate',2,'moonstone',2], // +1
    [100e6,'cords',3,'titanium',2,'agate',2,'moonstone',2], // +2
    [100e6,'cords',2,'titanium',2,'agate',2,'moonstone',2], // +3
    [150e6,'cords',3,'titanium',3,'agate',3,'whitedye',3], // +4
    [150e6,'cords',2,'titanium',2,'moonstone',2,'bluedye',2], // +5
    [150e6,'cords',3,'agate',2,'moonstone',2,'reddye',2], // +6
    [200e6,'armourdesign',1,'reddragonhorn',2,'reddragonscale',3,'golddye',2], // +7
    [200e6,'armourdesign',1,'dragonwings',3,'reddragonscale',3,'golddye',2], // +8
    [200e6,'armourdesign',1,'dragonwings',2,'reddragonhorn',3,'golddye',2] // +9
  ]},
  {c:1,n:'Magma Glow Armour',fails:{5:3,6:3,7:4,8:5,9:6},steps:[
    [2.5e9,'devilshornarmour',1,'flame',15,'ice',15,'pattern',5,'titanium',5,'agate',5,'moonstone',5,'golddye',1,'garnet',100,'toughstraps',15,'gaya',250], // Craft
    [100e6,'cords',2,'titanium',2,'agate',2,'moonstone',2], // +1
    [100e6,'cords',3,'titanium',2,'agate',2,'moonstone',2], // +2
    [100e6,'cords',2,'titanium',2,'agate',2,'moonstone',2], // +3
    [150e6,'cords',3,'titanium',3,'agate',3,'whitedye',3], // +4
    [150e6,'cords',2,'titanium',2,'moonstone',2,'bluedye',2], // +5
    [150e6,'cords',3,'agate',2,'moonstone',2,'reddye',2], // +6
    [200e6,'armourdesign',1,'reddragonhorn',2,'reddragonscale',3,'golddye',2], // +7
    [200e6,'armourdesign',1,'dragonwings',3,'reddragonscale',3,'golddye',2], // +8
    [200e6,'armourdesign',1,'dragonwings',2,'reddragonhorn',3,'golddye',2] // +9
  ]},
  {c:2,n:'Ghost Mask Sallet',fails:{},steps:[
    [5e6], // Craft
    [100e3],                              // +1
    [100e3],                              // +2
    [100e3],                              // +3
    [100e3],                              // +4
    [100e3,'emerald',1],                  // +5
    [200e3,'emerald',1],                  // +6
    [300e3,'amethyst',1],                 // +7
    [500e3,'amethyst',2,'clam',2],        // +8
    [1e6,'amethyst',3,'clam',3]           // +9
  ]},
  {c:2,n:'Fear Mask',fails:{7:1,8:1,9:2},steps:[
    [25e6,'ghostmasksallet',1,'fur',6,'legs',6,'symbol',2,'amethyst',50,'emerald',25,'white',2,'blue',2,'blood',2,'gaya',25], // Craft
    [250e3],                                       // +1
    [250e3],                                       // +2
    [250e3],                                       // +3
    [250e3],                                       // +4
    [1e6,'amethyst',2,'clam',1],                   // +5
    [1e6,'amethyst',2,'clam',2],                   // +6
    [2.5e6,'ruby',2,'white',1,'fur',1],            // +7
    [2.5e6,'ruby',3,'blue',1,'legs',1],            // +8
    [5e6,'ruby',4,'blood',1,'symbol',1]            // +9
  ]},
  {c:2,n:'War Master Helmet',fails:{5:2,6:2,7:3,8:4,9:5},steps:[
    [150e6,'fearmask',1,'aquatic',50,'ruby',150,'multicolorpearl',5,'pamphlet',2,'ash',6,'dye',3,'scales',5,'claw',5,'wing',2,'gaya',100], // Craft
    [25e6,'aquatic',5,'ash',3,'dye',2], // +1
    [25e6,'aquatic',5,'ash',4,'dye',2], // +2
    [25e6,'aquatic',5,'claw',4,'scales',4], // +3
    [25e6,'aquatic',5,'pamphlet',1,'wing',1], // +4
    [30e6,'onyx',25,'thread',6,'pearl',3], // +5
    [30e6,'onyx',25,'yarn',2,'pearl',3], // +6
    [40e6,'onyx',30,'mithril',7,'wubba',1,'pattern',1], // +7
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +8
    [50e6,'onyx',30,'mithril',7,'flame',3,'ice',3] // +9
  ]},
  {c:2,n:'Dragon Steel Helm',fails:{4:4,5:4,6:5,7:6,8:7,9:8},steps:[
    [5e9,'warmasterhelmet',1,'armourdesign',5,'reddragonscale',5,'reddragonhorn',5,'dragonwings',5,'golddye',3,'titanium',10,'agate',10,'moonstone',10,'garnet',250,'gaya',250], // Craft
    [100e6,'cords',4,'titanium',4,'reddragonhorn',3,'bluedye',4], // +1
    [100e6,'cords',4,'titanium',4,'reddragonhorn',3,'bluedye',4], // +2
    [100e6,'cords',4,'titanium',4,'reddragonhorn',3,'bluedye',4], // +3
    [150e6,'armourdesign',2,'agate',3,'dragonwings',2,'whitedye',3], // +4
    [150e6,'armourdesign',2,'agate',3,'dragonwings',2,'whitedye',3], // +5
    [150e6,'armourdesign',2,'agate',3,'dragonwings',2,'whitedye',3], // +6
    [200e6,'reddragonhorn',2,'dragonwings',2,'reddragonscale',2,'golddye',1], // +7
    [200e6,'reddragonhorn',2,'dragonwings',2,'reddragonscale',2,'golddye',1], // +8
    [200e6,'reddragonhorn',3,'dragonwings',3,'reddragonscale',3,'golddye',1] // +9
  ]},
  {c:3,n:'Black Round Shield',fails:{},steps:[
    [5e6], // Craft
    [100e3],                              // +1
    [100e3],                              // +2
    [100e3],                              // +3
    [100e3],                              // +4
    [100e3,'emerald',1],                  // +5
    [200e3,'emerald',1],                  // +6
    [300e3,'amethyst',1,'clam',2],        // +7
    [500e3,'amethyst',2,'clam',2],        // +8
    [1e6,'amethyst',3,'clam',3]           // +9
  ]},
  {c:3,n:'Falcon Shield',fails:{},steps:[
    [50e6,'blackroundshield',1,'fur',6,'legs',6,'symbol',2,'amethyst',50,'emerald',25,'white',3,'blue',3,'blood',3,'gaya',25], // Craft
    [100e3],                              // +1
    [200e3],                              // +2
    [250e3,'emerald',2],                  // +3
    [300e3,'emerald',3],                  // +4
    [400e3,'emerald',3,'clam',2],         // +5
    [500e3,'amethyst',2,'clam',2],        // +6
    [1e6,'amethyst',2,'clam',2],          // +7
    [3e6,'amethyst',3,'clam',3],          // +8
    [5e6,'amethyst',4,'clam',3]           // +9
  ]},
  {c:3,n:'Onyx Shield',fails:{5:2,6:2,7:3,8:4,9:5},steps:[
    [150e6,'falconshield',1,'aquatic',50,'ruby',150,'multicolorpearl',5,'pamphlet',2,'ash',6,'dye',3,'scales',5,'claw',5,'wing',2,'gaya',100], // Craft
    [25e6,'aquatic',5,'ash',3,'dye',2], // +1
    [25e6,'aquatic',5,'ash',4,'dye',2], // +2
    [25e6,'aquatic',5,'claw',4,'scales',4], // +3
    [25e6,'aquatic',5,'pamphlet',1,'wing',1], // +4
    [30e6,'onyx',25,'thread',6,'pearl',3], // +5
    [30e6,'onyx',25,'yarn',2,'pearl',3], // +6
    [40e6,'onyx',30,'mithril',7,'wubba',1,'pattern',1], // +7
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +8
    [50e6,'onyx',30,'mithril',7,'flame',3,'ice',3] // +9
  ]},
  {c:4,n:'Ebony Earrings',fails:{},steps:[
    [0,'emerald',3], // Craft
    [10e3],                      // +1
    [20e3],                      // +2
    [40e3],                      // +3
    [60e3],                      // +4
    [80e3],                      // +5
    [100e3],                     // +6
    [200e3,'emerald',1],         // +7
    [300e3,'emerald',1],         // +8
    [500e3,'emerald',2]          // +9
  ]},
  {c:4,n:'Amethyst Earrings',fails:{7:1,8:1,9:2},steps:[
    [5e6,'amethyst',10,'symbol',1], // Craft
    [250e3],                                  // +1
    [250e3],                                  // +2
    [250e3],                                  // +3
    [250e3],                                  // +4
    [1e6,'amethyst',2,'clam',1],              // +5
    [1e6,'amethyst',2,'clam',2],              // +6
    [2.5e6,'ruby',2,'white',1,'fur',1],       // +7
    [2.5e6,'ruby',2,'blue',1,'legs',1],       // +8
    [5e6,'ruby',4,'blood',1,'symbol',1]       // +9
  ]},
  {c:4,n:'Soul Crystal Earrings',fails:{5:1,6:1,7:2,8:2,9:3},steps:[
    [100e6,'amethystearrings',1,'ash',5,'dye',2,'multicolorpearl',5,'ruby',100,'fur',10,'legs',10,'symbol',3,'gaya',50], // Craft
    [10e6,'ruby',5,'fur',2,'legs',2], // +1
    [10e6,'ruby',10,'fur',3,'legs',3], // +2
    [10e6,'ruby',10,'symbol',2,'white',2], // +3
    [10e6,'ruby',10,'ash',3,'blue',2], // +4
    [15e6,'ruby',10,'ash',4,'blood',2], // +5
    [15e6,'ruby',10,'dye',2,'multicolorpearl',1], // +6
    [20e6,'aquatic',5,'claw',1,'scales',1,'multicolorpearl',2], // +7
    [20e6,'aquatic',5,'claw',2,'scales',2,'multicolorpearl',2], // +8
    [25e6,'aquatic',5,'wing',2,'pamphlet',1,'multicolorpearl',2] // +9
  ]},
  {c:4,n:'Onyx Earrings',fails:{5:2,6:2,7:3,8:4,9:5},steps:[
    [250e6,'soulcrystalearrings',1,'onyx',100,'ruby',100,'mithril',25,'wubba',2,'scales',6,'claw',6,'wing',2,'thread',10,'yarn',3,'gaya',250], // Craft
    [25e6,'onyx',15,'ash',3,'dye',2,'pearl',1],                // +1
    [25e6,'onyx',15,'claw',3,'scales',3,'pearl',1],            // +2
    [25e6,'onyx',15,'pamphlet',1,'wing',2,'pearl',2],          // +3
    [25e6,'onyx',25,'mithril',5,'thread',3,'pearl',2],        // +4
    [30e6,'onyx',25,'mithril',5,'thread',5,'pearl',3],        // +5
    [30e6,'onyx',25,'mithril',5,'yarn',2,'pearl',3],          // +6
    [40e6,'onyx',30,'mithril',7,'wubba',1,'pattern',1],       // +7
    [40e6,'onyx',30,'mithril',7,'flame',3,'ice',3],           // +8
    [50e6,'onyx',30,'mithril',7,'flame',4,'ice',4]            // +9
  ]},
  {c:5,n:"Heaven's Tear Bracelet",fails:{7:1,8:1,9:2},steps:[
    [5e6,'amethyst',10,'symbol',1], // Craft
    [250e3],                                  // +1
    [250e3],                                  // +2
    [250e3],                                  // +3
    [250e3],                                  // +4
    [1e6,'amethyst',2,'clam',1],              // +5
    [1e6,'amethyst',2,'clam',2],              // +6
    [2.5e6,'ruby',2,'white',1,'fur',1],       // +7
    [2.5e6,'ruby',2,'blue',1,'legs',1],       // +8
    [5e6,'ruby',4,'blood',1,'symbol',1]       // +9
]},
  {c:5,n:'Soul Crystal Bracelet',fails:{5:1,6:1,7:2,8:2,9:3},steps:[
    [100e6,'heavenstearbracelet',1,'ash',5,'dye',2,'multicolorpearl',5,'ruby',100,'fur',10,'legs',10,'symbol',3,'gaya',50], // Craft
    [10e6,'ruby',5,'fur',2,'legs',2], // +1
    [10e6,'ruby',10,'fur',3,'legs',3], // +2
    [10e6,'ruby',10,'symbol',2,'white',2], // +3
    [10e6,'ruby',10,'ash',3,'blue',2], // +4
    [15e6,'ruby',10,'ash',4,'blood',2], // +5
    [15e6,'ruby',10,'dye',2,'multicolorpearl',1], // +6
    [20e6,'aquatic',5,'claw',1,'scales',1,'multicolorpearl',2], // +7
    [20e6,'aquatic',5,'claw',2,'scales',2,'multicolorpearl',2], // +8
    [25e6,'aquatic',5,'wing',2,'pamphlet',1,'multicolorpearl',2] // +9
  ]},
  {c:5,n:'Onyx Bracelet',fails:{5:2,6:2,7:3,8:4,9:5},steps:[
    [250e6,'soulcrystalbracelet',1,'onyx',100,'ruby',100,'mithril',25,'wubba',2,'scales',6,'claw',6,'wing',2,'thread',10,'yarn',3,'gaya',250], // Craft
    [25e6,'onyx',15,'ash',3,'dye',2,'pearl',1],                // +1
    [25e6,'onyx',15,'claw',3,'scales',3,'pearl',1],            // +2
    [25e6,'onyx',15,'pamphlet',1,'wing',2,'pearl',2],          // +3
    [25e6,'onyx',25,'mithril',5,'thread',3,'pearl',2],        // +4
    [30e6,'onyx',25,'mithril',5,'thread',5,'pearl',3],        // +5
    [30e6,'onyx',25,'mithril',5,'yarn',2,'pearl',3],          // +6
    [40e6,'onyx',30,'mithril',7,'wubba',1,'pattern',1],       // +7
    [40e6,'onyx',30,'mithril',7,'flame',3,'ice',3],           // +8
    [50e6,'onyx',30,'mithril',7,'flame',4,'ice',4]            // +9
  ]},
  {c:6,n:'Jade Necklace',fails:{},steps:[
    [0,'amethyst',3], // Craft
    [10e3],                      // +1
    [20e3],                      // +2
    [40e3],                      // +3
    [60e3],                      // +4
    [80e3],                      // +5
    [100e3],                     // +6
    [200e3,'emerald',1],         // +7
    [300e3,'emerald',1],         // +8
    [500e3,'emerald',2]          // +9
  ]},
  {c:6,n:"Elemental Necklace",fails:{},steps:[
    [10e6,'fur',2,'legs',2,'symbol',1,'amethyst',30,'emerald',15,'clam',25,'gaya',5], // Craft
    [100e3], // +1
    [100e3], // +2
    [100e3], // +3
    [100e3], // +4
    [100e3,'emerald',1], // +5
    [200e3,'emerald',1], // +6
    [300e3,'amethyst',1], // +7
    [500e3,'amethyst',2,'clam',2], // +8
    [1e6,'amethyst',3,'clam',3] // +9
  ]},
  {c:6,n:"Heaven's Tear Necklace",fails:{7:1,8:1,9:2},steps:[
    [5e6,'amethyst',10,'symbol',1], // Craft
    [250e3],                                  // +1
    [250e3],                                  // +2
    [250e3],                                  // +3
    [250e3],                                  // +4
    [1e6,'amethyst',2,'clam',1],              // +5
    [1e6,'amethyst',2,'clam',2],              // +6
    [2.5e6,'ruby',2,'white',1,'fur',1],       // +7
    [2.5e6,'ruby',2,'blue',1,'legs',1],       // +8
    [5e6,'ruby',4,'blood',1,'symbol',1]       // +9
  ]},
  {c:6,n:'Soul Crystal Necklace',fails:{5:1,6:1,7:2,8:2,9:3},steps:[
    [100e6,'heavenstearnecklace',1,'ash',5,'dye',2,'multicolorpearl',5,'ruby',100,'fur',10,'legs',10,'symbol',3,'gaya',50], // Craft
    [10e6,'ruby',5,'fur',2,'legs',2], // +1
    [10e6,'ruby',10,'fur',3,'legs',3], // +2
    [10e6,'ruby',10,'symbol',2,'white',2], // +3
    [10e6,'ruby',10,'ash',3,'blue',2], // +4
    [15e6,'ruby',10,'ash',4,'blood',2], // +5
    [15e6,'ruby',10,'dye',2,'multicolorpearl',1], // +6
    [20e6,'aquatic',5,'claw',1,'scales',1,'multicolorpearl',2], // +7
    [20e6,'aquatic',5,'claw',2,'scales',2,'multicolorpearl',2], // +8
    [25e6,'aquatic',5,'wing',2,'pamphlet',1,'multicolorpearl',2] // +9
  ]},
  {c:6,n:'Onyx Necklace',fails:{5:2,6:2,7:3,8:4,9:5},steps:[
    [250e6,'soulcrystalnecklace',1,'onyx',100,'ruby',100,'mithril',25,'wubba',2,'scales',6,'claw',6,'wing',2,'thread',10,'yarn',3,'gaya',250], // Craft
    [25e6,'onyx',15,'ash',3,'dye',2,'pearl',1],                // +1
    [25e6,'onyx',15,'claw',3,'scales',3,'pearl',1],            // +2
    [25e6,'onyx',15,'pamphlet',1,'wing',2,'pearl',2],          // +3
    [25e6,'onyx',25,'mithril',5,'thread',3,'pearl',2],        // +4
    [30e6,'onyx',25,'mithril',5,'thread',5,'pearl',3],        // +5
    [30e6,'onyx',25,'mithril',5,'yarn',2,'pearl',3],          // +6
    [40e6,'onyx',30,'mithril',7,'wubba',1,'pattern',1],       // +7
    [40e6,'onyx',30,'mithril',7,'flame',3,'ice',3],           // +8
    [50e6,'onyx',30,'mithril',7,'flame',4,'ice',4]            // +9
  ]},
  {c:7,n:'Elemental Shoes',fails:{},steps:[
    [10e6,'fur',2,'legs',2,'symbol',1,'amethyst',30,'emerald',15,'clam',25,'gaya',5], // Craft
    [100e3], // +1
    [100e3], // +2
    [100e3], // +3
    [100e3], // +4
    [100e3,'emerald',1], // +5
    [200e3,'emerald',1], // +6
    [300e3,'amethyst',1], // +7
    [500e3,'amethyst',2,'clam',2], // +8
    [1e6,'amethyst',3,'clam',3] // +9
  ]},
  {c:7,n:'Phoenix Shoes',fails:{7:1,8:1,9:2},steps:[
    [25e6,'amethyst',10], // Craft
    [250e3], // +1
    [250e3], // +2
    [250e3], // +3
    [250e3], // +4
    [1e6,'amethyst',2,'clam',1], // +5
    [1e6,'amethyst',2,'clam',2], // +6
    [2.5e6,'ruby',2,'white',1,'fur',1], // +7
    [2.5e6,'ruby',3,'blue',1,'legs',1], // +8
    [5e6,'ruby',4,'blood',1,'symbol',1] // +9
  ]
},
  {c:7,n:'Fire Bird Shoes',fails:{7:1,8:2,9:2},steps:[
    [5e6,'amethyst',10,'symbol',1], // Craft
    [500e3],                     // +1
    [500e3],                     // +2
    [500e3,'amethyst',1],         // +3
    [500e3,'amethyst',1],         // +4
    [1e6,'amethyst',2,'clam',3],  // +5
    [2e6,'amethyst',2,'clam',6],  // +6
    [4e6,'ruby',2,'white',2,'fur',1,'legs',1], // +7
    [5e6,'ruby',3,'blue',2,'fur',2,'legs',2],  // +8
    [7.5e6,'ruby',4,'blood',2,'symbol',1,'talismandeath',1] // +9
  ]},
  {c:7,n:'Qilin Shoes',fails:{5:1,6:1,7:1,8:1,9:2},steps:[
    [100e6,'phoenixshoes',1,'ash',5,'dye',2,'multicolorpearl',3,'ruby',50,'fur',5,'legs',5,'symbol',2,'gaya',50], // Craft
    [10e6,'ruby',5,'fur',1,'legs',1], // +1
    [10e6,'ruby',10,'fur',2,'legs',2], // +2
    [10e6,'ruby',10,'symbol',1,'white',2], // +3
    [10e6,'ruby',10,'ash',1,'blue',2], // +4
    [15e6,'ruby',10,'ash',2,'blood',2], // +5
    [15e6,'ruby',10,'dye',1,'multicolorpearl',1], // +6
    [20e6,'aquatic',5,'claw',1,'scales',1,'multicolorpearl',1], // +7
    [20e6,'aquatic',5,'claw',2,'scales',2,'multicolorpearl',1], // +8
    [25e6,'aquatic',5,'wing',1,'pamphlet',1,'multicolorpearl',2] // +9
  ]
},
  {c:7,n:'Onyx Boots',fails:{5:2,6:2,7:3,8:4,9:5},steps:[
    [150e6,'firebirdshoes',1,'aquatic',50,'ruby',150,'multicolorpearl',5,'pamphlet',2,'ash',6,'dye',3,'scales',5,'claw',5,'wing',2,'gaya',100], // Craft
    [25e6,'aquatic',5,'ash',3,'dye',2], // +1
    [25e6,'aquatic',5,'ash',4,'dye',2], // +2
    [25e6,'aquatic',5,'claw',4,'scales',4], // +3
    [25e6,'aquatic',5,'pamphlet',1,'wing',1], // +4
    [30e6,'onyx',25,'thread',6,'pearl',3], // +5
    [30e6,'onyx',25,'yarn',2,'pearl',3], // +6
    [40e6,'onyx',30,'mithril',7,'wubba',1,'pattern',1], // +7
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +8
    [50e6,'onyx',30,'mithril',7,'flame',3,'ice',3] // +9
  ]},
  {c:7,n:'Fire Shoes',fails:{4:4,5:4,6:5,7:6,8:7,9:8},steps:[
    [5e9,'onyxboots',1,'armourdesign',5,'reddragonscale',5,'reddragonhorn',5,'dragonwings',5,'golddye',3,'titanium',10,'agate',10,'moonstone',10,'garnet',250,'gaya',250], // Craft
    [100e6,'armourdesign',2,'titanium',4,'reddragonhorn',2,'bluedye',4], // +1
    [100e6,'armourdesign',2,'titanium',4,'reddragonhorn',2,'bluedye',4], // +2
    [100e6,'armourdesign',2,'titanium',4,'reddragonhorn',2,'bluedye',4], // +3
    [150e6,'cords',4,'moonstone',3,'reddragonscale',2,'reddye',3], // +4
    [150e6,'cords',4,'moonstone',3,'reddragonscale',2,'reddye',3], // +5
    [150e6,'cords',4,'moonstone',3,'reddragonscale',2,'reddye',3], // +6
    [200e6,'reddragonhorn',2,'dragonwings',2,'reddragonscale',2,'golddye',1], // +7
    [200e6,'reddragonhorn',2,'dragonwings',2,'reddragonscale',2,'golddye',1], // +8
    [200e6,'reddragonhorn',2,'dragonwings',2,'reddragonscale',2,'golddye',1] // +9
  ]},
  {c:8,n:'Linen Belt',fails:{7:1,8:2,9:2},steps:[
    [25e6,'fur',6,'legs',6,'symbol',2,'amethyst',50,'emerald',25,'white',3,'blue',3,'blood',3,'gaya',10], // Craft
    [500e3], // +1
    [500e3], // +2
    [500e3,'amethyst',1], // +3
    [500e3,'amethyst',1], // +4
    [1e6,'amethyst',2,'clam',3], // +5
    [2e6,'amethyst',2,'clam',6], // +6
    [4e6,'ruby',2,'white',2,'fur',1,'legs',1], // +7
    [5e6,'ruby',3,'blue',2,'fur',2,'legs',2], // +8
    [7.5e6,'ruby',4,'blood',2,'symbol',1,'talismandeath',1] // +9
  ]},
  {c:8,n:'Leather Belt',fails:{5:1,6:1,7:1,8:1,9:2},steps:[
    [100e6,'linenbelt',1,'claw',5,'scales',5,'wing',2,'multicolorpearl',5,'ash',10,'dye',3,'ruby',100,'gaya',100], // Craft
    [10e6,'ruby',10,'fur',2,'legs',2], // +1
    [10e6,'ruby',10,'fur',3,'legs',3], // +2
    [10e6,'ruby',10,'symbol',2,'white',2], // +3
    [10e6,'ruby',10,'ash',3,'blue',2], // +4
    [15e6,'ruby',10,'ash',4,'blood',2], // +5
    [15e6,'ruby',10,'dye',2,'multicolorpearl',1], // +6
    [20e6,'aquatic',5,'claw',1,'scales',1,'multicolorpearl',2], // +7
    [20e6,'aquatic',5,'claw',2,'scales',2,'multicolorpearl',2], // +8
    [25e6,'aquatic',5,'wing',2,'pamphlet',1,'multicolorpearl',2] // +9
  ]},
  {c:8,n:'Shadow Belt',fails:{5:1,6:2,7:3,8:3,9:5},steps:[
    [500e6,'linenbelt',1,'thread',10,'yarn',3,'mithril',25,'onyx',100,'ice',10,'flame',10,'pattern',3,'wubba',3,'pearl',5,'gaya',250], // Craft
    [25e6,'onyx',15,'claw',4,'scales',4,'pearl',2], // +1
    [25e6,'onyx',15,'wing',2,'pamphlet',1,'pearl',2], // +2
    [25e6,'onyx',15,'mithril',5,'yarn',2,'pearl',2], // +3
    [25e6,'onyx',25,'mithril',5,'thread',3,'pearl',3], // +4
    [30e6,'onyx',25,'mithril',5,'thread',5,'pearl',3], // +5
    [30e6,'onyx',25,'mithril',5,'wubba',1,'pattern',2], // +6
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +7
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +8
    [50e6,'onyx',30,'mithril',7,'flame',3,'ice',3] // +9
  ]},
  {c:8,n:'Souls Belt',fails:{5:1,6:2,7:3,8:3,9:5},steps:[
    [500e6,'linenbelt',1,'thread',10,'yarn',3,'mithril',25,'onyx',100,'ice',10,'flame',10,'pattern',3,'wubba',3,'pearl',5,'gaya',250], // Craft
    [25e6,'onyx',15,'claw',4,'scales',4,'pearl',2], // +1
    [25e6,'onyx',15,'wing',2,'pamphlet',1,'pearl',2], // +2
    [25e6,'onyx',15,'mithril',5,'yarn',2,'pearl',2], // +3
    [25e6,'onyx',25,'mithril',5,'thread',3,'pearl',3], // +4
    [30e6,'onyx',25,'mithril',5,'thread',5,'pearl',3], // +5
    [30e6,'onyx',25,'mithril',5,'wubba',1,'pattern',2], // +6
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +7
    [40e6,'onyx',30,'mithril',7,'flame',2,'ice',2], // +8
    [50e6,'onyx',30,'mithril',7,'flame',3,'ice',3] // +9
  ]},
  {c:8,n:'Tourmaline Belt',fails:{5:3,6:3,7:4,8:5,9:6},steps:[
    [2.5e9,'soulsbelt',1,'shadowbelt',1,'flame',15,'ice',15,'pattern',5,'titanium',6,'agate',6,'moonstone',6,'golddye',2,'garnet',100,'gaya',250], // Craft
    [100e6,'cords',2,'titanium',2,'agate',2,'moonstone',2], // +1
    [100e6,'cords',3,'titanium',2,'agate',2,'moonstone',2], // +2
    [100e6,'cords',2,'titanium',2,'agate',2,'moonstone',2], // +3
    [150e6,'cords',3,'titanium',3,'agate',3,'whitedye',3], // +4
    [150e6,'cords',2,'titanium',2,'moonstone',2,'bluedye',2], // +5
    [150e6,'cords',3,'agate',2,'moonstone',2,'reddye',2], // +6
    [200e6,'armourdesign',1,'reddragonhorn',2,'reddragonscale',3,'golddye',2], // +7
    [200e6,'armourdesign',1,'dragonwings',3,'reddragonscale',3,'golddye',2], // +8
    [200e6,'armourdesign',1,'dragonwings',2,'reddragonhorn',3,'golddye',2] // +9
  ]},
];
