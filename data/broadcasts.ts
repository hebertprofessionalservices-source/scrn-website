export interface RadioStation {
  callSign: string;
  frequency: string;
  band: "AM" | "FM";
  market: string;
  streamUrl?: string;
}

export interface StreamPlatform {
  id: string;
  name: string;
  description: string;
  url?: string;
}

export const radioStations: RadioStation[] = [
  // AM Stations
  { callSign: "WWZQ", frequency: "1240", band: "AM", market: "Aberdeen" },
  { callSign: "WJQS", frequency: "1400", band: "AM", market: "Brandon" },
  { callSign: "WJNT", frequency: "1180", band: "AM", market: "Clinton" },
  { callSign: "WANT", frequency: "1450", band: "AM", market: "Natchez" },
  { callSign: "WVBG", frequency: "1490", band: "AM", market: "Vicksburg" },
  { callSign: "WOAD", frequency: "1300", band: "AM", market: "Madison Central" },
  { callSign: "WAMY", frequency: "1580", band: "AM", market: "Hamilton / Hatley / Smithville" },

  // FM Stations
  { callSign: "WAFM", frequency: "95.7", band: "FM", market: "Amory" },
  { callSign: "WOXD", frequency: "95.5", band: "FM", market: "Oxford" },
  { callSign: "WONA", frequency: "95.1", band: "FM", market: "Winona" },
  { callSign: "WGBL", frequency: "96.7", band: "FM", market: "Gulfport" },
  { callSign: "WAMY", frequency: "96.5", band: "FM", market: "Hamilton / Hatley / Smithville" },
  { callSign: "WFMM", frequency: "97.3", band: "FM", market: "Petal" },
  { callSign: "WKBB", frequency: "100.9", band: "FM", market: "Starkville" },
  { callSign: "WFTA", frequency: "101.9", band: "FM", market: "Tupelo Christian" },
  { callSign: "WDRO", frequency: "101.3", band: "FM", market: "Lawrence County" },
  { callSign: "WLIN", frequency: "103.7", band: "FM", market: "Kosciusko" },
  { callSign: "WOAD", frequency: "103.5", band: "FM", market: "Madison Central" },
  { callSign: "WOSM", frequency: "103.1", band: "FM", market: "Ocean Springs" },
  { callSign: "WZKR", frequency: "103.3", band: "FM", market: "Clarksdale" },
  { callSign: "WQXF", frequency: "105.1", band: "FM", market: "Lafayette County" },
  { callSign: "WQLJ", frequency: "105.5", band: "FM", market: "Water Valley" },
  { callSign: "WABO", frequency: "105.5", band: "FM", market: "Wayne County" },
  { callSign: "WANT", frequency: "106.3", band: "FM", market: "Natchez" },
  { callSign: "WJQS", frequency: "106.3", band: "FM", market: "Brandon" },
  { callSign: "WRJW", frequency: "106.9", band: "FM", market: "Picayune" },
  { callSign: "WLSM", frequency: "107.1", band: "FM", market: "Louisville / Nanih Waiya" },
  { callSign: "WFCA", frequency: "107.9", band: "FM", market: "Choctaw County / French Camp" },
  { callSign: "WVBG", frequency: "107.7", band: "FM", market: "Vicksburg" },
  { callSign: "WFOR", frequency: "92.7", band: "FM", market: "Hattiesburg" },
  { callSign: "WSYE", frequency: "93.3", band: "FM", market: "Houston" },
  { callSign: "WHOC", frequency: "93.7", band: "FM", market: "Philadelphia" },
  { callSign: "WXRZ", frequency: "94.3", band: "FM", market: "Corinth" },
  { callSign: "WLAU", frequency: "99.3", band: "FM", market: "Laurel / NE Jones / South Jones / West Jones" },
];

export const streamPlatforms: StreamPlatform[] = [
  {
    id: "nfhs",
    name: "NFHS Network",
    description: "Live and on-demand video streams of MHSAA championship games.",
  },
  {
    id: "hudl",
    name: "Hudl",
    description: "Game film and live streaming for select championship matchups.",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "Watch championship coverage live and find archives on the SCRN channel.",
    url: "https://www.youtube.com/@StateChampRadio",
  },
  {
    id: "facebook",
    name: "Facebook Live",
    description: "Live game coverage streamed to the SCRN Facebook page.",
  },
  {
    id: "teamline",
    name: "Team Line",
    description: "Audio streaming for SCRN radio broadcasts.",
  },
  {
    id: "mixlr",
    name: "Mixlr",
    description: "Live radio audio streaming platform carrying select SCRN broadcasts.",
  },
];
