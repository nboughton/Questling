import { IRole } from 'src/components/models';

export const Naturalist: IRole = {
  name: 'Naturalist',
  id: 'Core-Naturalist',
  paths: {
    Shapeshifter: [
      {
        name: 'Animal Form',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You take the form of a wild animal, adopting its shape, senses, and range of motion. You may choose any creature that is no smaller than a mouse and no larger than a horse. Everything you carry becomes part of your animal form.</p> <p>While in animal form, you have 6 HP. You may make basic attacks that hit for 2 HP. You can't cast spells, use items, or speak languages while transformed.</p> <p>You can return to your normal form at any time. When transforming back, you regain the hit points you had before you transformed. Falling to 0 hit points while transformed instantly returns you to your normal form.</p>",
          },
        ],
      },
      {
        name: 'Gills',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You enchant a small amount of water in a container that you are holding. When you spritz the water on a creature, they grow small but visible gills, allowing them to breathe underwater for up to 1 hour. This spell enchants enough water to use 6 times.</p>',
          },
        ],
      },
      {
        name: 'Steelsprout',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You extend your hand and close your eyes, permanently turning a nearby metal object into a weave of delicate plants. (The object cannot have magical properties or be larger than a door.) Describe the plants that the object turns into.</p>',
          },
        ],
      },
      {
        name: 'Petrify',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You turn the surface of a nearby commoner or minion to stone for the next minute. The target cannot move, see, hear, or speak during this time. The creature has 50 hit points while petrified. If its hit points are reduced to 0 during the spell, it shatters to pieces and dies.</p>',
          },
          {
            ap: 2,
            text: "<p>You encase your armor or clothing with a chitinous shell. The shell absorbs up to 10 hit points of damage. If you were hit by a non- magical weapon, the weapon shatters to pieces. The carapace crumbles away immediately after it takes damage. You may cast this spell as a reaction to an incoming attack during another creature's turn.</p>",
          },
        ],
      },
      {
        name: 'Shapeshift',
        subAbilities: [
          {
            ap: 3,
            text: '<p>This is a master version of your Animal Form spell (p. 58). The rules are the same, except for these differences: <ul> <li>You can choose a creature no smaller than a housefly and no larger than an elephant.</li> <li>You have 10 HP in animal form.</li> <li>Your animal form attacks hit for 3 HP.</li> <li>You can send messages telepathically to members of the party.</li> </ul> </p>',
          },
        ],
      },
    ],

    Summoner: [
      {
        name: 'Thorn',
        roll: true,
        subAbilities: [
          {
            ap: 0,
            text: "<p>You open your palm, conjuring a poisonous thorn that you shoot in a straight line toward a nearby target creature or object. The thorn hits for 2 HP.</p> <p><strong>20:</strong> The thorn's poison is amplified. If you hit an organic creature, its skin becomes swollen, it cannot see beyond its reach, and it can't speak or cast spells until the end of its next turn.</p>",
          },
        ],
      },
      {
        name: 'Wild Font',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You touch a container holding food, water, or oil. For the next minute, the container summons a surplus of its contents, spilling the excess material out generously. For example, if you touch a pitcher of water, it will overflow and cover the floor. Or if you touch a sack of grain, it will burst open, creating a large pile.</p>',
          },
        ],
      },
      {
        name: 'Evening Star',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You summon a wisp of light high in the sky directly above you. (You must be outdoors to cast this spell.) For the next hour, the wisp sheds light on a huge area, allowing you to see far in the distance. It matches your movement such that it is always located above you. The area the light touches looks as if it were lit by daylight.</p>',
          },
        ],
      },
      {
        name: 'Aurora',
        subAbilities: [
          {
            ap: 5,
            text: "<p>Your eyes glitter like dancing wisps as you conjure a dazzling prismatic aurora above you in the sky. The aurora is visible to creatures up to a kilometer away and lasts for the next 10 minutes.</p> <p><strong>COMMONERS.</strong> Any common folk who can see the aurora are dazzled and stop what they are doing to stare at it.</p> <p><strong>MINIONS.</strong> Minions are also dazzled by the spell and stop what they are doing to stare at it. Hitting a minion frees them from the spell's effects.</p> <p><strong>BOSSES.</strong> The Guide must roll the die. On a 2-10, bosses are dazzled and must choose between moving and acting during their turn. On a 1, they are stunned in place until the spell ends or if they are hit.</p>",
          },
        ],
      },
      {
        name: 'Echoes of Creation',
        subAbilities: [
          {
            ap: 6,
            text: '<p>You hum a reverberating melody, summoning a coterie of magical wisps from the ages of creation. The wisps were powerful beings of light who once roamed the omniverse. Now, like dying stars, these ethereal remnants are burning the last of their energy. They are no longer sentient, but seem to sense the world around them. For the next minute, the wisps float about the area, restoring the hit points of all creatures and animating new plant life. Every creature in the scene stops what they are doing while the wisps are present and remain still with awe until they fade to the beyond.</p>',
          },
        ],
      },
    ],

    Elementalist: [
      {
        name: 'Freeze',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You blow cool air, creating freezing winds that swirl around a nearby creature or object. Affected creatures feel a deep chill in their bones and are hit for 1 HP. You can use the spell to snuff out small fires.</p>',
          },
          {
            ap: 2,
            text: '<p>You freeze a nearby commoner, minion, or object, encasing it in ice until you leave the scene. If you freeze a creature, it cannot move or act. The ice shatters, and the creature is freed if it takes any additional damage.</p>',
          },
        ],
      },
      {
        name: 'Burn',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You blow hot air, creating scorching winds that swirl around a nearby creature or object. The heat is enough to make the creatures very uncomfortable but not enough to harm them.</p>',
          },
          {
            ap: 1,
            text: '<p>You overcharge the spell and ignite the target in flame instead, hitting it for 2 damage and setting it ablaze.</p>',
          },
        ],
      },
      {
        name: 'Shock',
        subAbilities: [
          {
            ap: 4,
            text: '<p>Choose a target creature or object you can see. A bolt of lightning strikes it from the sky or from your hands, dealing 8 damage and creating a deafening blast of thunder. If the creature has metal connected to their body, it becomes molten, hitting them for an extra 2 HP.</p>',
          },
        ],
      },
      {
        name: 'Fireball',
        roll: true,
        subAbilities: [
          {
            ap: 5,
            text: '<p>You shape an orb of fire suspended in the air in front of you and send it streaking in a straight line toward a target you can see. The fireball explodes on contact, dealing 6 damage to any creatures and objects it hits. You can shape the spell to avoid allies or creatures you do not want to harm.</p>',
            table: [
              {
                floor: 1,
                result: 'It explodes in your face, hitting you and up to 3 nearby creatures.',
              },
              {
                floor: 2,
                ceiling: 5,
                result: "The fireball misses and hits random targets of the Guide's choice.",
              },
              {
                floor: 6,
                ceiling: 10,
                result: 'Choose one: the explosion hits you and up to 4 creatures near impact, or the fireball fizzles into a cloud of smoke.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'The explosion hits up to 4 creatures near the point of impact.',
              },
              {
                floor: 20,
                result: 'The explosion hits all creatures near the point of impact for double damage.',
              },
            ],
          },
        ],
      },
    ],

    Stormcaller: [
      {
        name: 'Cloudcall',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You swirl your hands in the air, producing a thick fog centered on you. The fog rolls out rapidly, spilling around corners and down slopes. Within a few seconds, you blanket everything nearby in fog. Creatures inside the fog cannot see beyond their reach, preventing them from making ranged attacks. The fog disperses after you leave the area, or if the area is hit by strong winds.</p>',
          },
        ],
      },
      {
        name: 'Vortex',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You create a howling vortex within a body of liquid that you can see. The vortex lasts until you leave the area. Any creatures touching the vortex are violently sucked in, submerged, and then spit out, each taking 2 damage.</p>',
          },
        ],
      },
      {
        name: 'Gale',
        subAbilities: [
          {
            ap: 3,
            text: "<p>You close your eyes and stir the air, shaping the winds around you. A gale forms that you can spread across an area of any size and shape in your scene, as long as you can see its area of effect. Inside the area of effect, wind blows at ferocious speeds, kicking up dust and sending small objects flying. Creatures inside can't see far away, only what's nearby.</p> <p>When you begin the spell, the gust knocks creatures to the ground and sends them tumbling backward until they leave the area of effect. Creatures outside of the gust cannot enter it unless they are larger than the area of effect.</p>",
          },
        ],
      },
      {
        name: 'Riverfury',
        subAbilities: [
          {
            ap: 4,
            text: '<p>You whisper a magical incantation to a flowing river within range. The river gathers a surge of strength upstream. A torrent of water arrives at your location in the path of the river 15 seconds later. All creatures caught in the torrent are swept downstream and deposited on shore far away, beyond where you can see.</p>',
          },
        ],
      },
      {
        name: 'Stormcall',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You produce a circle of dark, electrically charged clouds somewhere you can see in the sky. The storm lasts until you leave the scene. While the storm is active, you may call upon it to produce these effects:</p>',
          },
          {
            ap: 1,
            text: '<p>You cause a downpour.</p>',
          },
          {
            ap: 1,
            text: '<p>A deafening crack of thunder shakes the ground. All creatures under the storm cannot hear anything beyond their reach until the end of the scene.</p>',
          },
          {
            ap: 3,
            text: '<p>If you have learned the Shock ability, you may use it for 3 AP.</p>',
          },
          {
            ap: 'X',
            text: '<p>A bolt of chain lightning rips through NPCs you can see, hitting them each for 4 HP. Spend 1 AP per target.</p>',
          },
        ],
      },
    ],

    Spiritcaller: [
      {
        name: 'Wild Aspect',
        subAbilities: [
          {
            ap: 1,
            text: '<p><strong>EAGLE.</strong> You gain eagle-eye vision for the next minute. You can see anything in your line of sight clearly, even if it is far away, and you can detect faraway movement that would be imperceptible to a normal person.</p>',
          },
          {
            ap: 2,
            text: '<p><strong>CAT.</strong> You purr softly under your breath, imbuing up to 6 nearby creatures with the spirit of the cat. For the next hour, affected creatures gain the ability to see things nearby in complete darkness as if they were in a dimly lit room. The effect cannot pierce magical darkness. Affected creatures may occasionally feel the urge to stop what they are doing and clean themselves.</p>',
          },
          {
            ap: 2,
            text: '<p><strong>WOLF.</strong> You howl, imbuing up to 6 nearby creatures with haste. (Howl at the table.) For the next hour, creatures affected by the spell can outrun any other creatures while traveling by foot.</p>',
          },
        ],
      },
      {
        name: 'Prey Sense',
        subAbilities: [
          {
            ap: 1,
            text: "<p>You sharpen your sense of danger for the next hour. You feel a subtle signal in your body whenever you will imminently be threatened by another creature. (The hair on your skin might raise, or you might feel a tingling in your bones.) This includes creatures that you can't see.</p> <p>If you detect a creature this way, your party cannot be ambushed. (If you detect a creature trying to attack you, your party gets the first round in combat.)</p>",
          },
        ],
      },
      {
        name: "Nature's Watch",
        subAbilities: [
          {
            ap: 3,
            text: '<p>You extend your senses for the next hour. Choose two effects each time you use this ability:</p> <p><strong>AURASIGHT.</strong> Detect a faint outline around anything that is currently affected by a spell.</p> <p><strong>INFRASIGHT.</strong> Detect objects nearby whose relative heat makes them stand out, like creatures with warm bodies. This works through walls.</p> <p><strong>DARKSIGHT.</strong> See in darkness nearby as if it were dimly lit.</p> <p><strong>MIRRORSIGHT.</strong> See around corners inside of enclosed spaces, like buildings. You must be within reach of the corner. (For example, you can see around the bend of a hallway.)</p> <p><strong>REALSIGHT.</strong> Detect whether something is an illusion. Illusions you detect with this spell appear to flicker.</p>',
          },
        ],
      },
    ],

    Ecologist: [
      {
        name: 'Command Nature',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You whisper a rhyming couplet to the living plants around you. You can write your own or borrow one from another author. Use one that plants might appreciate, like "Hear my voice ring, and welcome the spring."</p> <p>Your brief poem entreats the plants to produce a harmless effect by moving or growing slightly. The things you want to manipulate must be within range. You may make trees rustle, cause leaves to fall, get plants to bloom, vines to expand, and seeds to sprout.</p>',
          },
          {
            ap: 1,
            text: '<p>If you can explain how, you can have the effect deal 2 HP of damage to a nearby target. For example, you might have vines grow thorns and lash a creature, or have a tree shake its acorns on their head violently.</p>',
          },
        ],
      },
      {
        name: 'Memories of Stone',
        subAbilities: [
          {
            ap: 3,
            text: '<p>f you encounter a stone monument, like a mountain, canyon, or statue, you may touch it to channel its ancient wisdom. You must tell the stone a story about your family — perhaps a memory of a gathering, like a holiday. Give this story at the table.</p> <p>The monument reciprocates your offering by sharing its wisdom. <ul> <li>You sense whether this world is real and natural, or some kind of machination.</li> <li>You sense whether there are any long-lost monuments beneath the surface, like hidden temples or ancient vaults.</li> <li>You vaguely sense the most powerful lost artifact in this world and the region where it might be located.</li></ul></p>',
          },
        ],
      },
      {
        name: 'Shift Season',
        roll: true,
        subAbilities: [
          {
            ap: 4,
            text: '<p>You manipulate the elements to change the current season everywhere within 1 kilometer of your location. You can choose any season for the world you inhabit, and the effect lasts for the next day. The spell takes a minute to cast; the effect emanates rapidly from your location. The weather inside the zone will be unpredictable, but typical of the season you choose. For example, if you turn a hot season to a cold one, you may bring snow.</p>',
            table: [
              {
                floor: 1,
                result: 'You accidentally cause a natural disaster to form. The Guide chooses the disaster.',
              },
              {
                floor: 2,
                ceiling: 5,
                result: 'The Guide chooses the season, and a storm begins to affect the region that makes travel more difficult.',
              },
              {
                floor: 6,
                ceiling: 10,
                result: 'You choose the season.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'You choose the season and the weather (excluding disasters).',
              },
              {
                floor: 20,
                result:
                  'You choose the season and may also choose the weather inside the area (excluding natural disasters like hurricanes). The effect lasts for one month.',
              },
            ],
          },
        ],
      },
    ],

    Legendary: [
      {
        name: "Nature's Wrath",
        subAbilities: [
          {
            ap: 7,
            text: "<p>You channel elemental fury. You create a storm centered on you with a radius of 1 kilometer. It lasts as long as you wish to channel it, but you take 1 HP of damage for each turn you spend maintaining the spell. You may choose the size of the storm eye, which is safe inside. Choose the nature of the disaster each time you cast this spell:</p> <p><strong>LIGHTNING.</strong> Electricity streaks through the storm, arcing through conductive objects and lashing any NPCs caught in it. Each NPC caught in the storm is hit for 2 HP during each turn you cast the spell.</p> <p><strong>BLIZZARD.</strong> Water condenses in the storm field, turning into apple-sized balls of hail. The air temperature in the storm field is freezing. NPCs in the storm field are hit for 1 HP during each turn you maintain the spell. Creatures cannot see beyond their reach in the howling whirl of ice.</p> <p><strong>HURRICANE.</strong> Sustained winds of terrifying force whip through the storm field. Weak buildings are completely destroyed, all windows are shattered, many roofs will cave in, and trees may be uprooted. Most unsecured objects are picked up by the storm and sent flying far away. Any NPCs caught in the storm field are blown around, can't move, and are hit for 4 HP for each turn you cast the spell.</p>",
          },
        ],
      },
      {
        name: 'Wild Evolution',
        prefixText:
          "<p>Your physical essence becomes permanently intertwined with that of a chosen animal’s form. The animal can be no smaller than a mouse and no larger than an elephant. You may only choose this form once.</p> <p>You may morph back and forth between your original form and your chosen form at will. When you change between forms, you maintain your current hit points.</p> <p>You adopt the animal's natural capabilities while you are transformed. For example, if you transform into an eagle, you may fly. Your basic attacks in animal form hit for 3 damage.</p> <p>You may now cast spells in animal form and speak telepathically to your allies.</p> <p>You can still use the Animal Form and Shapeshift abilities (p. 58), and the rules for those abilities still function as usual.</p>",
        subAbilities: [],
      },
      {
        name: 'To Dust',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You return a crafted object to nature, instantly reducing it to dust.</p><p>The object must be small enough to fit inside a 10x10-meter cube. The transformation is permanent and cannot be reversed.</p>',
          },
        ],
      },
      {
        name: 'World Wish',
        prefixText:
          '<p>You become the seed for a new world. Casting this spell consumes your life forever; you can never be brought back.</p> <p>Your entire knowledge of nature manifests in the spell. When you cast it, your body dissipates in radiant light, becoming a cascading wave of energy that transforms the planet you are on. The wave of energy first alters the atmosphere, making it capable of supporting life if it is not already suitable.</p> <p>Then, a blooming cascade of living flora emanates from your location, rapidly growing and overtaking the planet’s surface. The bloom radiates outward from your location until the entire planet is transformed. The spell forms oceans and rivers if they do not already exist.</p> <p>If you choose at the time of casting, the spell disintegrates any constructed objects, like buildings or infrastructure, returning the land to nature. Any objects that are destroyed in this way are done so gracefully, such that existing living things, like people and animals, are lowered to the ground unharmed.</p> <p>This is a permanent transformation that cannot be stopped, interrupted, or reversed by countermagic.</p>',
        subAbilities: [],
      },
    ],
  },
};
