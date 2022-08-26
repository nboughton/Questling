import { IRole } from 'src/components/models';

export const Fighter: IRole = {
  name: 'Fighter',
  id: 'Core-Fighter',
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
        roll: true,
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
                result: 'You miss. All enemies within reach may counterattack you immediately.',
              },
              {
                floor: 6,
                ceiling: 10,
                result: 'You deal double damage to the enemy, but they counterattack you.',
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
        roll: true,
        subAbilities: [
          {
            ap: 2,
            text: '<p>You become a tornado of martial fury in an attack so swift that creatures nearby can hear a whistling sound in the air. You may use your body or a weapon for this attack.</p>',
            table: [
              {
                floor: 1,
                result: 'You spin wildly until you feel sick, and an enemy disarms you.',
              },
              {
                floor: 2,
                ceiling: 5,
                result: 'You hit one enemy within reach, then your weapon goes flying in the air.',
              },
              {
                floor: 6,
                ceiling: 10,
                result: 'You hit all enemies within reach. Choose one: you deal half damage or your weapon breaks after dealing damage.',
              },
              {
                floor: 11,
                ceiling: 19,
                result: 'You hit all enemies within reach.',
              },
              {
                floor: 20,
                result: 'You strike all enemies within reach, hitting them for double damage.',
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
        roll: true,
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
                result: 'One minion flees the scene, unless their boss is present.',
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
        prefixText:
          '<p>You pause briefly, closing your eyes and clearing your mind of its reflexive habits. Your restless self fades away as your body becomes your task.</p>',
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
        prefixText:
          '<p>You achieve a transcendent unity of mind and body that allows you to passively channel the magic around you and push yourself beyond your natural limits.</p>',
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
        prefixText:
          '<p>Tales of your heroic deeds have spread through the lands, elevating your stature into the stratosphere.</p><p>You are now a hero, especially to those who value power. Authoritarian-minded people are especially vulnerable to your reputation, and most will defer to you in reverence. This includes town guards, bandits, and others who enjoy using force.</p><p>You gain the Recruit ability (p. 38) if you do not already have it, and you may use it for no AP cost on your fans or those who are awestruck by your prestige.</p><p>You also gain the Attendant ability (p. 38). It now costs 4 AP to use.</p>',
        subAbilities: [],
      },
      {
        name: 'Steel Pact',
        prefixText:
          '<p>Choose a weapon you own. You form an extraordinary bond with it that cannot be broken unless the weapon is destroyed. You now sense which direction your weapon is in and feel a vague sense of how far away it is. If it is beyond your current plane of existence, you sense nothing but a dull feeling of sadness.</p>',
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
};
