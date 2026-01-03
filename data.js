const FF7_DATA = {
  pokémon: [
    {
      id: "pikacloud",
      name: "Pikachu Cloud",
      baseForm: "Pikachu",
      dexNumber: "025",
      types: ["Electric", "Fighting"],
      image: "assets/pikacloud.gif",
      abilities: {
        primary: "Lightning Rod",
        secondary: "Sharpness",
        hidden: "Limit Break"
      },
      baseStats: {
        hp: 45,
        attack: 80,
        defense: 50,
        spAttack: 75,
        spDefense: 60,
        speed: 120
      },
      bst: 430,
      pokedex: [
        "This Pikachu wears old, purple armor and carries a large sword. It swings the blade with sparks of lightning and channels strange magika energy. Though its power is unchanged, its courage shines brighter than ever.",
        "Legend speaks of a Pikachu that fell from a reactor into the slums below. It now fights alongside rebels, its blade crackling with vengeance against those who scarred the land."
      ],
      signatureMoves: ["Braver", "Omnislash", "Volt Tackle+"],
      inspiration: "Cloud Strife",
      learnset: [
        "Aerial Ace", "Agility", "Alluring Voice", "Aqua Cutter", "Baby-Doll Eyes", "Bestow", "Bide", "Bitter Blade", "Body Slam", "Braver", "Brick Break", "Charge", "Charge Beam", "Charm", "Covet", "Dig", "Disarming Voice", "Discharge", "Double Slap", "Double Team", "Draining Kiss", "Echoed Voice", "Eerie Impulse", "Electric Terrain", "Electro Ball", "Electroweb", "Encore", "Endeavor", "Endure", "Facade", "Fake Out", "Fake Tears", "Feint", "Flash", "Fling", "Focus Punch", "Grass Knot", "Growl", "Headbutt", "Helping Hand", "Iron Tail", "Knock Off", "Laser Focus", "Light Screen", "Lucky Chant", "Magnet Rise", "Mega Kick", "Mega Punch", "Nasty Plot", "Nuzzle", "Pay Day", "Play Nice", "Play Rough", "Present", "Protect", "Quick Attack", "Rain Dance", "Reflect", "Rest", "Reversal", "Rising Voltage", "Rock Smash", "Rollout", "Shock Wave", "Signal Beam", "Slam", "Sleep Talk", "Solar Blade", "Spark", "Strength", "Substitute", "Surf", "Sweet Kiss", "Swift", "Tail Whip", "Take Down", "Tera Blast", "Thief", "Thunder", "Thunderbolt", "Thunder Punch", "Thunder Shock", "Thunder Wave", "Tickle", "Trailblaze", "Upper Hand", "Volt Switch", "Volt Tackle", "Wild Charge", "Wish"
      ]
    },
    {
      id: "nanaki",
      name: "Luxray Nanaki",
      baseForm: "Luxray",
      dexNumber: "405",
      types: ["Fire", "Electric"],
      image: "assets/nanaki.gif",
      abilities: {
        primary: "Intimidate",
        secondary: "Strong Jaw",
        hidden: "Limit Break"
      },
      baseStats: {
        hp: 85,
        attack: 115,
        defense: 80,
        spAttack: 75,
        spDefense: 80,
        speed: 95
      },
      bst: 530,
      pokedex: [
        "A proud beast with a flaming mane and fierce loyalty. Its tribe once guarded an ancient canyon, and it carries their warrior spirit in every fang and claw.",
        "Though it appears young, this Pokémon has lived for centuries. The fire in its mane burns with the memory of its father, a hero who gave his life protecting the land."
      ],
      signatureMoves: ["Sled Fang", "Blood Fang"],
      inspiration: "Red XIII",
      learnset: [
        "Agility", "Bite", "Body Slam", "Crunch", "Double-Edge", "Ember", "Endure", "Facade", "Fire Fang", "Flame Charge", "Flamethrower", "Flare Blitz", "Helping Hand", "Howl", "Hyper Fang", "Ice Fang", "Iron Tail", "Jaw Lock", "Leer", "Play Rough", "Poison Fang", "Protect", "Psychic Fangs", "Quick Attack", "Rain Dance", "Rest", "Roar", "Scary Face", "Sled Fang", "Sleep Talk", "Snarl", "Spark", "Substitute", "Sunny Day", "Superpower", "Swagger", "Tackle", "Take Down", "Tera Blast", "Thief", "Throat Chop", "Thunder", "Thunderbolt", "Thunder Fang", "Thunder Shock", "Thunder Wave", "Volt Switch", "Volt Tackle", "Wild Charge", "Will-O-Wisp"
      ]
    }
  ],

  moves: [
    {
      id: "braver",
      name: "Braver",
      type: "Fighting",
      category: "Physical",
      power: 85,
      accuracy: 100,
      pp: 10,
      description: "A powerful leaping slash. May cause the target to flinch.",
      effect: "20% chance to flinch",
      flags: ["Contact", "Slicing"],
      limitBreak: false,
      transformsTo: "Omnislash"
    },
    {
      id: "omnislash",
      name: "Omnislash",
      type: "Fighting",
      category: "Physical",
      power: 8,
      accuracy: 100,
      pp: 5,
      description: "The ultimate sword technique. Unleashes 15 slashes, each hitting a random opponent.",
      effect: "15 hits, each targets a random foe.",
      flags: ["Contact", "Slicing"],
      limitBreak: true,
      transformsFrom: "Braver"
    },
    {
      id: "volttackleplus",
      name: "Volt Tackle+",
      type: "Electric",
      category: "Physical",
      power: 140,
      accuracy: 100,
      pp: 15,
      description: "A Limit Break enhanced electric tackle with increased power and reduced recoil. May paralyze the target.",
      effect: "1/4 recoil, 20% paralysis chance",
      flags: ["Contact"],
      limitBreak: true,
      transformsFrom: "Volt Tackle"
    },
    {
      id: "sledfang",
      name: "Sled Fang",
      type: "Fire",
      category: "Physical",
      power: 75,
      accuracy: 100,
      pp: 15,
      description: "A fiery bite passed down through an ancient tribe of beast warriors.",
      effect: null,
      flags: ["Contact", "Bite"],
      limitBreak: false,
      transformsTo: "Blood Fang"
    },
    {
      id: "bloodfang",
      name: "Blood Fang",
      type: "Dark",
      category: "Physical",
      power: 110,
      accuracy: 100,
      pp: 15,
      description: "A vicious Limit Break fang attack. The user drains the target's blood to heal itself.",
      effect: "Drains 1/4 of damage dealt",
      flags: ["Contact", "Bite", "Heal"],
      limitBreak: true,
      transformsFrom: "Sled Fang"
    }
  ],

  abilities: [
    {
      id: "limitbreak",
      name: "Limit Break",
      description: "Each turn this Pokémon charges its limit. At full Limit certain moves become enhanced.",
      longDescription: "Each turn this pokémon is active, it charges limit. After 3 turns, limit is full and certain moves become enhanced Move+ versions that appear in the move menu. Using a Move+ resets the limit to 0. Limit persists when switching.",
      movePairs: [
        { base: "Braver", enhanced: "Omnislash" },
        { base: "Volt Tackle", enhanced: "Volt Tackle+" },
        { base: "Sled Fang", enhanced: "Blood Fang" }
      ]
    }
  ],

  typeColors: {
    Electric: "#F7D02C",
    Fighting: "#C22E28",
    Fire: "#EE8130",
    Dark: "#705746",
    Normal: "#A8A77A",
    Water: "#6390F0",
    Grass: "#7AC74C",
    Poison: "#A33EA1",
    Ground: "#E2BF65",
    Flying: "#A98FF3",
    Psychic: "#F95587",
    Bug: "#A6B91A",
    Rock: "#B6A136",
    Ghost: "#735797",
    Dragon: "#6F35FC",
    Steel: "#B7B7CE",
    Ice: "#96D9D6",
    Fairy: "#D685AD"
  }
};
