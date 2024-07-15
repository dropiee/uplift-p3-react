const jobs = [
  { job: "Bard", shortHand: "brd" },
  { job: "Black Mage", shortHand: "blm" },
  { job: "Dragoon", shortHand: "drg" },
  { job: "Monk", shortHand: "mnk" },
  { job: "Ninja", shortHand: "nin" },
  { job: "Paladin", shortHand: "pld" },
  { job: "Scholar", shortHand: "sch" },
  { job: "Summoner", value: "smn" },
  { job: "Warrior", shortHand: "war" },
  { job: "White Mage", shortHand: "whm" },
];

const aRelicReborn = [
  "Obtain the Timeworn Weapon from a treasure coffer in a Beastmen Stronghold.",
  "Deliver the Timeworn Weapon to Gerolt.",
  "Deliver a materia-enhanced IL55 weapon to Gerolt.",
  'Complete the trial "A Relic Reborn: The Chimera." as your job.',
  "Deliver the Alumina Salts to Gerolt.",
  "Speak with Rowena at Revenant's Toll.",
  "Obtain an Amdapor Glyph by completing Amdapor Keep as your job.",
  "Deliver the Amdapor glyph to Rowena.",
  "Deliver the copy of The Book of Reinette to Gerolt.",
  "Slay Beastmen while equipped with the unfinished Weapon.",
  "Slay Beastmen while equipped with the unfinished Weapon.",
  "Slay Beastmen while equipped with the unfinished Weapon.",
  "Speak with Gerolt.",
  'Complete the trial "A Relic Reborn: The Hydra." with the unfinished Weapon equipped.',
  "Speak with Gerolt.",
  "Give the Unfinished Weapon to Gerolt.",
  "Obtain a White-Hot Ember in the Bowl of Embers (Hard) as your job.",
  "Obtain a Howling Gale in The Howling Eye (Hard) as your job.",
  "Obtain a chunk of Hyperfused Ore in The Navel (Hard) as your job.",
  "Deliver the requested items to Gerolt.",
  "Deliver a bottle of Radz-at-Han Quenching Oil to Gerolt.",
];
const zenithQuest = [
  "Obtain 3 Thavnairan Mist",
  "Using the Furnace in Hyrstmill, North Shroud, combine the Thavnairan Mists with your Zodiac Weapon",
];
const atmaQuest = ["Collect all 12 Atma from FATES", "Speak with Jalzahn"];
const animusQuest = [
  "Speak with Rowena at Revenant's Toll.",
  "Speak with G'jusana.",
  "Complete all books",
  "Speak with Jalzahn",
];
const novusQuest = [
  "Speak with Mutamix Bubblypots at the Bonfire.",
  "Speak with Hubairtin.",
  "Speak with Rowena at Revenant's Toll.",
  "Obtain three bottles of superior enchanted ink and show them to Hubairtin.",
  'Speak with Hubairtin to start the quest "Star Light, Star Bright"',
  "Speak with Jalzahn at Hyrstmill.",
  "Infuse the scroll with materia",
  "Speak with Jalzahn",
];
const nexusQuest = [
  "Gather 2000 light points from various ARR duties.",
  "Recommended duties: Aurum Vale, Stone Vigil, Thornmarch (Extreme)*, The Bowl of Embers (Hard)",
];
const zodiacStepQuest = [
  'Complete "Wherefore Art Thou, Zodiac"',
  'Complete "A Ponze of Flesh"',
  'Complete "Labour of Love"',
  'Complete "A Treasured Mother"',
  'Complete "Method in His Malice"',
  'Complete "His Dark Materia"',
  "Talk to Jalzahn",
];
const zetaQuest = [
  'Complete "Rise and Shine"',
  'Complete "The Vital Title"',
  "Purchase a Mahatma from Remon in Swiftperch",
  "Gather 40 light points from various ARR duties",
  "Repeat 11 more times for each Mahatma",
  "Speak with Jalzahn",
];

const zodiacQuests = [
  {
    step: "Base",
    title: "A Relic Reborn",
    location: "Gerolt | North Shroud (x30, y20)",
    reqItems: "1 Radz-at-Han Quenching Oil",
    quest: aRelicReborn,
  },
  {
    step: "Zenith",
    title: "Zenith Zodiac Weapon",
    location: "Furnace | North Shroud (x30, y20)",
    reqItems: "3 Thavnairan Mists",
    quest: zenithQuest,
  },
  {
    step: "Atma",
    title: "Up in Arms",
    location: "Gerolt | North Shroud (x30, y20)",
    reqItems: "12 Atma of FATES",
    quest: atmaQuest,
  },
  {
    step: "Animus",
    title: "Trials of the Braves",
    location: "Jalzahn | North Shroud (x30, y19)",
    reqItems: "900 Allagan Tomestone of Poetics",
    quest: animusQuest,
  },
  {
    step: "Novus",
    title: "Celestial Radiance/Star Light, Star Bright",
    location:
      "Jalzahn | North Shroud (x30, y19), Hubairtin | Central Thanalan (x23, y13)",
    reqItems: "3 Superior Enchanted Ink, More than 75 Materia, 75 Alexandrite",
    quest: novusQuest,
  },
  {
    step: "Nexus",
    title: "Nexus Zodiac Weapon",
    location: "Jalzahn | North Shroud (x30, y19)",
    reqItems: "1x Zodiac Glass",
    quest: nexusQuest,
  },
  {
    step: "Zodiac",
    title: "Zodiac Brave Weapon",
    location: "Jalzahn | North Shroud (x30, y19)",
    reqItems:
      "80k Company Seals, 800 Poetics, at least 400k Gil, 4 Bombard Core, 4 Sacred Spring Water, 10 HQ Items",
    quest: zodiacStepQuest,
  },
  {
    step: "Zeta",
    title: "Zodiac Zeta Weapon",
    location: "Remon | Western La Noscea (x34.3, y31.7)",
    reqItems: "600 Allagan Tomestone of Poetics",
    quest: zetaQuest,
  },
];

export { jobs, zodiacQuests };
