export interface ScheduledEpisode {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  status: "upcoming" | "live" | "recorded";
}

// Sorted ascending — soonest episode first
export const scheduledEpisodes: ScheduledEpisode[] = [
  {
    id: "preseason-2026",
    title: "2026 Preseason Power Rankings",
    description:
      "Where every class stands before the first kickoff. Who's reloading, who's rebuilding, who's being underestimated.",
    date: "August 14, 2026",
    time: "7:00 PM CT",
    status: "upcoming",
  },
  {
    id: "playoff-bracket-2026",
    title: "Playoff Bracket Special",
    description:
      "Breaking down every first-round matchup across all seven classifications. Who advances, who goes home.",
    date: "November 6, 2026",
    time: "8:00 PM CT",
    status: "upcoming",
  },
  {
    id: "all-state-2026",
    title: "All-State Team Reveals 2026",
    description: "Our picks for the best players in Mississippi this season, by classification.",
    date: "November 20, 2026",
    time: "7:30 PM CT",
    status: "upcoming",
  },
  {
    id: "dec-preview-2026",
    title: "2026 Championship Weekend Preview",
    description:
      "The full preview show before all seven state championship games. Full field, full crew, no filler.",
    date: "December 1, 2026",
    time: "7:00 PM CT",
    status: "upcoming",
  },
];
