import { IRole } from 'src/components/models';

export const Invoker: IRole = {
  paths: {
    Invocation: [
      {
        name: 'Declare',
        subAbilities: [
          {
            ap: 0,
            text: "<p>Once per scene, you may declare a reason for intervening in a matter, steeling your resolve. The reason should be based on your ideal (p. 26) and the scene's context. For example, if you believe in order, you might tell highway robbers they're breaking the law. Or if you believe in honor, you might say there's no honor among thieves.</p><p>Choose one result:</p><p><ul><li>You immediately make a successful basic attack on a nearby foe.</li><li>You compel an NPC to explain what they are doing (they may lie to you).</li><li>You convince commoners to leave.</li></ul></p>",
          },
        ],
      },
      {
        name: 'Petition',
        subAbilities: [
          {
            ap: 2,
            text: '<p>When you regroup (p. 14), you may close your eyes and calm your body. You recite a short petition and receive a boon.</p><p>You must recite a petition at the table that contains all of these parts:</p><p><ul><li>An address line, like "in the name of the gods" or "for the love of wisdom."</li><li>A request, like "I ask for strength."</li><li>An adulation, like "for I am your humble servant" or "for you are the truth."</li></ul></p><p>When you are finished reciting the petition, all of your hit points are restored.</p>',
          },
        ],
      },
      {
        name: 'Invoke',
        subAbilities: [
          {
            ap: 3,
            text: "<p>You leave your worldly body behind and create an astral projection of yourself. You must be in a quiet place with no other creatures around to begin the ritual.</p><p>While in this trance, you can only vaguely sense if there is danger around your mortal body. You may exit the trance at any time.</p><p>Your mind enters a liminal plane of existence. You experience this place like a dreamworld in the stars; it might be a lush paradise in a nebula, an idyllic homestead, or a temple in the fires of creation.</p><p>If you have an allegiance to a deity, you meet with their avatar. If you hold no allegiance to a deity or if your deity is merely a figment of your character's imagination, you meet with an avatar of supernatural wisdom.</p><p>Set a timer. You may speak to the avatar for 1 minute about anything you like. If you ask any of these questions, the Guide will give you a truthful answer:</p><p><ul><li>Am I on the right path to ____________?</li><li>Is ___________ who they say they are?</li><li>Am I living up to my ideal?</li><li>Have my actions unknowingly caused anyone harm?</li><li>How can I redeem myself?</li></ul></p>",
          },
        ],
      },
      {
        name: 'Vow',
        prefixText:
          '<p>You create a vow that permanently binds you in service of an ideal. You may only do this once. There is no turning back.</p><p>You can express this bond as devotion to a deity, a people, a cause, or something else that represents or is served by your ideal. (You may use an ideal you chose when creating a character, or choose a new one.) You must be in a safe and quiet place to make the vow, and it must include:</p><p><ul><li>Something you promise to actively do in service of your ideal, like helping the sick.</li><li>A person, place, or group you promise to protect when nearby.</li><li>A wrong from your past that you pledge to make amends for someday.</li></ul></p><p>Once the vow is created, you receive these ongoing benefits:</p><p><ul><li>You can now use your Invoke ability once per game session for no AP cost.</li><li>The healing effect of your Petition ability now affects nearby party members in addition to you.</li><li>Your eyes now have a faint glow.</li></ul></p><p>You have a sacred obligation to fulfill the promises you have made. Each time you betray the promises of your vow in a serious way, you feel a sharp pain in your heart, and your maximum HP decreases by 1. You cannot be reduced below 5 maximum HP from this effect.</p>',
        subAbilities: [],
      },
    ],

    Inquiries: [
      {
        name: 'Soul Gaze',
        roll: true,
        subAbilities: [
          {
            ap: 1,
            text: '<p>Your eyes turn black, like shimmering gateways to eternity, as you peer into the eyes of a nearby creature. They become momentarily transfixed on your gaze.</p>',
            table: [
              {
                floor: 1,
                ceiling: 5,
                result: 'They resist your invasion and briefly glimpse your recent thoughts.',
              },
              {
                floor: 6,
                ceiling: 10,
                result: 'You learn their ideal and flaw, but one is false.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'You learn their ideal and flaw.',
              },
              {
                floor: 20,
                result: "You learn the creature's ideal and flaw. You also learn the worst and best thing they have ever done.",
              },
            ],
          },
        ],
      },
      {
        name: 'Impression',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You brush against a creature for a fleeting moment, feeling its desires. The Guide chooses and reveals to you something specific that the creature routinely craves. You become cursed to also crave that thing and cannot use Impression again until you fulfill the desire. When you fulfill it once, the curse is lifted.</p>',
          },
        ],
      },
      {
        name: 'Evil Eye',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You pause, closing your eyes and quieting your mind. You sense the worst thing that ever happened nearby. The Guide will describe to you the type of thing that happened and what the people involved look like.</p><p>For example, you might learn that someone was murdered, a curse was created, or an evil vow was taken.</p>',
          },
        ],
      },
      {
        name: 'Shadowseek',
        roll: true,
        subAbilities: [
          {
            ap: 3,
            text: '<p>You seek the location of a specific creature or object by projecting your consciousness into a shadow plane (p. 33). You must know what your target looks like.</p>',
            table: [
              {
                floor: 1,
                result: 'You walk in darkness. If you were searching for an enemy, they see you instead, learning your exact location.',
              },
              {
                floor: 2,
                ceiling: 5,
                result: 'You walk the shadow plane for 1 minute, finding only darkness.',
              },
              {
                floor: 6,
                ceiling: 10,
                result: "You briefly glimpse the target and can see its surroundings, but you don't know if you're seeing it in the present moment.",
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'You glimpse the target in real time, can see its surroundings, and may watch it for the next minute.',
              },
              {
                floor: 20,
                result:
                  'You glimpse the target in real time and can see its nearby surroundings. If it is a creature, you may speak to them for 1 minute. They cannot see you, but they hear you in their mind. If you touch them, they feel a faint sensation, as if a breeze passes through them.',
              },
            ],
          },
        ],
      },
    ],

    Verdicts: [
      {
        name: 'Inspire',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You inspire a nearby NPC by reciting a meaningful statement to them. You may invent a famous quote or proverb, or borrow one from the real world. The creature must be able to hear and understand you, and cannot currently be hostile toward you.</p><p>Until the end of the day, the NPC shapes their behavior around their ideal, and cannot fall victim to their flaw.</p>',
          },
        ],
      },
      {
        name: 'Compel Truth',
        roll: true,
        subAbilities: [
          {
            ap: 1,
            text: '<p>Your eyes glow like blue flames as you look into the eyes of a nearby creature and grip their mind.</p>',
            table: [
              {
                floor: 1,
                result: 'The spell backfires. The target may compel you to answer a question truthfully instead.',
              },
              {
                floor: 2,
                ceiling: 5,
                result: 'The target resists your invasion and senses you tried to manipulate them.',
              },
              {
                floor: 6,
                ceiling: 10,
                result: 'The target is compelled to answer one question truthfully.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'The target is compelled to answer three questions truthfully.',
              },
              {
                floor: 20,
                result: 'The target is compelled to answer all questions truthfully for the next 5 minutes. You may set a real timer.',
              },
            ],
          },
        ],
      },
      {
        name: 'Forgive',
        subAbilities: [
          {
            ap: 3,
            text: '<p>While placing your hand on a creature and telling them they are forgiven, they immediately feel guilt fade from their conscience. You must know a specific act or circumstance that the creature feels guilty for. Your words of forgiveness must be in the form of a Petition (p. 42).</p><p>If you use this on a commoner or minion, they will become awestruck as if they have received a blessing from a god. They may begin to follow you as if you are a prophet, and they will not willingly cause you harm.</p><p>If you use this on a boss, you will temporarily endear them to you. They will not harm you until the next time you meet, unless you or the party tries to harm them. They cannot be affected by this spell twice.</p>',
          },
        ],
      },
      {
        name: 'Liberate',
        subAbilities: [
          {
            ap: 4,
            text: '<p>You place your hand on an NPC, channeling the weight of your devotion and resolve. By speaking a word of power, you alleviate them of a character flaw. (You must already know one of their flaws.) They are effectively cured of the flaw and it no longer affects their behavior.</p><p>This also has the effect of your Forgive ability and relieves the creature of any guilt for succumbing to their flaw in the past.</p>',
          },
        ],
      },
    ],

    Wrath: [
      {
        name: 'Fiery Avenger',
        prefixText: '<p>Choose a phrase to use for this spell.</p>',
        subAbilities: [
          {
            ap: 1,
            text: "<p>You speak the phrase of power, igniting your weapon in a magical flame of any color. While the weapon is on fire, it acts as a torch that casts light nearby. The flame increases the weapon's damage by 1. The flame persists until you roll a failure or worse on an attack with the weapon. You may dismiss the flame at any time.</p>",
          },
        ],
      },
      {
        name: 'Thunderous Word',
        prefixText: '<p>Choose a word to use for this spell.</p>',
        subAbilities: [
          {
            ap: 2,
            text: '<p>You speak the word of power, releasing a thunderous shockwave in the direction you are facing. The wave knocks up to three creatures backward and hits them each for 2 damage. Creatures affected by the spell are  briefly dazed and cannot use special abilities during their next turn.</p>',
          },
        ],
      },
      {
        name: 'Lawbringer',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You raise your hand to the sky and summon a spectral warhammer into your grip. The hammer is a one-handed weapon that deals 3 damage. It appears to crackle with blue-green light and leaves a deep, reverberating sound in its wake.</p><p>If you roll a triumph when using the hammer, it releases a crackling boom and casts your Thunderous Word spell on the target. The hammer vanishes in smoke after one hour or when you dismiss it.</p>',
          },
        ],
      },
      {
        name: 'Smite',
        subAbilities: [
          {
            ap: 5,
            text: "<p>Speak a word or phrase, condemning a nearby creature that you can see. You engulf the target in radiant flame, hitting it for 10 HP. If the damage dealt is enough to kill the creature, it explodes into ash, and its body and spirit are permanently obliterated.</p><p>If you destroy a creature with Smite, roll the die. On a 2-20, nothing happens. On a 1, the creature's spirit becomes a dark passenger in your mind. You never know when it may decide to speak to you or observe your behavior.</p>",
          },
        ],
      },
      {
        name: 'Blazing Avenger',
        subAbilities: [
          {
            ap: 6,
            text: '<p>You recite a magical statement about your ideal while holding a weapon, imbuing it with incredible power. The weapon gains the following benefits:</p><p><ul><li>It now glows faintly at all times and glows brighter when enemies are nearby.</li><li>When holding the weapon, you may cast Fiery Avenger on it at will for no AP cost.</li><li>When you roll a 20 when making an attack with the weapon, it casts the Smite spell on your target.</li></ul></p><p>You can only cast Blazing Avenger on one weapon at a time; casting it again cancels the previous enchantment.</p>',
          },
        ],
      },
    ],

    Wards: [
      {
        name: 'Shield',
        subAbilities: [
          {
            ap: 1,
            text: '<p>You summon a magical shield that appears as an aura of soft light around your body. The shield blocks up to 3 hit points of damage. (Any damage dealt in excess of 3 HP passes through the shield and hits you.) The shield lasts until it takes 3 or more damage in a single hit.</p>',
          },
        ],
      },
      {
        name: 'Sigil',
        subAbilities: [
          {
            ap: 2,
            text: "<p>You draw a magic sigil on an object. The spell lasts until you cancel it or cast Sigil again. You can only cast the spell if no enemies are currently nearby.</p><p>Choose a specific creature for the sigil to affect, or a type of creature, like spirits or werewolves. Then draw a circle on a piece of paper at the table. Draw the creature that will be affected by the spell inside of the circle. Choose one of four effects:</p><p><ul><li><strong>LURE:</strong> The sigil attracts creatures to its location, where they linger for a minute.</li><li><strong>REPEL:</strong> Creatures who come nearby won't move closer to the sigil or may turn back.</li><li><strong>ALERT:</strong> Receive a signal in your mind when creatures pass by the sigil.</li><li><strong>MESSAGE:</strong> The sigil telepathically sends a short message of up to 10 words in your language to creatures passing nearby.</li></ul></p><p>You may keep your drawing and reuse it later when casting this spell again, and you can choose a new effect each time.</p>",
          },
        ],
      },
      {
        name: 'Rebuke',
        subAbilities: [
          {
            ap: 1,
            text: "<p>You utter a righteous word or phrase in the direction of a nearby creature that is approaching you during that creature's turn. (The creature cannot already be within reach.) You release a spectral clone of yourself that rushes them, knocks them back several meters, deals 1 damage, and ends their turn. The clone then disappears.</p>",
          },
        ],
      },
      {
        name: 'Oblation',
        subAbilities: [
          {
            ap: 3,
            text: '<p>You place both hands on a creature, uttering a loving word or  phrase. The creature instantly recovers 6 hit points and wakes up if they are unconscious. Or you may choose to cast this spell with no AP cost by transferring your own hit points to the creature. The creature recovers as many hit points as you are willing to give up.</p>',
          },
        ],
      },
      {
        name: 'Befizzle',
        subAbilities: [
          {
            ap: 4,
            text: '<p>You curse a creature nearby, restricting their use of magic for the next hour. If they try to cast a spell, they will find it impossible. For example, if the spell is spoken, they forget their lines; if the spell requires hand-waving, they find their arms frozen. If you are casting the spell on a boss, you must concentrate on it to maintain the effect; the spell ends if you move or do something else.</p>',
          },
        ],
      },
    ],

    Legendary: [
      {
        name: 'Wraith',
        subAbilities: [
          {
            ap: 0,
            text: '<p>You become a wraith: a creature between two worlds. Now, whenever you have 0 HP, you may instantly become ethereal. You appear translucent and ghostly while ethereal, but you are still visible to others.</p><p>Your ethereal form has a maximum of 0 HP and cannot be healed. You are immune to all physical (non-magical) harm while in this form. However, harmful magic hits you for double HP while ethereal, and taking damage can still kill you.</p><p>You may revert to your normal form at any time during your turn. But you cannot change forms to avoid taking damage immediately after being hit.</p>',
          },
        ],
      },
      {
        name: 'Sacrifice',
        subAbilities: [
          {
            ap: 0,
            text: "<p>You lay your hands on a creature who has died, bringing it back to life. The creature must still have a corpse that is mostly intact. If the creature died of old age, they receive a new maximum lifespan of the Guide's choice.</p> <p>The sacrifice withers your soul. Each time you use this ability, you must choose an additional character flaw. Additionally, you permanently lose 2 HP from your maximum hit points.</p> <p>If you reduce your max HP to 0 by using this ability, you acquire the legendary Wraith ability, and you permanently enter an ethereal form. Using Sacrifice while at 0 maximum HP permanently kills you.</p>",
          },
        ],
      },
      {
        name: 'Prophecy',
        subAbilities: [
          {
            text: "<p>You delve through time to glimpse an NPC's fate. You may only use this ability once during your entire story, so use it wisely.</p> <p>The choice you make shapes the story for everyone. The prophecy must come true; the Guide is obligated to honor the fate you have chosen at some point in the story. When and how it emerges is up to the Guide. You may keep your choice a secret from the party.</p> <p>Choose one of the following things. It will eventually become true, as you have foreseen.<p> <ul><li><strong>SAVIOR.</strong> The creature will sacrifice their life to try to save someone or something.</li> <li><strong>BETRAYER.</strong> The creature will betray their allies at a pivotal moment in pursuit of a hidden agenda.</li> <li><strong>LEADER.</strong> The creature will acquire a meaningful amount of power and authority over a people or place.</li> <li><strong>DISGRACED.</strong> The creature will do something so morally ruinous that they become widely known for their misdeed.</li> <li><strong>PARAGON.</strong> The creature will do something so morally good that they become widely known for their righteousness.</li></ul>",
          },
        ],
      },
      {
        name: 'Eternity Gate',
        roll: true,
        subAbilities: [
          {
            ap: 7,
            text: '<p>You project yourself past all realities and glimpse a place outside time and space – into The Beyond.</p> <p>Here, you may seek and find a single truth by posing a question to eternity itself. The Guide will give you a fulsome and accurate answer to your question. If you explain why you are asking the question, the Guide will do their best to answer in a way that satisfies what you were trying to discover.</p> <p>For example, if you asked “Is my friend still alive in another dimension?” the Guide will tell you whether they are alive. If you explain that you asked because you want to reunite with them, the Guide might tell you exactly where they are and how to get there.</p> <p>You must seek fact. You won\'t find satisfying answers to questions like "What is the meaning of life?"</p> <p>Casting Eternity Gate is a huge risk.</p>',
            table: [
              {
                floor: 1,
                result:
                  "Your mind is trapped in The Beyond for 100,000 years, where you experience an endless search through a maze of other realities. After enduring this ordeal in The Beyond, your mortal consciousness fundamentally changes when you return to your body after one week. The ideals and flaws of your previous self have washed away during your incomprehensible exile. Choose a new ideal, a new flaw, and a new dream to reflect deep changes in your character's personality.",
              },
              {
                floor: 2,
                ceiling: 5,
                result:
                  'You fail to receive the information and return to your body after one week. Your mind is wracked from wrong turns in your search. You age by 10 years. Choose an additional character flaw.',
              },
              {
                floor: 6,
                ceiling: 10,
                result: 'You receive your information and return to your body after one week. Your mind ages by 1 year in the week.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'You receive your answer.',
              },
              {
                floor: 20,
                result: 'You receive your answer and may ask a follow-up question.',
              },
            ],
          },
        ],
      },
    ],
  },
};
