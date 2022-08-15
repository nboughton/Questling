import { IRole } from 'src/components/models';

export const Ranger: IRole = {
  paths: {
    'Story and Song': [
      {
        name: 'Commune',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You use the language of outland folks, gaining the trust of a nearby commoner. You must invent a local saying to exchange with the NPC; it can be something like "It\'s raining cats and dogs" or "Don\'t judge a book by its cover." Explain what it means at the table.</p> <p>Then, if you ask any of these questions, the NPC will answer to the best of their ability.</p> <ul><li>Is anyone causing trouble?</li> <li>Where can I find the leader?</li> <li>What are folks talking about lately?</li></ul>',
          },
        ],
      },
      {
        name: 'Folk Song',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You sing a song that kindles strong feelings in NPCs nearby. (The song has no effect on hostile creatures.)</p> <p>Read or sing the chorus of a song at the table and describe your performance. You may write your own or use one from another songwriter. Choose a mood to set for your audience:</p> <p><strong>BRIGHT.</strong> Hearts swell with friendly enthusiasm, sparking joyful conversations.</p> <p><strong>SOMBER.</strong> The audience falls silent and begins a sorrowful reflection on their suffering.</p> <p><strong>PROUD.</strong> Zealous feelings are ignited, making the crowd noisy and excitable.</p>',
          },
        ],
      },
      {
        name: 'Speak Myth',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You appeal to a local myth to gain the favor of a commoner. You create the myth using four parts: an obligation, a lesson, a subject, and a story.</p> <p><strong>OBLIGATION.</strong> Decide how the myth affects your target. Choose one: <ul><li>They offer you and your allies food, shelter, and secrecy in their home.</li> <li>They offer you the best reasonable trade on an item they are selling.</li> <li>They go on a small mission, like fetching an item or delivering a message.</li> <li>They admit to a recent wrongdoing.</li> <li>They forgive you for a transgression.</li> <li>They spread a rumor you create.</li> <li>An obligation of your choice, as long as it does not harm them.</li></ul> <p><strong>LESSON.</strong> Using the obligation, say what the lesson of the myth is, like "Give refuge to strangers" or "Always be a fair dealer."</p> <p><strong>SUBJECT.</strong> Name a central person or event.</p> <p><strong>STORY.</strong> Describe a dramatic situation the person or event is famous for. Perhaps they were a missionary who fed the hungry or it was a great flood that killed many.</p> <p>Share the myth with your friends at the table. You may reuse a myth you have created without describing it in full.',
          },
        ],
      },
    ],

    Survivalist: [
      {
        name: 'Remedy',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You scavenge your area for a short time to find a plant-based remedy for an ailment. You find enough for a single dose. The remedy cures temporary illness and eliminates poison.</p>',
          },
        ],
      },
      {
        name: 'Shroud',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You entreat nearby flora to provide the party with protection while camping in wilderness. (There must be plants nearby.) Shrubs and thorny vines will emerge around the campsite to provide concealment. The shroud lasts until you leave the camp.</p> <p>The shroud conceals the light from a small campfire. If hostile creatures advance on the party’s campsite, the trees will rustle and howl to provide 5 minutes of early warning. Creatures can pass through the shroud, but they are hit for 1 HP if they push through. When you regroup (p. 14) inside of the Shroud, your party gains the benefit of a rest.</p>',
          },
        ],
      },
      {
        name: 'Signal',
        subAbilities: [
          {
            ap: 4,
            text: "<p>While in wilderness, you create a distress signal that can be seen by other Rangers. Describe how you send your signal: it can be a smoke signal, a message you leave on a tree, or a similar act.</p> <p>Within the next day, you will meet an NPC Ranger who comes to your aid. Out of respect for you as a colleague, they will stay with you until they finish helping you with a request. Your request cannot be unlimited, and they will not stay with you forever.</p> <p>The NPC Ranger has 10 hit points, and comes with equipment of the Guide's choice. You can ask them to do things, but they are an independent character who will ultimately act according to their own interests and ideals.</p>",
          },
        ],
      },
      {
        name: 'Ritual',
        subAbilities: [
          {
            ap: 4,
            text: '<p>You scavenge your area for a short time to find a single dose of a magic edible. (There must be plants in the area.)</p> <p>When you ingest the edible, you embark on an inner journey over the next hour for supernatural insight. You may learn the truth about one of the following things: <ul> <li>The safest or fastest way to get somewhere.</li> <li>A place where your Nemesis (p.   54) visited within the past day.</li> <li>Whether you are in a real place or if your reality is some kind of deception.</li> <li>Whether an ally is keeping a secret from you. (You learn who they are, but not what the secret is.)</li> </ul></p> <p>If an Invoker invites you along when using their Invoke ability (p. 42), you may use Ritual to join them on their journey to an astral plane. The same rules of the Invoke ability apply to you when joining the Invoker.</p>',
          },
        ],
      },
    ],

    Pathfinder: [
      {
        name: 'Read the Winds',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You concentrate on the language of wind, sensing weather patterns in your region of the world. You are able to glimpse a weather forecast for the next few days in your region of the world.</p>',
          },
          {
            ap: 2,
            text: '<p>If you spend 2 AP on this ability, you may choose the weather that you foresee in your region over the next few days, as long as it is seasonally appropriate. You might choose light rain, a thunderstorm, fog, a heat wave, or any other weather pattern, except for natural disasters like tornadoes or hurricanes.</p>',
          },
        ],
      },
      {
        name: 'Navigate',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You feel the land in your bones. You cannot get lost in wilderness unless magic is inhibiting you.</p>',
          },
          {
            ap: 1,
            text: "<p>You navigate your party to one of the following areas when traveling in wilderness:</p> <p><strong>OASIS.</strong> You find a reprieve that has a small amount of nourishment.</p> <p><strong>SHELTER.</strong> You find a natural cave that offers shelter from harsh weather.</p> <p><strong>RUINS.</strong> You find minor ruins, like an abandoned keep or a withered statue.</p> <p><strong>NEST.</strong> You find the home of an animal or group of animals, like an otter's den.</p>",
          },
        ],
      },
      {
        name: 'Delve',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You make a sound that travels throughout an underground structure, like a natural cave system or dungeon. (You can clap, make an animal noise, or anything else that might echo.) You sense the general layout of the next three areas connected to yours, plus the layout of any passageways between these areas. The Guide will draw you a rudimentary map, noting any major features, like columns, bridges, or crevasses.</p>',
          },
        ],
      },
      {
        name: 'Speak with Trees',
        prefixText:
          '<p>You touch a tree trunk, connecting yourself to the trees of a contiguous forest.</p>',
        subAbilities: [
          {
            ap: 2,
            text: '<p><strong>SEEK.</strong> You ask the tree to search the forest. For example, you may ask to locate a specific creature, an object laying somewhere, or a location, like a cave or building. The tree will commune with its friends and then tell you where it is, how to get there, and how long it will take.</p>',
          },
          {
            ap: 2,
            text: '<p><strong>WARN.</strong> You ask the tree to watch over the party. Until you leave the forest, trees will begin to sway and rustle if you approach a trap or a dangerous creature. The rustling increases as you draw nearer to danger.',
          },
        ],
      },
    ],

    Hunter: [
      {
        name: 'Track',
        subAbilities: [
          {
            ap: 0,
            text: '<p>When you find tracks, you can instantly identify the type of creature that left them. If it is an animal, the Guide will share a fact that you know about them, like their habits or personality traits.</p>',
          },
          {
            ap: 1,
            text: "<p>You can pick up on the trail of an animal of your choice even if there are no tracks nearby, as long as it is native to the environment you're currently in. You must choose a type of animal to find, like a boar or a squirrel. (You can't use this to find a specific creature.) You find the creature after a short search.</p>",
          },
        ],
      },
      {
        name: 'Farshot',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You briefly sharpen your senses, surpassing your normal limits. You can make a ranged attack on a faraway target that you can see, even if it is out of range.</p>',
          },
        ],
      },
      {
        name: 'Deadeye',
        subAbilities: [
          {
            ap: 0,
            text: 'Whenever you roll a 20 with a ranged weapon, you can name a specific limb on a creature to hit with your projectile. The limb becomes disabled and cannot be used until it is restored by a healer.',
          },
          {
            ap: 3,
            text: '<p>You take aim and focus your senses, automatically scoring a triumph with a ranged weapon on a nearby creature or object that you target. The hit disables the targeted limb.</p>',
          },
        ],
      },
      {
        name: 'Stalk',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You and your party can carefully stalk tracked prey without it noticing you, as long as you try to be quiet. Describe the formation of you and/or your party as you go on the hunt.</p>',
          },
          {
            ap: 2,
            text: '<p>When you discover the creature or creatures you were tracking, you can ambush them, even if they were preparing to ambush you. Your party takes the first round, and you get an extra turn.</p>',
          },
        ],
      },
      {
        name: 'Nemesis',
        subAbilities: [
          {
            ap: 4,
            text: '<p>Choose a specific creature you have met before. You mark them as your nemesis. You may only have one nemesis at a time, and you may freely remove the mark at any time.</p> <p>Your predatory senses allow you to detect whenever your nemesis is present in your scene, even if they are hidden. You feel a tingle in the temples of your forehead when your nemesis is nearby.</p> <p>You gain these additional benefits when fighting your nemesis: <ul> <li>They cannot surprise you by ambush.</li> <li>You may use your Farshot ability against them at will for no AP cost.</li> <li>When they are nearby, you can sense their location well enough to strike them with physical attacks, even if they are concealed or invisible.</li> </ul> </p>',
          },
        ],
      },
    ],

    Friend: [
      {
        name: 'Speak with Animal',
        subAbilities: [
          {
            ap: 1,
            text: "<p>You touch an animal that is not currently hostile toward you, forming a telepathic bond with it for the next minute. You are capable of interpreting the animal's thoughts and feelings, and you can have an exchange of communication with it. It can give basic information about things, like how it feels, what it has seen, and what it wants, but it does not understand complex ideas.</p>",
          },
        ],
      },
      {
        name: 'Animal Partner',
        subAbilities: [
          {
            ap: 4,
            text: "<p>You recruit a nearby animal companion who will follow your orders to the best of its ability. It can't be smaller than a mouse or bigger than a horse. You may only have one partner at a time.</p> <p>The animal is an NPC played by the Guide that acts in addition to you during your turn. It won't willingly leave your area, and if you are separated, it will try to find you. It cannot speak to you, but it can vaguely sense your mood and intentions.Your animal partner has 6 HP and can make basic attacks for 2 damage.</p>",
          },
        ],
      },
      {
        name: 'Courier',
        subAbilities: [
          {
            ap: 1,
            text: "<p>You find a friendly animal nearby and whisper to it, giving it instructions to deliver an item. The item must be small and light enough for the animal to reasonably carry. You can have the animal deliver the item to a place or a specific person. The destination must be within a day's travel time.</p>",
          },
        ],
      },
      {
        name: 'Pair Bond',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You develop a unique telepathic bond with your animal partner that lasts until you recruit a new one. You now passively experience your partner's senses; you catch glimpses of what they see, hear, and feel. You also feel a shadow of pain whenever they are harmed.</p> <p>At any time, you may enter a trance to leave your own body and take control of your partner. You remain dimly aware of what's happening around your own body. While in the trance, you may control your partner as if they were yourself, though you cannot speak. You may exit the trance at any time.</p>",
          },
        ],
      },
      {
        name: 'Whisper on the Wind',
        subAbilities: [
          {
            ap: 4,
            text: '<p>You whisper a message carried by the wind in all directions. You must have a clear sight line to the sky for the spell to work. The message summons a flying animal to your location. You can petition any kind of flying animal, like a raven or a griffin.</p> <p>The animal arrives one hour later. As long as you are friendly to it, the animal will obey your commands for the next day. For example, you can have it deliver messages, give you a ride, or cause distractions. The animal will not attack enemies unless it is attacked first.</p>',
          },
        ],
      },
    ],

    Legendary: [
      {
        name: 'Wild Celebrity',
        prefixText:
          '<p>Your presence is now respected by wild creatures everywhere. Wild animals, except bosses, will no longer attack you unless you harm them. (Trained animals and pets can still be commanded to harm you.) You may now use the Speak With Animal (p. 55) and Speak with Trees (p. 53) abilities for no AP cost if you have already learned them.</p> <p>Your Animal Partner ability (p. 55) now recruits a more powerful animal. Your partner has 10 HP, can hit for 2 HP, and attack twice per turn. If you have an existing animal partner, it is upgraded to these stats.</p>',
        subAbilities: [
          {
            ap: 6,
            text: '<p>You send a call while in wilderness to recruit a small army of animals. They stay with you for the next day. You can choose any combination of wild animals as long as they are native to the area. You may command them, and they all act together during your turn. The group is treated like a single creature with 20 hit points, and they collectively hit for 6 HP, distributed among up to 6 targets.</p>',
          },
        ],
      },
      {
        name: 'Slayer',
        subAbilities: [
          {
            ap: 4,
            text: '<p>Your experience as a Ranger has taught you to deal with overwhelming odds. Once per scene, you may devastate a group of minions in an impressive acrobatic fashion. You instantly kill half of all nearby minions, rounding up.</p>',
          },
        ],
      },
      {
        name: 'Friend of the Land',
        prefixText:
          "<p>You become the friend of a wilderness region that has meaning to you, like a forest or a valley. The region cannot already be under the control of a boss.</p> <p>You are known to all living things in this area as its ally. You may now use the Shroud (p. 52), Speak with Trees (p. 53), Navigate (p. 53), Track (p. 54), and Speak With Animal (p. 55) abilities within your chosen land for no AP cost, if you have already learned them.</p> <p>When you become the Friend of the Land, a group of volunteer creatures living in your chosen land will create a natural fort for you in a location of your choice. It takes one week to create. It should resemble in spirit something animals might create, like a giant ant hill, a meerkat manor, a nest in the trees, or a beaver's dam. It has up to 20 rooms, including a kitchen, a great hall, and an armory. The keep is watched over full-time by allied animal sentries who will notify you of intruders or guests.</p> <p>Additionally, a small staff of volunteer animals will routinely forage for you, making sure the keep is stocked with vegetables, fruits, and other natural foods from the area that they can collect. They will occasionally invite you to play with them.</p>",
        subAbilities: [],
      },
    ],
  },
};
