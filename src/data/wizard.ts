import { IRole } from 'src/components/models';

export const Wizard: IRole = {
  paths: {
    Evocation: [
      {
        name: 'Magic Strike',
        roll: true,
        subAbilities: [
          {
            ap: 0,
            text: '<p>You must be holding a pointed object like a wand, staff, or sword to use this spell. You use it to shoot a shimmering missile of force in a straight line at a target you can see, dealing 2 damage.</p>',
          },
          {
            ap: 2,
            text: '<p>You overload the missile, increasing its damage to 4 and hitting the target automatically. You do not need to roll the die if you overload the spell.</p>',
          },
        ],
      },
      {
        name: 'Kindle',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You rub your hands together, causing a flammable object you can see nearby to ignite in flame. The spell can ignite textiles, wood, paper, and other combustible material.</p> <p>This spell cannot be used directly on creatures, but it can be used to ignite flammable things they are wearing or carrying. Igniting something on a creature deals 1 damage to them.</p>',
          },
        ],
      },
      {
        name: 'Clap',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You clap your hands, creating a thunderous wave of force in the direction you are facing. The wave hits up to 3 nearby creatures for 2 HP. If affected creatures are the size of a horse or smaller, they are also knocked to the ground.</p>',
          },
        ],
      },
      {
        name: 'Telekinesis',
        prefixText:
          '<p>You move a nearby creature or object using only your mind.</p>',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You may move an object or creature no larger than an elephant. If you move it gently, you can control it for up to 10 seconds. Or you may forcefully throw it up to 5 meters away and hit it for 2 HP.</p>',
          },
          {
            ap: 'X',
            text: '<p>You may increase the power of this ability by spending additional AP. For each AP you spend, you may increase the distance you can throw the creature by 5 meters, and the damage they take by 2 HP. (For example, if you spend 5 AP, you can throw a target 25 meters and deal 10 damage.)</p>',
          },
        ],
      },
      {
        name: 'Last Light',
        prefixText:
          '<p>You must be holding a pointed object like a wand, staff, or sword to use this spell.</p>',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You momentarily channel a blinding beam of focused light in a straight line at a target you can see, dealing 6 damage. The light ignites anything flammable that it touches, melts a hole in steel objects, and sears organic matter.</p>',
          },
          {
            ap: 5,
            text: '<p>You overload the beam. It instantly kills commoners and minions and deals 12 damage to bosses. If Last Light kills the target, it disintegrates into ash.</p>',
          },
        ],
        suffixText:
          '<p>The beam created by Last Light can be deflected by mirrors.</p>',
      },
    ],

    Conjuration: [
      {
        name: 'Familiar',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You summon a tiny spectral creature, like a bird, a lizard, a butterfly, or anything else of a comparable size. The familiar is the avatar of a random spirit creature from your world. It becomes your ally and will follow your instructions. The Guide chooses the creature's background and personality, and speaks for them. The familiar may choose to leave you if they are mistreated.</p> <p>The familiar cannot move out of your sight. It can pick up and move objects no larger than a coin purse and no heavier than 10 pounds. It can't attack.</p> <p>Your familiar has 4 HP. It is invulnerable to non-magical harm. If it is reduced to 0 HP, it vanishes, and your bond is broken. You may only have one familiar at a time.</p>",
          },
        ],
      },
      {
        name: 'Pegasus Cloak',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You bestow any number of nearby creatures with illusory feather cloaks for the next hour. Affected creatures hover 1 meter above the ground and can move by gliding in the direction they want to travel. They will also fall gently until they are hovering 1 meter above ground.</p>',
          },
        ],
      },
      {
        name: 'Force Field',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You create a paper-thin wall of force capable of preventing non- magical creatures and objects from passing through. You may choose whether the field blocks passage on one or both sides. The field can be in any shape you want, but it must fit inside of a cube that’s 10 meters on all sides. The force field has 20 hit points and dissolves at 0 HP.</p> <p>You can make the field stationary or move it telepathically. (For example, you might create an invisible platform that glides beneath you as you walk.)</p>',
          },
        ],
      },
      {
        name: 'Conjure',
        subAbilities: [
          {
            ap: 3,
            text: "<p>You imagine an object, causing it to appear somewhere nearby. You can summon any object that meets these guidelines: <ul> <li>It can't be larger than an elephant.</li> <li>It can't have magical effects.</li> </ul> </p> <p>You must tell the Guide which object you want to summon. Then, the Guide thinks of a related object and gives you its name in secret. (For example, if you want to summon a lockpick, the Guide may tell you to draw a door.)</p> <p>Set a timer. You have 1 minute to draw the secret object. When time is up, show it to your party. Your friends can discuss what they see, but they can only submit one guess. Don't give the party clues.</p> <p>If they guess correctly, the item appears. If they guess closely but not exactly, the item appears, but it has a defect. If they're totally wrong, a random misshapen item appears.</p>",
          },
        ],
      },
    ],

    Planeshifting: [
      {
        name: 'Blink',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You teleport to a location of your choice nearby. You vanish, leaving behind a gentle gust of wind and then instantaneously reappear nearby.</p>',
          },
        ],
      },
      {
        name: 'Gate',
        subAbilities: [
          {
            ap: 1,
            text: '<p><strong>BIND.</strong> You bind yourself to the room you are currently in. It must belong to you or a member of the party. This is your Circle. You may only bind yourself to one at a time.</p>',
          },
          {
            ap: 3,
            text: '<p><strong>GATE.</strong> Snap your fingers. Any willing party members nearby are instantly teleported to your Circle.</p>',
          },
        ],
      },
      {
        name: 'Portal',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You conjure a portal of any shape and orientation that is no larger than a door. It appears at a location of your choice nearby. The portal looks like a window to whatever is on the other side, and its edges crackle and spark with energy. When you cast the spell again, the new portal automatically connects to the previous one. The portals remain open until you choose to close them. Anyone that can fit may pass through them.</p>',
          },
        ],
      },
      {
        name: 'Dark Door',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You knock on a door, making it a temporary portal to a specific shadow plane. You must be aware of the shadow plane's existence to create a door to it. (For example, if you see a creature with a Cosmic Purse, you can open a door to the purse's shadow plane.) When you open the door, you can see inside the plane, and you and your allies may enter it. If the door is closed, the portal vanishes. (If the door closes behind you, you become trapped in the shadow plane and must escape with other means, like with Gate.)</p>",
          },
        ],
      },
      {
        name: 'Teleport',
        roll: true,
        prefixText: '<p>Snap your fingers.</p>',
        subAbilities: [
          {
            ap: 5,
            text: '<p>You and any willing creatures nearby vanish instantly, leaving behind a small shockwave of air in your wake, and are teleported to any place you choose.</p>',
            table: [
              {
                floor: 1,
                result:
                  'The spell fails. Party members are lacerated by an arcane explosion and are each hit for 5 HP. All other travelers are torn apart in a gruesome spectacle. (They die.)',
              },
              {
                floor: 2,
                ceiling: 5,
                result:
                  "The party arrives safely, but nobody else does. You don't know where they went. You lose an item you are carrying.",
              },
              {
                floor: 6,
                ceiling: 10,
                result:
                  'You all arrive. Choose one: you take 7 damage from turbulence, or a magic item you are carrying is destroyed.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'You all arrive safely. Good for you.',
              },
              {
                floor: 20,
                result:
                  "Everyone arrives safely. You recover the spell's full AP cost.",
              },
            ],
          },
        ],
      },
    ],

    Magecraft: [
      {
        name: 'No',
        roll: true,
        subAbilities: [
          {
            ap: 2,
            text: '<p>By uttering the word "no," you attempt to neutralize a spell that you see an NPC casting nearby. You must declare you are using this ability before the Guide describes the consequences of the spell.</p>',
            table: [
              {
                floor: 1,
                result:
                  'You accidentally amplify the spell. If it is a harmful spell, the damage is doubled.',
              },
              {
                floor: 2,
                ceiling: 5,
                result: 'The spell takes effect normally.',
              },
              {
                floor: 6,
                ceiling: 10,
                result:
                  'The spell misses and hits another nearby creature or target.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: "The spell is stopped before it's cast.",
              },
              {
                floor: 20,
                result:
                  'The spell is violently canceled and its caster is hit for 1 HP.',
              },
            ],
          },
        ],
      },
      {
        name: 'Reflect',
        roll: true,
        subAbilities: [
          {
            ap: 3,
            text: '<p>You produce a counterspell, reflecting a spell that targets you. You must declare that you are reflecting the spell as soon as the Guide says that you are being targeted by a spell.</p>',
            table: [
              {
                floor: 1,
                ceiling: 5,
                result:
                  'The spell reflects off of you but hits a nearby party member instead.',
              },
              {
                floor: 6,
                ceiling: 10,
                result: 'The spell reflects off of you but misses its caster.',
              },
              {
                floor: 11,
                ceiling: 20,
                result: 'The caster is hit by their own spell, instead of you.',
              },
            ],
          },
        ],
      },
      {
        name: 'Enscroll',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You create a Spell Scroll (p. 145) that can be used to produce a spell that you know. You must add the AP cost of the spell you are inscribing to the cost of Enscroll. For example, if you create a magic scroll that can produce your Teleport spell, you must spend 7 AP.</p> <p>You must spend a short time in a safe and quiet place to prepare the scroll. You decide what is written on it. The user of the scroll must read the words aloud to activate the spell it contains.</p>',
          },
        ],
      },
      {
        name: 'Spellsteal',
        subAbilities: [
          {
            ap: 3,
            text: '<p>After you observe a creature nearby casting a spell, you may briefly enter their mind to glimpse its nature. You learn the spell and can produce it once.</p> <p>Your theft gives you the minimum know-how to produce the spell, but you have not mastered it. The Guide may not fully reveal the effects or potential consequences of some stolen spells.</p> <p>Once you cast or Enscroll the stolen spell, you forget the spell and cannot use it again.</p>',
          },
        ],
      },
    ],

    Projection: [
      {
        name: 'Sense Magic',
        subAbilities: [
          {
            ap: 0,
            text: "<p>You get a gentle tingling feeling in your bones whenever you are near a powerful source of magic. You're aware that magic is in the area, but not its location or nature.</p>",
          },
          {
            ap: 1,
            text: '<p>You discern the location of nearby magic and its general nature. For instance, the Guide may reveal that you sense a magic sword, a cursed door, or an illusion.</p>',
          },
          {
            ap: 2,
            text: '<p>You study the precise nature of nearby magic, learning its specific effects. If you use this ability to study a mysterious magic item, its name and effects are revealed.</p>',
          },
        ],
      },
      {
        name: "Aurora's Silvery Broadcast",
        subAbilities: [
          {
            ap: 2,
            text: '<p>You broadcast a message up to 20 words in length. Each creature within 1 kilometer hears the message clearly in a voice that sounds pleasant to them. The sound seems to originate from every direction and background noises are muted for the duration.</p>',
          },
        ],
      },
      {
        name: 'Scry',
        subAbilities: [
          {
            ap: 1,
            text: '<p>Once per game session, you may flash forward in time to glimpse your actions in the near future. For the next hour, you can avert failure by redoing a roll of the die. You must take the result of the new roll.</p> <p>Or you may ask the Guide to reveal a situation you are likely to encounter based on the current trajectory of your choices. You may ask the Guide questions about what you sense from this glimpse of the future, but the answers may be vague, as if you are trying to find detail in a watercolor painting.</p>',
          },
        ],
      },
      {
        name: 'See',
        subAbilities: [
          {
            ap: 4,
            text: "<p>For the next hour, you can see through all magical deceptions. See reveals the world to you in several ways: <ul> <li>You see anything that's invisible.</li> <li>You know if something is an illusion.</li> <li>You may see the true form of anything that has been altered by magic.</li> </ul> </p>",
          },
        ],
      },
      {
        name: 'Find',
        subAbilities: [
          {
            ap: 3,
            text: '<p><strong>FIND.</strong> You close your eyes and attempt to locate any object you have held before, as long as it is in your current universe. You discover its exact location.</p>',
          },
          {
            ap: 3,
            text: '<p><strong>RECALL.</strong> Immediately after you have used Find to locate an item, you may recall it for an additional 3 AP. The item instantly vanishes from its present location and appears in your hands.</p>',
          },
        ],
      },
    ],

    Trickery: [
      {
        name: 'Speak',
        subAbilities: [
          {
            ap: 1,
            text: '<p>For the next minute, you may speak silently into the mind of a nearby creature. Your lips move normally as if you were speaking aloud, but no sound comes out. Instead, the target of the spell hears your voice inside their head. The creature can tell that your voice is inside their mind.</p>',
          },
        ],
      },
      {
        name: 'Pinch',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You imbue your fingers with supernatural strength. For the next minute, you can effortlessly pick up and move objects of any weight, as long as you can reasonably handle their size and shape. For instance, you might pinch the shirt of a bully and raise them up in the air or casually move a giant anvil.</p>',
          },
        ],
      },
      {
        name: 'Stretch',
        subAbilities: [
          {
            ap: 2,
            text: "<p>Choose a nearby creature or object that is no smaller than an ant and no larger than a horse. You cause it to instantly enlarge or shrink. It can grow up to twice its size or shrink up to half of its size. The target's weight increases or decreases proportionally, but its hit points do not change. You cannot enlarge something beyond the confines of the space it's in.</p>",
          },
          {
            ap: 4,
            text: '<p>You may stretch an object no smaller than an ant and no larger than an elephant.</p>',
          },
        ],
      },
      {
        name: 'Undo',
        prefixText:
          "<p>You speak a word of power, reversing the fate of a nearby object. The spell cannot be used to affect living things.</p> <p>The thing you are undoing must be the discrete result of another creature's effort. For example, you might undo a creature's shoelaces, unthread a garment, cause a piece of furniture to fall apart, or revert a sculpture to a block of marble.</p> <p>Choose how much effort to undo each time you use this spell:</p>",
        subAbilities: [
          {
            ap: 1,
            text: '<p>Up to 1 minute of effort.</p>',
          },
          {
            ap: 2,
            text: '<p>Up to 1 day of effort.</p>',
          },
          {
            ap: 3,
            text: '<p>Up to 1 week of effort.</p>',
          },
          {
            ap: 4,
            text: '<p>Any amount of effort.</p>',
          },
        ],
      },
    ],

    Legendary: [
      {
        name: 'Rift',
        subAbilities: [
          {
            ap: 5,
            text: "<p>You summon a magnificent gateway that contains a portal to your current universe's nexus in The Rift. (The Rift is a special location in the omniverse, which you can read more about on p. 33) Each universe's gateway is unique; it might be a stone archway, an iron gate, a humble wooden door, or something else. The Guide imagines what this gateway looks like.</p> <p>This is an extraordinarily difficult portal to maintain, and it only remains open for 1 minute. Once opened, any creatures or objects that can fit through the portal may pass through it.</p> <p>While you may summon access to the gateway anywhere, the exit point remains in the same location in The Rift.</p>",
          },
        ],
      },
      {
        name: 'Transcendence',
        subAbilities: [
          {
            ap: 5,
            text: '<p>You embark on an incredible quest for knowledge within living things. For the next minute, you enter a trance as your consciousness expands, touching all sentient beings within 1,000 kilometers of you.</p> <p>The ordeal is staggering. You immediately sense time and personal identity at a scale beyond your normal understanding. You absorb the simultaneous experiences of others — possibly from billions of beings.</p> <p>Your knowledge quest must be limited to a subject that you could reasonably come to understand by seeing through the eyes of others. For instance, you may set out to learn the true history of a species, identify who and where the most powerful being is, discover the location of a secret object, or become generally accustomed to the beliefs and practices of a culture. You cannot use the spell for things that one mind could not reasonably possess (for instance, by asking for “all the world’s knowledge"). The Guide will decide if your request is reasonable.</p> <p>Beware. Entering the minds of others is risky.</p> <p>You may experience unforeseen consequences...</p>',
          },
        ],
      },
      {
        name: 'Planecraft',
        prefixText:
          '<p>You conjure a shadow plane. Its contents are completely illusory and cannot leave the plane. You can fill it with anything you can imagine, except sentient beings.</p> <p>The things inside may look and feel real, but they are ultimately mirages. Creatures cannot be harmed by things you put in this plane.</p>',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You conjure a tiny plane no larger than a mansion or castle.</p>',
          },
          {
            ap: 4,
            text: '<p>You conjure a plane no larger than the size of a village.</p>',
          },
          {
            ap: 6,
            text: '<p>You conjure a plane with no size limit.</p>',
          },
          {
            ap: 8,
            text: '<p>You conjure a plane with no size limit and no safeguards. Creatures can now be harmed by the things you put in the plane. (That includes you.)</p>',
          },
        ],
      },
      {
        name: 'Create',
        subAbilities: [
          {
            ap: 5,
            text: "<p>You tap raw magic, converting its energy into a single, non-magical, inanimate object that fits inside a cube no larger than 5 meters in any dimension. You create the object perfectly and it is real in every sense. You may create anything that fits in the space, including precious gems, flawless weapons, or exact replicas of other objects.</p> <p>This spell requires perfection and is extremely taxing on your ability as a Wizard. Keep track of how many times you have cast the spell on your inventory sheet. The spell's cost increases by 1 AP each time you use it.</p>",
          },
        ],
      },
    ],
  },
};
