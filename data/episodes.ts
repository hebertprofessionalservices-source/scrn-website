export interface Episode {
  id: string;
  number: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
  thumbnailAlt?: string;
}

export const episodes: Episode[] = [
  {
    id: "ep-alltime-programs",
    number: 12,
    title: "The 10 Greatest Programs in MHSAA History",
    description:
      "Breck Riley, Jake Wimberly, Brandon Davis, and Jared Shotts go deep on the programs that have defined Mississippi high school football.",
    date: "August 8, 2025",
    duration: "1h 14m",
    thumbnailAlt: "Episode 12 - All-Time Programs",
  },
  {
    id: "ep-preseason-all-state",
    number: 11,
    title: "Preseason All-State Team 2025",
    description:
      "Our picks for the best players in Mississippi before a single varsity snap has been taken. Sponsored by Farm Families of MS.",
    date: "August 21, 2025",
    duration: "52m",
    thumbnailAlt: "Episode 11 - Preseason All-State",
  },
  {
    id: "ep-power-rankings",
    number: 10,
    title: "2025 Preseason Power Rankings",
    description:
      "Class by class, who's primed for a December run and who's got more questions than answers heading into fall camp.",
    date: "August 21, 2025",
    duration: "48m",
    thumbnailAlt: "Episode 10 - Power Rankings",
  },
  {
    id: "ep-rpi-explained",
    number: 9,
    title: "RPI Rankings Explained — And Who's on Top",
    description:
      "Breaking down how the MHSAA's RPI system works, why it matters for playoff seeding, and which teams are sitting pretty through Week 4.",
    date: "September 24, 2025",
    duration: "38m",
    thumbnailAlt: "Episode 9 - RPI Rankings",
  },
  {
    id: "ep-championship-preview",
    number: 13,
    title: "2025 Championship Weekend Preview",
    description:
      "All seven games, all seven matchups. Who gets cut, who gets crowned. The full breakdown before it all kicks off December 3.",
    date: "December 1, 2025",
    duration: "1h 22m",
    thumbnailAlt: "Episode 13 - Championship Preview",
  },
  {
    id: "ep-season-recap",
    number: 8,
    title: "Regular Season Recap — The Good, The Bad, The Unexpected",
    description:
      "The crew looks back at the surprises, the disappointments, and the teams nobody saw coming before the playoffs tip off.",
    date: "October 30, 2025",
    duration: "55m",
    thumbnailAlt: "Episode 8 - Season Recap",
  },
];

export const latestEpisode = episodes[episodes.length - 1];
