import { IRole } from 'src/components/models';

export const Spy: IRole = {
  paths: {
    Charisma: [
      {
        name: 'Cosmopolitan',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You are an expert in the study of cosmopolitan cultures, particularly in cities and nations. If you are falsely presenting as a citizen or official of a city or nation and your authenticity is challenged, you may use a local mannerism to fool common people.</p> <p>You must come up with the mannerism and describe it to the table. It can be a gesture, like a special handshake, a common saying, or some other idiosyncrasy from the people you are pretending to belong to.</p>',
          },
        ],
      },
      {
        name: 'Silver Tongue',
        subAbilities: [
          {
            ap: 1,
            text: "<p>If you are caught doing something prohibited or mischevious, you can use clever thinking to evade suspicion.</p> <p>You must appeal to something that your adversaries find agreeable. The Guide will choose one of these as the right answer, and secretly write it down:</p> <p><strong>ORDERS.</strong> Someone with authority commanded you to do it.</p> <p><strong>IGNORANCE.</strong> You didn't know better. It was a genuine mixup!</p> <p><strong>CRAFT.</strong> You offer something of value from your inventory to make this go away.</p> <p>You must guess the right approach, and describe how you make the appeal.</p>",
          },
          {
            ap: 1,
            text: '<p>For 1 AP, the Guide eliminates one of the incorrect choices.</p>',
          },
        ],
        suffixText:
          '<p>After you give your story, the Guide will reveal the choice they wrote. If you guess correctly, your adversaries will leave you alone.</p>',
      },
      {
        name: "Don't You Know Who I Am?",
        subAbilities: [
          {
            ap: 1,
            text: '<p>You impress common folk and minions by pretending to be someone notable.</p> <p>You initiate the ruse by giving a special wink to a party member. Then, each of your nearby party members must proclaim an incredible fact that creates your identity. For example, a party member might begin by calling attention to you as a fabled writer, a storied warrior, or a sports hero. The other members of the party should build on this fake identity until everyone has contributed. Each claim should be more fantastical than the previous one.</p> <p>When everyone is finished, you draw a captive audience of nearby creatures who crowd around you.</p>',
          },
        ],
      },
    ],

    Termination: [
      {
        name: 'Sneak Attack',
        prefixText:
          '<p>Once per round, when a nearby foe attacks a creature other than you, you may exploit their focus. You may immediately move behind them to perform one of the following actions:</p>',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You make a basic attack on them.</p>',
          },
          {
            ap: 1,
            text: '<p>You incapacitate a commoner or minion by touching one of their pressure points. They fall to the ground unconscious for the next 10 minutes, or until they are harmed.</p>',
          },
          {
            ap: 1,
            text: '<p>You kill a commoner or minion instantly. Describe how you take them out.</p>',
          },
        ],
      },
      {
        name: 'Poison',
        prefixText:
          '<p>You combine basic goods from any well-stocked general store to create poison. You create enough poison for one use. You can apply it to weapons, put it in drinks or meals, or serve it to a creature directly. Regardless of delivery method, each use of the poison can only affect one creature. Choose any combination of effects:</p>',
        subAbilities: [
          {
            ap: 1,
            text: '<p><strong>BLUE.</strong> The victim falls asleep for 1 hour.</p>',
          },
          {
            ap: 2,
            text: '<p><strong>WHITE.</strong> The victim writhes in extreme pain for 1 hour and is unable to speak.</p>',
          },
          {
            ap: 3,
            text: '<p><strong>PURPLE.</strong> The victim collapses and is paralyzed for the next day.</p>',
          },
          {
            ap: 4,
            text: '<p><strong>BLACK.</strong> Commoners and minions are instantly killed. Bosses are hit for 10 HP.</p>',
          },
          {
            ap: 6,
            text: '<p><strong>CLEAR.</strong> The victim experiences no symptoms and dies 1 week later. (This does not work on bosses.)</p>',
          },
        ],
      },
      {
        name: 'Death Hand',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> A single-shot hand cannon that uses a silent magic charge to propel a slug. The Death Hand can sense your target and guide your hand to make a perfect shot on any target you can see in your scene, including those that are far away. The shot hits for 6 HP. It instantly kills commoners and minions.</p>',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You must spend 3 AP and one turn each time you recharge the weapon.</p>',
          },
        ],
      },
      {
        name: 'Bounty',
        roll: true,
        subAbilities: [
          {
            ap: 5,
            text: "<p>You place a bounty on a commoner or minion's head for their capture or death. You must offer an item of value as a reward in addition to the AP cost of this ability that is at least rare in quality. Bounty hunters will compete for the prize.</p> <p>If for capture, you may specify where they are to be taken. If you mark them for death, you may require any manner of proof that the deed was done.</p>",
            table: [
              {
                floor: 1,
                ceiling: 10,
                result: 'The target learns of the bounty and places one on your head. You are not sure who bounty hunters will reach first.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'The deed will be done by the end of your next play session.',
              },
              {
                floor: 20,
                result: 'The deed will be done by the end of your play session.',
              },
            ],
          },
        ],
      },
    ],

    Concealment: [
      {
        name: 'Strap',
        subAbilities: [
          {
            ap: 0,
            text: '<p>Unless you are actively searched by another creature, you can conceal up to two weapons in your clothing without being noticed, provided you’re wearing enough to reasonably conceal them.</p>',
          },
        ],
      },
      {
        name: 'Disguise',
        subAbilities: [
          {
            ap: 1,
            text: '<p>Any time you are in a room like a bedroom, armory, or office, you may find objects to use to put together a convincing disguise. Depending on where you are, the disguise will offer at least one signature element of your deception, like a uniform, a membership insignia, or a style of dress. The disguise automatically fools commoners, but minions and bosses may question you.</p>',
          },
        ],
      },
      {
        name: 'Blink Pack',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> A magical messenger pack with a hidden switch in the clasp. When activated, the switch turns the bag’s mouth into a portal to a shadow plane where secret objects may be stored. When the switch is deactivated, the bag functions normally. Spy items stored in the pack do not count against your inventory limit. (This allows you to carry more than 12 items.)</p> <p>The pack is paired with a magic amulet that has a button on it.</p>',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You press the button on the amulet. The Blink Pack is teleported to your hands from wherever it is in the omniverse.</p>',
          },
        ],
      },
      {
        name: 'Needful Hilt',
        prefixText: '<p><strong>MAGIC ITEM.</strong> A hilt to a basic weapon, like a sword or dagger.</p>',
        subAbilities: [
          {
            ap: 0,
            text: '<p>If you imagine a common weapon while holding it, the hilt instantly morphs into that weapon. It hits for 2 HP in any form. When you no longer need the weapon, it reverts to its form as a simple hilt.</p>',
          },
        ],
      },
      {
        name: 'Shadow',
        prefixText: '<p><strong>MAGIC ITEM.</strong> A magic cape that makes everything but your shadow invisible.</p>',
        subAbilities: [
          {
            ap: 2,
            text: "<p>When you activate the cape's ability, it shimmers and sparkles briefly before you and everything you are carrying vanishes. You are invisible for the next minute, but you still cast a shadow when you move. The shadow disappears when you are still.</p> <p>While invisible, common folk and minions won't notice you passing by unless you make a lot of noise. If you attack while invisible, the cape deactivates and you become visible again.</p>",
          },
        ],
      },
    ],

    Surveillance: [
      {
        name: 'Tracker',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> A pair of devices that allows you to track something.</p> <p>The kit includes a magical tag the size of a tiny bead that is sticky and can be applied to most surfaces. The tracker is linked to a magic compass that shows the direction the tag is in.</p> <p>The arrow on the compass is black. It turns gold when the tag is in your scene, and begins to vibrate softly.</p>',
        subAbilities: [],
      },
      {
        name: 'Spyglasses',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> Eyeglasses that let you see in natural darkness as if it were daylight. The glasses can be permanently upgraded with these capabilities:</p>',
        subAbilities: [
          {
            ap: 3,
            text: '<p>Add the ability to magnify the details of small nearby objects, or zoom to see faraway things clearly.</p>',
          },
          {
            ap: 4,
            text: '<p>Add infrared vision that lets you see an outline of things that are generating heat nearby. This ability works through walls.</p>',
          },
          {
            ap: 6,
            text: '<p>Add the ability to detect whether something is an illusion. Illusions you detect appear to flicker and distort.</p>',
          },
          {
            ap: 0,
            text: '<p>Each of these modes can be toggled while wearing the Spyglasses by turning a dial on the side of the device.</p>',
          },
        ],
      },
      {
        name: 'Cloner',
        prefixText: '<p><strong>MAGIC ITEM.</strong> A magic amulet that allows you to eavesdrop on a communications device.</p>',
        subAbilities: [
          {
            ap: 0,
            text: '<p>When holding the Cloner next to a spell or object that transmits communications, you may clone its signal. You share a telepathic link with the Cloner, and you automatically hear any messages being transmitted through the cloned device in your mind. You may only clone one device at a time; pairing the Cloner with a new device will break the link with the previous one.</p>',
          },
        ],
      },
      {
        name: 'Seeker',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> The Seeker is a levitating orb as large as the palm of your hand that responds to your commands telepathically. It shimmers and is almost invisible, but it makes a low humming noise as it moves.</p>',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You can make the Seeker travel just out of your sight or to an adjacent room. It can tell you how many creatures are in a space, but not what kinds.</p>',
          },
          {
            ap: 1,
            text: '<p>The Seeker gives you a rudimentary mental map of an adjacent room. The Guide will draw an outline of the room, highlight any major features (like columns or crevasses), and mark the exact location of any creatures.</p>',
          },
        ],
      },
    ],

    Stenography: [
      {
        name: 'Dossier',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> A magic book that copies things. You can make a Dossier of any size — from a pocket-sized folio to a coffee table book.</p>',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You can use the book to copy any kind of writing or drawing that is pressed against its pages. For instance, if you press a handwritten letter against one of the Dossier’s pages, a legible but imperfect copy will appear inside.</p>',
          },
        ],
      },
      {
        name: 'Mimic',
        prefixText:
          "<p><strong>MAGIC ITEM.</strong> A magical pen that guides your hand to copy any writer's personal style. On the end opposite the pen tip is a magical stamp that can create forgeries of official seals. By bringing the Mimic within reach of a handwritten document, it automatically learns how to reproduce the document's handwriting styles, signatures, and seals.</p>",
        subAbilities: [
          {
            ap: 2,
            text: '<p>You use Mimic to create a single document forged in any style the pen has previously learned, including the reproduction of any official stamps or seals</p>',
          },
        ],
      },
      {
        name: 'Listener',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> A small magic gem that can be activated to record sounds nearby for up to 1 hour. If you have the Cloner (p. 78), you can insert the Listener into a socket on the amulet. When they are paired, you can have the Listener record sounds that the Cloner intercepts. The device can record up to 1 hour of sound, and you can squeeze it softly to have it audibly play back the sound. Using the device to record makes it completely forget the previous recording.</p>',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You activate the Listener. It records anything it hears, paying particular attention to spoken words.</p>',
          },
        ],
      },
      {
        name: 'Crypto',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> Crypto is a ring of opaque glass that glows when brought near glyphs, like writing on a piece of paper or stone etchings.</p>',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You activate Crypto to translate languages or decode secret messages. The ring reads any object you bring within reach. A translation of the source material emerges, scrolling around the band as you read it. When it is finished translating something, the ring deactivates.</p>',
          },
        ],
      },
    ],

    Infiltration: [
      {
        name: 'Feather Hook',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> A magical grappling hook that gently glides itself upward, like a balloon, until it reaches and attaches to a ledge. You can tie any length of rope to the hook.</p>',
        subAbilities: [
          {
            ap: 0,
            text: '<p>Activate the Feather Hook.</p>',
          },
        ],
      },
      {
        name: 'Bricolage',
        subAbilities: [
          {
            ap: 1,
            text: '<p>Your skills of improvisation are unparalleled. When you are in a room with everyday objects at your disposal, you may hastily craft one of the following items in less than 1 minute:</p> <p><strong>TRIPWIRE.</strong> You create a wire attached to an auditory trigger that makes a loud noise when someone crosses it.</p> <p><strong>POISON TRAP.</strong> If you have poison, you may create a small floor trap that poisons the first creature to step on it.</p> <p><strong>SIMPLE WEAPON.</strong> You fashion a makeshift weapon that hits for 2 HP.</p> <p><strong>PERSICOPE.</strong> You can make a small periscope that allows you to look over objects and around doors that have a bit of clearance.</p>',
          },
        ],
      },
      {
        name: 'Needful Key',
        prefixText:
          "<p><strong>MAGIC ITEM.</strong> A key that magically senses the mechanism of a physical lock and morphs itself to fit it perfectly. In its default form, the device is a simple key with no teeth. By twisting the key's handle, you can make it revert to its default form.</p>",
        subAbilities: [
          {
            ap: 2,
            text: '<p>The key morphs to fit a new lock. You must spend 2 AP each time you make the key morph to fit a new lock. The key remembers locks it has previously defeated and can morph to fit them for no AP cost.</p>',
          },
        ],
      },
      {
        name: 'Blueprint',
        prefixText: '<p><strong>MAGIC ITEM.</strong> A magical folio that reveals the floorplan of a building.</p>',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You press the Blueprint against an interior wall of a building. Magic ink appears, revealing the building's layout for the entire floor you are currently on.</p> <p>The Guide will draw you a basic map of the building, including an outline showing the shape of rooms and hallways and marks showing where doors and windows are. The Blueprint only works on artificial structures. (It does not reveal the layout of caves or other natural systems.)</p> <p>If you also have the Seeker (p. 78), the Blueprint can show its location in real time, as well as the location of any nearby creatures that the Seeker detects.</p>",
          },
        ],
      },
    ],

    Impersonation: [
      {
        name: 'Persona',
        prefixText:
          '<p>You carefully prepare a convincing alternate identity. You cannot create a persona of an existing person or the identity of someone who holds an exclusive position, like the ruler of an existing nation.</p> <p>Each persona consists of a wardrobe, credentials, and a backstory. You may create and describe each element of the persona.</p> <p>When you use your alternate identity, you must outwardly present yourself as that person by wearing their costume.</p>',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You create the persona of a common person of average means, like a farmer, artisan, traveling salesperson, priest, soldier, or teacher.</p> <p>When using a commoner's identity, you can effortlessly blend into crowds and travel unnoticed in public spaces.</p>",
          },
          {
            ap: 4,
            text: "<p>You create the persona of an officer (someone in a position of formal authority), like a politician, judge, military officer, guild leader, or ship captain.</p> <p>When using an officer's identity, you may: <ul> <li>Enter restricted areas that your rank and affiliation gives you access to.</li> <li>Give mundane orders to people you outrank, like running errands or keeping watch.</li> </ul> </p>",
          },
          {
            ap: 6,
            text: "<p>You create the persona of an aristocrat, like a prominent socialite, wealthy business owner, ambassador, or governor.</p> <p>When using an aristocrat's identity, you may: <ul> <li>Enter exclusive spaces for the rich and famous, like private clubs or balls.</li> <li>Seek audience with local rulers.</li> <li>Spend 1 AP for a get out of jail free card that pardons you for minor crimes.</li> </ul> </p>",
          },
        ],
      },
    ],

    Legendary: [
      {
        name: 'Shadow Cutter',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> The Shadow Cutter is a wearable bracelet that you can stretch to form a hoop large enough to crawl through.</p>',
        subAbilities: [
          {
            ap: 3,
            text: "<p>When you press the device against a solid surface, it can be activated to create a hole of an equal circumference, up to 1 meter deep. When you're done using it, it collapses to its original size.</p> <p>When activated, a low buzzing sound can be heard by all creatures nearby. The material behind the device is instantly teleported to a random shadow plane.</p>",
          },
        ],
      },
      {
        name: 'The Artifice',
        prefixText:
          '<p><strong>MAGIC ITEM.</strong> A small mask that projects an illusion, transforming your image and voice. The mask records the appearance and voice of every nearby creature you encounter and remembers them forever.</p>',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You activate the mask, projecting a convincing illusion that gives you the appearance of any creature it remembers. Additionally, it changes your voice to sound like the creature you're impersonating. It is capable of fooling everyone but the impersonated creature's closest friends and family.</p>",
          },
        ],
      },
      {
        name: 'Nightcrawler',
        prefixText: '<p>You are a legendary charmer and intelligence gatherer, capable of quickly extracting sensitive information.</p>',
        subAbilities: [
          {
            ap: 4,
            text: "<p>When you infiltrate a person's office, encampment, or home, you discover sensitive information about them. The Guide chooses two things from this list to reveal to you: <ul> <li>The identity of an important associate.</li> <li>A location they will travel to, with the time and date.</li> <li>A secret that would embarrass them if revealed.</li> <li>Their financial situation, including who they owe their largest debt to or who owes them the largest debt.</li> <li>Their true feelings about you or your party.</li> <li>Their strongest allegiance, whether to a government, guild, or other organization.</li> </ul> </p> <p>The Guide will imagine the specifics of the information you receive. They will also choose the document that reveals it, like a receipt, a diary, or a letter.</p>",
          },
        ],
      },
    ],
  },
};
