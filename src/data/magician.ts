import { IRole } from 'src/components/models';

export const Magician: IRole = {
  name: 'Magician',
  id: '',
  paths: {
    Misdirection: [
      {
        name: 'Magic Tricks',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You produce a tiny magical effect to surprise, delight, or confuse those around you. Choose any combination of these effects each time you use this ability:</p> <p><strong>LIGHT.</strong> You create a harmless display of light, like a flickering flame or a pattern of sparks. You can also snuff out or ignite small light sources like torches.</p> <p><strong>SOUND.</strong> You create a small, brief sound effect, like a wind chime, an audience clapping, or someone whispering.</p> <p><strong>SMELL.</strong> You conjure a smell of any kind, like a freshly baked pie or a cesspool.</p> <p><strong>TOUCH.</strong> You give one or more nearby creatures a gentle physical sensation, like someone tapping them on the shoulder, a chill breeze, or the feeling of goosebumps.</p>',
          },
        ],
      },
      {
        name: 'Mesmerize',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You dazzle a nearby commoner or minion with an optical illusion. (The creature must be able to see.) Until you leave the area, the creature cannot move, take actions, or respond to conversation. The spell ends if the creature is harmed.</p>',
          },
        ],
      },
      {
        name: 'Overthere',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You make a suggestive gesture, redirecting a nearby creature that is currently hostile toward you. The target redirects its anger toward a different adversary. (The spell does not work if the target has no other enemies nearby.) This effect is canceled if you harm the creature.</p>',
          },
        ],
      },
      {
        name: 'Mirage',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You conjure a major illusion no larger than 100 meters in any dimension. The illusion can be of anything that fits within the space, and you can program it with looping mechanics. For instance, you can create the illusion of an oasis, a pile of treasure, or a lumbering giant guarding their territory.</p> <p>If a creature touches or passes through the illusion, they will no longer see it. Creatures with the ability to detect magic may discover the deception.</p>',
          },
        ],
      },
      {
        name: 'Invisibility',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You make a nearby creature or object invisible for the next minute. If it is a creature, everything they are wearing and carrying also becomes invisible. If a creature attacks while invisible, they reappear.</p>',
          },
          {
            ap: 'X',
            text: '<p>Add 1 AP for each creature or object you target with the spell beyond the first.</p>',
          },
        ],
      },
    ],

    Mannequins: [
      {
        name: 'Splitting Image',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You vanish momentarily, reappearing with two illusory duplicates at your side. Your duplicates travel alongside you and perfectly mimic all of your movements.</p> <p>If a creature attempts to target you, the Guide must flip a coin. If it turns up "heads," you are targeted; on "tails" one of your duplicates is targeted. If one of your duplicates takes damage, it disappears.</p>',
          },
        ],
      },
      {
        name: 'Phantom Menace',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You read the mind of a nearby NPC and produce an illusion of a creature they find extremely irritating. Only you and the target of the spell can see and hear the illusion.</p> <p>For the next 10 minutes, the illusion relentlessly mocks and taunts your target, provoking their full attention.</p> <p>You may control the illusion directly and have it manipulate small objects. For example, you can have it steal an item from the target and lead them on a chase. Or you may let the illusion go wild, allowing the Guide to narrate its behavior.</p>',
          },
        ],
      },
      {
        name: 'Illusory Creature',
        subAbilities: [
          {
            ap: 3,
            text: '<p>Imagine a creature. You create a convincing illusion of it that appears nearby. It looks, moves, and sounds like the creature you imagined. It even feels real to the touch. The illusion has 6 HP and vanishes at 0 HP.</p> <p>The illusion can behave independently and travel away from you. You can program the illusion\'s routines. For example, you may have it clean a house, patrol an area, pretend to be busy, or give it a combination of tasks and behaviors. You can also set rules for it, like "Don\'t harm anyone for any reason" or "Don\'t let anyone pass through this door."</p> <p>You share a telepathic bond with the illusion when it is nearby, and you can control it directly during your turn. You can make it move, act, and speak your lines. It can hold and use weapons to make basic attacks.</p> <p>After 1 day, the illusion will automatically travel out of sight of other creatures and then vanish.</p>',
          },
          {
            ap: 4,
            text: "<p>This spell costs 4 AP instead if you use it to create an illusion of a creature that already exists. You create a perfect double of the creature that looks and sounds like them. It can fool everyone but the creature's closest friends and family.</p>",
          },
        ],
      },
    ],

    Clairvoyance: [
      {
        name: 'Magic Eye',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You briefly gain the ability to see beyond physical reality. For the next hour, you are able to see the following:</p> <p><strong>MAGIC.</strong> A faint aura surrounds any person or object currently affected by magic.</p> <p><strong>ILLUSION.</strong> Any illusory creature or object slightly flickers, but you do not see its true form.</p>',
          },
        ],
      },
      {
        name: 'Whisper',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You telepathically send a message to a nearby creature. They know you are speaking from within their mind, but they hear you as if you were speaking out loud.</p>',
          },
          {
            ap: 1,
            text: '<p>You create a link with the creature that allows them to respond to your whisper. If they respond, you may have a telepathic conversation with them for the next minute.</p>',
          },
        ],
      },
      {
        name: 'Message',
        subAbilities: [
          {
            ap: 1,
            text: '<p>Choose a creature you have met before. You must know the general area where they are presently located. You may communicate with each other telepathically for up to 1 minute.</p>',
          },
          {
            ap: 4,
            text: '<p>You can create the telepathic link, even if you do not know where the creature is located. They can be anywhere.</p>',
          },
        ],
      },
      {
        name: 'Interpret',
        subAbilities: [
          {
            ap: 1,
            text: "<p>You enter the mind of a nearby creature and temporarily learn their language for the next 10 minutes.</p> <p>When you cast this spell, you may also attempt to permanently learn the creature's language by playing a game of charades. (This happens at the table out of character.) The Guide will write down a word or phrase on a piece of paper and then secretly give it to you.</p> <p>Start a timer. You have 1 minute to silently act out the word or phrase. If another player correctly guesses the word or phrase, the spell is successful.</p>",
          },
        ],
      },
      {
        name: 'Insight',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You gaze into the mind of a nearby creature, discovering a prominent intention. Choose one effect each time you cast this spell: <ul> <li>You learn something the creature intends to do in the next 10 minutes.</li> <li>You learn something the creature intends to accomplish over a long period of time.</li> <li>You learn something they intend to do to a specific creature of your choice.</li></ul></p>',
          },
        ],
      },
    ],

    Conjuration: [
      {
        name: 'Little Bird',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You summon an illusory bird somewhere nearby that keeps watch over an area that it can see. It remains there until you dismiss it. You may only have one Little Bird at a time.</p> <p>You share a telepathic link with the bird. It will message you when it witnesses something you specify, like a specific creature entering a room or a door opening. The bird will wake you up to tell you what it sees if you are sleeping.</p>',
          },
        ],
      },
      {
        name: "Helen's Fantastic Feast",
        subAbilities: [
          {
            ap: 4,
            text: '<p>Imagine an elaborate feast of any culinary style. You summon food and drink, your choice of furniture (if necessary), and your choice of dinnerware and table decorations. You may summon enough to feed a party of up to 20 people. Consuming the meal restores 4 hit points.</p>',
          },
        ],
      },
      {
        name: 'Monitor',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You summon a small illusory servant that hovers over your shoulder and follows you around for the remainder of your play session. The Monitor looks like a blooming flower with an eye in the center, and it's invisible except to creatures you designate. You can deploy the Monitor to places just beyond your sight. For instance, you can send it searching around a corner into another room.</p> <p>The Monitor can tell you how many creatures are in a space, but not what kinds. It also gives you a rudimentary mental map of spaces it travels through. For instance, if you send it into an adjacent room, you will know the rough size and shape of the room and any major features, like pillars or open pits.</p>",
          },
        ],
      },
      {
        name: 'Shadow Haven',
        subAbilities: [
          {
            ap: 5,
            text: '<p>Place your hand on a dwelling in the worldly plane. You instantly duplicate its interior inside of a shadow plane. The duplication looks and feels real to the touch, but it is an illusion; you cannot take its illusory parts out of the shadow plane.</p> <p>The dwelling can be as small as a shed or as large as a mansion or castle. The physical entrance to the dwelling in the worldly plane doubles as a secret portal to the shadow haven. You can grant or revoke access to anyone at any time. A creature that is aware of the haven and has permission to enter may choose to open the door to the portal by wishing it. Otherwise, the door functions normally as the entrance to the dwelling in the worldly plane.</p> <p>The shadow haven lasts permanently until it is dispelled, you dismiss it, or the spell is cast again. Any creatures inside when the spell ends are instantly expelled through the portal into the worldly plane.</p>',
          },
        ],
      },
    ],

    'Mind Control': [
      {
        name: 'Bamboozle',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You make a nearby creature mildly confused about a specific subject until you leave the area. For example, you could make a merchant confused about the value of their goods, a guard confused about who is authorized to pass, or a dog confused about whether he is a good boy.The confusion is lifted if you push the deception too far, like trying to trade a rock for a priceless item.</p>',
          },
        ],
      },
      {
        name: "Wren's Delightful Dream",
        subAbilities: [
          {
            ap: 1,
            text: '<p>You whisper and wave your hand at a nearby creature. The next time the creature falls asleep, they experience a deeply comforting dream. They wake up feeling beloved and forget all of their grudges for the next week.</p>',
          },
        ],
      },
      {
        name: 'Perky Profanation',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You curse a nearby creature for the next 10 minutes. The curse is lifted if the creature is harmed. Choose one:</p> <p><strong>LAUGHTER.</strong> They double over in sustained laughter and can’t move. Everything they hear sounds hilarious to them.</p> <p><strong>DANCE.</strong> They hear their favorite tune and start dancing like their life depends on it.</p> <p><strong>MIMICRY.</strong> They begin to mimic a creature of your choice. For example, you can make them behave like housecats.</p>',
          },
          {
            ap: 4,
            text: '<p>You curse any number of commoners nearby.',
          },
        ],
      },
      {
        name: 'Fear',
        roll: true,
        subAbilities: [
          {
            ap: 4,
            text: '<p>You breach the mind of a nearby creature to seek their worst fear.</p>',
            table: [
              {
                floor: 1,
                result:
                  "When confronting the creature's fear, you become permanently haunted by it. You must choose an additional character flaw. You can only lift the fear by having the Liberate spell (p. 45) cast on you.",
              },
              {
                floor: 2,
                ceiling: 5,
                result:
                  "You learn the creature's worst fear, but it paralyzes you with dread for the next 10 minutes. During this time, you are unable to use abilities.",
              },
              {
                floor: 6,
                ceiling: 10,
                result: "You learn the creature's worst fear, but they reject you from their mind before you can conjure the fear.",
              },
              {
                floor: 11,
                ceiling: 19,
                result:
                  "You learn the creature's worst fear. You may then conjure the image of this fear in their mind's eye, paralyzing them with dread for the next 10 minutes. They cannot act, except to flee danger.",
              },
              {
                floor: 20,
                result:
                  "You learn the creature's worst fear. They become permanently haunted by it in every waking moment. Over time, their personality is destroyed, and they become unresponsive to others.",
              },
            ],
          },
        ],
      },
    ],

    Mayhem: [
      {
        name: 'Scintillate',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You extend your fingers outward, and a streaking bolt of sparks shoots toward a target you can see. Roll the die to see if it hits the target successfully.</p> <p>You may make the bolt explode on contact with crackling energy, hitting the target for 2 HP. Or you can make the bolt a harmless firework that explodes in the air, creating a pattern of any shape and color.</p>',
          },
        ],
      },
      {
        name: 'Bedazzle',
        subAbilities: [
          {
            ap: 4,
            text: '<p>You summon four prismatic bolts that sparkle brilliantly. You may direct each bolt toward any target you can see.</p> <p>The bolts each hit for 2 HP. If all four hit a single creature, the creature is affected by your Mesmerize ability (p. 84).</p>',
          },
        ],
      },
      {
        name: 'Loosen',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You twirl your finger as if you are unwinding a spool of yarn. Starting with a single creature nearby that you can see, you create a cascading wave of magic mischief that loosens anything fastened or tightened around nearby creatures. For example: <ul> <li>Bags become unclasped and spill out their contents.</li> <li>Shoelaces become untied, belts unbuckled, and shirts unbuttoned.</li> <li>Pets become unleashed.</li> </ul> </p>',
          },
        ],
      },
      {
        name: 'Chaos Ball',
        subAbilities: [
          {
            ap: 3,
            text: "<p>You summon a cherry-sized elastic ball in your hand. When you throw the ball, it bounces off everything it touches, avoiding creatures. Each time the ball bounces, it accelerates slightly, traveling faster and faster until it escapes into the atmosphere after 1 minute.</p> <p>The ball's brief reign of terror shatters pottery, glass, light furniture, and most other fragile things in your scene. What a shame.</p>",
          },
        ],
      },
    ],

    Legendary: [
      {
        name: 'Control',
        subAbilities: [
          {
            ap: 8,
            text: '<p>You dominate the mind of a nearby creature for the next hour. The creature will do anything you verbally command them to do without exception or hesitation. When the spell ends, they remember everything that happened.</p> <p>This spell is cursed. If you use Control to harm another creature, you permanently forfeit your character and they become an NPC boss. The Guide will now play your character as a villain in the story.</p> <p>The Guide will inform you if your use of the spell will cause your character to become an NPC before you cast it; you must agree to forfeit your character, otherwise you may not cast Control to harm another creature.',
          },
        ],
      },
      {
        name: 'Peerless Pilot',
        subAbilities: [
          {
            ap: 5,
            text: '<p>You conjure a fantastic hot air balloon from another dimension that can fit you and your party. You must be outdoors and standing in a clearing with room for the balloon to form.</p> <p>The balloon is 30 meters tall and can look like anything you want. It’s piloted by a small, illusory creature that can talk to you and your crew and take instructions. (The standard creature is a red panda wearing goggles, but you may choose any similarly sized creature you want.) The pilot remembers you and where you’ve been if you cast the spell again.</p> <p>The balloon is powered by a flaming sphere above the carriage that adjusts its intensity based on your commands. The balloon can soar as high as the tallest mountain peaks and move at up to 30 kilometers an hour. The carriage has 40 hit points, and the balloon has 10 hit points.</p> <p>You may dismiss the balloon at any time; it vanishes with its pilot and returns home.</p>',
          },
        ],
      },
      {
        name: 'Perfect Gift',
        subAbilities: [
          {
            ap: 4,
            text: '<p>You glimpse the mind of a nearby creature, discovering what stirs their heart. Then, you conjure an emotionally priceless gift for them.</p> <p>You choose how the gift makes the creature feel once it is received. Choose one: <ul> <li>They come to terms with the loss of a loved one, finding peace.</li> <li>They decide to repair a broken relationship in their life.</li> <li>They become exuberantly happy for the next month.</li> <li>They become obsessed with the gift, refusing to part with it for any reason.</li> <li>They love you as an intimate friend and seek a closer relationship.</li> </ul> </p> <p>The Guide chooses the form of the gift to match the effect with the creature.</p>',
          },
        ],
      },
      {
        name: 'Invasion',
        subAbilities: [
          {
            ap: 5,
            text: "<p>You touch a sleeping NPC (the host) and enter its dream. You may take any willing party members who are nearby with you. Those invading the dream enter a trance. They cannot sense anything outside of the dream, even if they are harmed.</p> <p>You choose how you and your companions appear in the dream. You may impersonate others while in the dream world. Once you enter, you create a new dream in the host's mind. The dream has two scenes.</p> <p><strong>THE SUGGESTION.</strong> In the first scene, you meet the host and speak with them. You choose the setting.</p> <p>Here, you may try to convince the host to do something. For example, you might ask them to abandon a serious pursuit, to cut their family ties, or to give away their wealth.</p> <p><strong>THE TRIAL.</strong> In the second dream sequence, the host's greatest fear manifests as a monster that seeks to kill them. The Guide will choose a monster that is proportionate to the severity of your suggestion. If you are trying to dramatically alter the host's life, the Guide may choose a monster of terrifying power.</p> <p>The rules for this fight are the same as outside of the dream, but you cannot die here. All players entering the dream have full health and 10 AP to use. You exit the dream immediately if you reach 0 HP.</p> <p>If you defeat the monster, the target will later wake up believing the dream was a revelation. They will set out to do what you suggested.</p> <p>If the monster kills the host in the dream, the spell ends. Everyone, including the host, wakes up.</p> <p>You may use your abilities within the dream the same way you use them in the outside world, but the effects are fictional and cannot leave the dream world. Any AP that you spend inside of the dream is recovered when you exit.</p>",
          },
        ],
      },
    ],
  },
};
