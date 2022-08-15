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

    Magecraft: [],

    Projection: [],

    Trickery: [],

    Legendary: [],
  },
};
