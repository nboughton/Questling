import { IRole } from 'src/components/models';

export const Roles: { [index: string]: IRole } = {
  Fighter: {
    paths: {
      Dueling: [
        {
          name: 'Counterattack',
          subAbilities: [
            {
              ap: 0,
              text: '<p>When an enemy within reach rolls a tough choice or worse on a basic attack against you, you parry their attack and take no damage. If they roll a failure or worse, you may also immediately roll the die to make a basic attack on them. This counterattack does not count as a turn.</p>',
            },
          ],
        },
        {
          name: 'Wild Attack',
          subAbilities: [
            {
              ap: 0,
              text: '<p>You attack with reckless power,disregarding your safety. Describe a signature style for this attack and what it looks like when you make it.</p>',
              table: [
                {
                  floor: 1,
                  result: 'Your weapon breaks',
                },
                {
                  floor: 2,
                  ceiling: 5,
                  result:
                    'You miss. All enemies within reach may counterattack you immediately.',
                },
                {
                  floor: 6,
                  ceiling: 10,
                  result:
                    'You deal double damage to the enemy, but they counterattack you.',
                },
                {
                  floor: 11,
                  ceiling: 19,
                  result: 'You deal double damage.',
                },
                {
                  floor: 20,
                  result: 'You deal quadruple damage.',
                },
              ],
            },
          ],
        },
        {
          name: 'Overpower',
          subAbilities: [
            {
              ap: 1,
              text: '<p>You use your strength to overpower a commoner or minion within reach. (You cannot use this ability on bosses.) Describe how you overpower them. You put the target in a compromised position until they spend a turn getting out of it. During this time, basic attacks hit them for double damage.</p>',
            },
          ],
        },
        {
          name: 'Disarm',
          subAbilities: [
            {
              ap: 1,
              text: '<p>You disarm an NPC within reach. If you have a free hand, you may take the weapon for yourself, or you may toss the weapon aside. You may disarm the NPC on your turn or immediately after they roll a failure or worse on an attack against you.</p>',
            },
          ],
        },
        {
          name: 'Duel',
          subAbilities: [
            {
              ap: 1,
              text: "<p>You compel a nearby creature to fight you in single combat. (The creature must already be hostile toward you.)</p><p>If you have the Quest Core Deck, take your Basic Attack, Wild Attack, Overpower, and Disarm cards. (If you don't have this deck, assign these abilities to a standard deck of cards.) Choose three of these cards to use and place them facedown on the table, keeping it secret from the Guide.</p><p>The Guide must guess the identity of each card. Reveal the card after each guess. If the Guide guesses correctly, you fail to use the ability on that card. If they guess incorrectly, you use the ability immediately at no AP cost, and it is automatically successful.</p><p>If the Guide guesses all three correctly, your foe immediately makes a successful counterattack against you. But if they get all three guesses wrong, you may extend the Duel for another round of three guesses.</p>",
            },
          ],
        },
      ],

      Tactics: [
        {
          name: 'Provoke',
          subAbilities: [
            {
              ap: 0,
              text: '<p>Make a nearby creature angry at you by saying something or making a rude gesture. Your target must be able to understand your intent. For the next minute, the target focuses its attention on you, ignoring all others. The effect ends if the target is hit by another creature or if hostilities subside.</p>',
            },
          ],
        },
        {
          name: 'Intercept',
          subAbilities: [
            {
              ap: 1,
              text: "<p>If a nearby NPC is about to attack someone, you may rush to intercept the attack. (You must say you're using this ability as soon as the Guide declares the attack.) The NPC makes their attack on you instead.</p><p>When you intercept the attack, the attacker immediately becomes affected by your Provoke ability.</p>",
            },
          ],
        },
        {
          name: 'Charge',
          subAbilities: [
            {
              ap: 2,
              text: '<p>You lock your gaze on a nearby destination, summoning all of your strength to charge toward it. You violently barrel through any foes in your path, knocking them down and dealing 1 damage to each of them. Creatures you knock down are dazed and cannot use special abilities during their next turn.</p>',
            },
          ],
        },
        {
          name: 'Retreat',
          subAbilities: [
            {
              ap: 2,
              text: '<p>You Provoke all nearby enemies to give your allies cover to retreat. If you are in combat, one nearby enemy immediately gets a chance to attack you.</p><p>You and any willing allies can then safely and expeditiously disengage from a fight and leave the scene. Commoners and minions will not pursue you, but bosses may still choose to give chase.</p>',
            },
          ],
        },
        {
          name: 'Whirlwind',
          subAbilities: [
            {
              ap: 2,
              text: '<p>You become a tornado of martial fury in an attack so swift that creatures nearby can hear a whistling sound in the air. You may use your body or a weapon for this attack.</p>',
              table: [
                {
                  floor: 1,
                  result:
                    'You spin wildly until you feel sick, and an enemy disarms you.',
                },
                {
                  floor: 2,
                  ceiling: 5,
                  result:
                    'You hit one enemy within reach, then your weapon goes flying in the air.',
                },
                {
                  floor: 6,
                  ceiling: 10,
                  result:
                    'You hit all enemies within reach. Choose one: you deal half damage or your weapon breaks after dealing damage.',
                },
                {
                  floor: 11,
                  ceiling: 19,
                  result: 'You hit all enemies within reach.',
                },
                {
                  floor: 20,
                  result:
                    'You strike all enemies within reach, hitting them for double damage.',
                },
              ],
            },
          ],
        },
      ],

      Camaraderie: [
        {
          name: 'Summon The Blood',
          subAbilities: [
            {
              ap: 1,
              text: '<p>When you regroup (p. 14), you bolster the spirits of your party by reciting a poem. You must recite a poem at the table for your friends. You can write your own or read one from another author, like from a book, movie, or TV show.</p><p>When completed, your party recovers an additional 3 HP from regrouping.</p>',
            },
          ],
        },
        {
          name: 'Valiant Soliloquy',
          subAbilities: [
            {
              ap: 2,
              text: '<p>You inspire your allies with a rousing speech. You can write your own or borrow one from a play or movie. It can be short; reading a few powerful lines is enough.</p><p>You must give the speech at the table. When you complete it, each member of the party gains the option to redo their next roll. This option expires at the end of your scene if it has not been used.</p>',
            },
          ],
        },
        {
          name: 'War Story',
          subAbilities: [
            {
              ap: 0,
              text: "<p>Once per game session, you may earn 2 AP by recounting a battle from your past adventures. You can only use this ability during downtime in the story, like when you regroup or undertake a journey. (You can't spout history during combat.)</p><p>You must recount a different conflict each time you use this ability. If there is no battle to recount, you can make one up from your character's past.</p>",
            },
          ],
        },
        {
          name: 'Marshal',
          subAbilities: [
            {
              ap: 1,
              text: '<p>When you face a serious test of strength, you can organize the help of your allies to overcome it. The whole party must be nearby and able to participate.</p><p>Everyone in the party must roll the die. If a majority of players scores a success or better, you are able to overcome the challenge.</p><p>You can use this for feats that would be improbable to accomplish alone, like breaking through a reinforced door, lifting a wooden beam off of someone, or winning a tug-of-war contest against a giant. The Guide will decide what is outside of the limits of this ability.</p>',
            },
          ],
        },
        {
          name: 'Bond',
          subAbilities: [
            {
              ap: 0,
              text: "<p>Choose a member of your party to form a special partnership with. They must want to form the bond with you. You may only bond with one party member at a time, and the bond cannot be broken until your partner dies or abandons the party.</p><p><ul><li>You may now use Intercept (p.36) for no AP to defend your partner from an attack.</li><li>You can now sense when your partner is in danger, even if you are separated.</li><li>You are immune to fear when your partner is at death's door.</li><li>You notice your heart beating stronger when your partner is nearby.</li></ul></p>",
            },
          ],
        },
      ],

      Leadership: [
        {
          name: 'Size Up',
          subAbilities: [
            {
              ap: 0,
              text: '<p>You evaluate the capabilities of a nearby creature or group of creatures. The Guide will give you useful insight into their capabilities, strength, vulnerabilities, and/or resistances. At a minimum, you will receive an accurate assessment from the Guide about whether they would pose a fair fight.</p><p>The Guide will deliver this information to you narratively. For example, they might say "you notice the giant spider flinching at the sight of your torch," rather than telling you it is vulnerable to fire damage.</p>',
            },
          ],
        },
        {
          name: 'Plan',
          subAbilities: [
            {
              ap: 1,
              text: '<p>If you have time to prepare before a conflict and you can choose when it begins, you may ambush your enemies and take the first round. Before action begins, each party member must say what they will do during their first turn. The Guide will then resolve these actions simultaneously.</p>',
            },
          ],
        },
        {
          name: 'Recruit',
          subAbilities: [
            {
              ap: 1,
              text: "<p>You command a nearby commoner or minion to assist you. (They cannot currently be hostile toward you.) You can have them join a fight or perform other tasks, like watching a door, defending an area, or delivering a message. They will follow your commands to the best of their ability, but they won't follow absurd or suicidal orders.</p><p>The Guide plays the part of the NPC. After one day or when they complete the task you give them, the recruit will leave you and return to their business.</p>",
            },
          ],
        },
        {
          name: 'Attendant',
          subAbilities: [
            {
              ap: 7,
              text: "<p>While in a populated area, you may find and recruit an NPC attendant. The Guide will tell you how you find this person and who they are. The attendant will stay with you permanently until you dismiss their service. You may only have one attendant at a time.</p><p>The attendant is a Fighter-based minion who is played by the Guide. They have 10 hit points and can use the Counter Attack, Wild Attack, and Provoke abilities. The Guide will create the rest of the attendant's characteristics.</p><p>The attendant is your ally and a capable apprentice. (The Guide plays as the attendant like any other NPC, but you may give them orders.) They'll run errands for you, assist you in combat, and follow other orders to the best of their ability. But they may choose not follow absurd, suicidal, or morally ruinous orders.</p>",
            },
          ],
        },
      ],

      Body: [
        {
          name: 'Technique',
          subAbilities: [
            {
              ap: 0,
              text: '<p>You are always deadly, even when not holding a weapon. Attacks with your body (like punches and kicks) now hit for 2 HP.</p>',
            },
          ],
        },
        {
          name: 'Flow',
          subAbilities: [
            {
              ap: 1,
              text: '<p>When you roll a 20 on a basic attack, you may briefly enter a state of intense focus. After completing your initial attack, you may immediately make one basic attack on each enemy within reach. These attacks are automatically successful.</p>',
            },
          ],
        },
        {
          name: 'Yawp',
          subAbilities: [
            {
              ap: 1,
              text: '<p>Once per scene, you may make a show of bravado to frighten nearby creatures. Any common folk nearby will seek shelter, run away, or attempt to appear non-threatening.</p>',
              table: [
                {
                  floor: 1,
                  ceiling: 5,
                  result: 'They laugh at you.',
                },
                {
                  floor: 6,
                  ceiling: 10,
                  result:
                    'One minion flees the scene, unless their boss is present.',
                },
                {
                  floor: 11,
                  ceiling: 19,
                  result: 'One minion flees the scene.',
                },
                {
                  floor: 20,
                  result: 'Half of all minions flee the scene.',
                },
              ],
            },
          ],
        },
        {
          name: 'Focus',
          text: '<p>You pause briefly, closing your eyes and clearing your mind of its reflexive habits. Your restless self fades away as your body becomes your task.</p>',
          subAbilities: [
            {
              ap: 3,
              text: "<p>You immediately use your Flow ability, even if you didn't roll a 20.</p>",
            },
            {
              ap: 4,
              text: '<p>You become wind; until the end of your current fight, minions cannot hit you with basic attacks unless they roll 20. This effect ends if you are hit.</p>',
            },
            {
              ap: 5,
              text: '<p>You purge a poison or illness from your body.</p>',
            },
          ],
        },
        {
          name: 'Defy Death',
          subAbilities: [
            {
              ap: 4,
              text: "<p>If you would die from an enemy's attack, you may overcome fate to make a last stand. Instead of dying, you stay on your feet but remain at 0 HP. If you also make an appeal to your dream (p. 28), you recover 1 hit point. You must say something that references your dream — to declare why you now live to die another day.</p><p>You laugh at death, but death demands a toll. Each time you use this ability, you increase a supernatural bounty on your head. In quiet moments, you begin to feel as if the shadows are watching you.</p>",
            },
          ],
        },
      ],

      Legendary: [
        {
          name: 'Limit Break',
          text: '<p>You achieve a transcendent unity of mind and body that allows you to passively channel the magic around you and push yourself beyond your natural limits.</p>',
          subAbilities: [
            {
              ap: 7,
              text: '<p>You single-handedly rout all nearby minions that you can see in a stunning display of martial fury. You may choose to kill or intimidate any number of them. Describe how you clear the scene of these foes.</p>',
            },
            {
              ap: 4,
              text: '<p>You mark an enemy, beginning a relentless assault on them. You automatically make three successful basic attacks on them. Then, you may continue making basic attacks on them until you roll lower than a success.</p>',
            },
            {
              ap: 3,
              text: "<p>You briefly gain unbelievable strength to perform one task. You can do things that were previously impossible, like single-handedly lifting a giant boulder, running through a brick wall, or knocking a giant to the ground. You can now do things that were just beyond your reach, but not things that are absurd. (You can't move a mountain or lasso the moon.) The Guide will decide what's possible.</p>",
            },
          ],
        },
        {
          name: 'Champion',
          text: '<p>Tales of your heroic deeds have spread through the lands, elevating your stature into the stratosphere.</p><p>You are now a hero, especially to those who value power. Authoritarian-minded people are especially vulnerable to your reputation, and most will defer to you in reverence. This includes town guards, bandits, and others who enjoy using force.</p><p>You gain the Recruit ability (p. 38) if you do not already have it, and you may use it for no AP cost on your fans or those who are awestruck by your prestige.</p><p>You also gain the Attendant ability (p. 38). It now costs 4 AP to use.</p>',
          subAbilities: [],
        },
        {
          name: 'Steel Pact',
          text: '<p>Choose a weapon you own. You form an extraordinary bond with it that cannot be broken unless the weapon is destroyed. You now sense which direction your weapon is in and feel a vague sense of how far away it is. If it is beyond your current plane of existence, you sense nothing but a dull feeling of sadness.</p>',
          subAbilities: [
            {
              ap: 0,
              text: '<p>When you roll a failure when using this weapon, you may reroll the die once. You must take the result of the reroll.</p>',
            },
            {
              ap: 0,
              text: '<p>When you roll a 20 on an attack against a minion while using this weapon, you automatically kill it, unless it has immunity against weapon attacks.</p>',
            },
          ],
        },
      ],
    },
  },

  Invoker: {
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
          text: '<p>You create a vow that permanently binds you in service of an ideal. You may only do this once. There is no turning back.</p><p>You can express this bond as devotion to a deity, a people, a cause, or something else that represents or is served by your ideal. (You may use an ideal you chose when creating a character, or choose a new one.) You must be in a safe and quiet place to make the vow, and it must include:</p><p><ul><li>Something you promise to actively do in service of your ideal, like helping the sick.</li><li>A person, place, or group you promise to protect when nearby.</li><li>A wrong from your past that you pledge to make amends for someday.</li></ul></p><p>Once the vow is created, you receive these ongoing benefits:</p><p><ul><li>You can now use your Invoke ability once per game session for no AP cost.</li><li>The healing effect of your Petition ability now affects nearby party members in addition to you.</li><li>Your eyes now have a faint glow.</li></ul></p><p>You have a sacred obligation to fulfill the promises you have made. Each time you betray the promises of your vow in a serious way, you feel a sharp pain in your heart, and your maximum HP decreases by 1. You cannot be reduced below 5 maximum HP from this effect.</p>',
          subAbilities: [],
        },
      ],

      Inquiries: [
        {
          name: 'Soul Gaze',
          subAbilities: [
            {
              ap: 1,
              text: '<p>Your eyes turn black, like shimmering gateways to eternity, as you peer into the eyes of a nearby creature. They become momentarily transfixed on your gaze.</p>',
              table: [
                {
                  floor: 1,
                  ceiling: 5,
                  result:
                    'They resist your invasion and briefly glimpse your recent thoughts.',
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
                  result:
                    "You learn the creature's ideal and flaw. You also learn the worst and best thing they have ever done.",
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
          subAbilities: [
            {
              ap: 3,
              text: '<p>You seek the location of a specific creature or object by projecting your consciousness into a shadow plane (p. 33). You must know what your target looks like.</p>',
              table: [
                {
                  floor: 1,
                  result:
                    'You walk in darkness. If you were searching for an enemy, they see you instead, learning your exact location.',
                },
                {
                  floor: 2,
                  ceiling: 5,
                  result:
                    'You walk the shadow plane for 1 minute, finding only darkness.',
                },
                {
                  floor: 6,
                  ceiling: 10,
                  result:
                    "You briefly glimpse the target and can see its surroundings, but you don't know if you're seeing it in the present moment.",
                },
                {
                  floor: 11,
                  ceiling: 19,
                  result:
                    'You glimpse the target in real time, can see its surroundings, and may watch it for the next minute.',
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
          subAbilities: [
            {
              ap: 1,
              text: '<p>Your eyes glow like blue flames as you look into the eyes of a nearby creature and grip their mind.</p>',
              table: [
                {
                  floor: 1,
                  result:
                    'The spell backfires. The target may compel you to answer a question truthfully instead.',
                },
                {
                  floor: 2,
                  ceiling: 5,
                  result:
                    'The target resists your invasion and senses you tried to manipulate them.',
                },
                {
                  floor: 6,
                  ceiling: 10,
                  result:
                    'The target is compelled to answer one question truthfully.',
                },
                {
                  floor: 11,
                  ceiling: 19,
                  result:
                    'The target is compelled to answer three questions truthfully.',
                },
                {
                  floor: 20,
                  result:
                    'The target is compelled to answer all questions truthfully for the nex',
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
          text: '<p>Choose a phrase to use for this spell.</p>',
          subAbilities: [
            {
              ap: 1,
              text: "<p>You speak the phrase of power, igniting your weapon in a magical flame of any color. While the weapon is on fire, it acts as a torch that casts light nearby. The flame increases the weapon's damage by 1. The flame persists until you roll a failure or worse on an attack with the weapon. You may dismiss the flame at any time.</p>",
            },
          ],
        },
        {
          name: 'Thunderous Word',
          text: '<p>Choose a word to use for this spell.</p>',
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
                  result:
                    'You receive your information and return to your body after one week. Your mind ages by 1 year in the week.',
                },
                {
                  floor: 11,
                  ceiling: 19,
                  result: 'You receive your answer.',
                },
                {
                  floor: 20,
                  result:
                    'You receive your answer and may ask a follow-up question.',
                },
              ],
            },
          ],
        },
      ],
    },
  },

  Ranger: {
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
          text: '<p>You touch a tree trunk, connecting yourself to the trees of a contiguous forest.</p>',
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
          text: '<p>Your presence is now respected by wild creatures everywhere. Wild animals, except bosses, will no longer attack you unless you harm them. (Trained animals and pets can still be commanded to harm you.) You may now use the Speak With Animal (p. 55) and Speak with Trees (p. 53) abilities for no AP cost if you have already learned them.</p> <p>Your Animal Partner ability (p. 55) now recruits a more powerful animal. Your partner has 10 HP, can hit for 2 HP, and attack twice per turn. If you have an existing animal partner, it is upgraded to these stats.</p>',
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
          text: "<p>You become the friend of a wilderness region that has meaning to you, like a forest or a valley. The region cannot already be under the control of a boss.</p> <p>You are known to all living things in this area as its ally. You may now use the Shroud (p. 52), Speak with Trees (p. 53), Navigate (p. 53), Track (p. 54), and Speak With Animal (p. 55) abilities within your chosen land for no AP cost, if you have already learned them.</p> <p>When you become the Friend of the Land, a group of volunteer creatures living in your chosen land will create a natural fort for you in a location of your choice. It takes one week to create. It should resemble in spirit something animals might create, like a giant ant hill, a meerkat manor, a nest in the trees, or a beaver's dam. It has up to 20 rooms, including a kitchen, a great hall, and an armory. The keep is watched over full-time by allied animal sentries who will notify you of intruders or guests.</p> <p>Additionally, a small staff of volunteer animals will routinely forage for you, making sure the keep is stocked with vegetables, fruits, and other natural foods from the area that they can collect. They will occasionally invite you to play with them.</p>",
          subAbilities: [],
        },
      ],
    },
  },

  Naturalist: {
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
          subAbilities: [
            {
              ap: 0,
              text: "<p>You open your palm, conjuring a poisonous thorn that you shoot in a straight line toward a nearby target creature or object. The thorn hits for 2 HP.</p> <p><strong>20:</strong> The thorn's poison is amplified. If you hit an organic creature, its skin becomes swollen, it cannot see beyond its reach, and it can't speak or cast spells until the end of its next turn.</p>",
              roll: true,
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
          subAbilities: [
            {
              ap: 5,
              text: '<p>You shape an orb of fire suspended in the air in front of you and send it streaking in a straight line toward a target you can see. The fireball explodes on contact, dealing 6 damage to any creatures and objects it hits. You can shape the spell to avoid allies or creatures you do not want to harm.</p>',
              table: [
                {
                  floor: 1,
                  result:
                    'It explodes in your face, hitting you and up to 3 nearby creatures.',
                },
                {
                  floor: 2,
                  ceiling: 5,
                  result:
                    "The fireball misses and hits random targets of the Guide's choice.",
                },
                {
                  floor: 6,
                  ceiling: 10,
                  result:
                    'Choose one: the explosion hits you and up to 4 creatures near impact, or the fireball fizzles into a cloud of smoke.',
                },
                {
                  floor: 11,
                  ceiling: 19,
                  result:
                    'The explosion hits up to 4 creatures near the point of impact.',
                },
                {
                  floor: 20,
                  result:
                    'The explosion hits all creatures near the point of impact for double damage.',
                },
              ],
            },
          ],
        },
      ],

      Stormcaller: [],

      Spiritcaller: [],

      Ecologist: [],

      Legendary: [],
    },
  },
};
