export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  twitter?: string;
  featured?: boolean;
  headshotFile?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "ben-ingram",
    name: "Ben Ingram",
    role: "Play-by-Play",
    bio: "Radio play-by-play voice of the Atlanta Braves. 2022 NSMA Georgia Sportscaster of the Year. Also calls the Chick-fil-A Peach Bowl.",
    headshotFile: "ben-ingram-headshot.jpeg",
    featured: true,
  },
  {
    id: "jared-shotts",
    name: "Jared Shotts",
    role: "Executive Producer",
    bio: "Sports broadcaster since 2009. Voice of the Germantown Mavericks and Belhaven Blazers. The one who built this thing.",
    twitter: "@StateChampRadio",
    headshotFile: "jared-shotts-headshot.jpg",
    featured: true,
  },
  {
    id: "caleb-hamill",
    name: "Caleb Hamill",
    role: "Play-by-Play",
    bio: "Covering Mississippi high school sports since 2015. Voice of SuperTalk Laurel football and William Carey University. Mississippi State fill-in.",
    twitter: "@calebhamill1",
    headshotFile: "caleb-hamill-headshot.jpg",
  },
  {
    id: "jake-wimberly",
    name: "Jake Wimberly",
    role: "Host, The Drive",
    bio: "Hosts 'The Drive' on WRKS ESPN Radio 105.9. Been calling Brandon Bulldogs games for over 15 years.",
    twitter: "@Jakewim",
    headshotFile: "jake-wimberly-headshot.jpg",
  },
  {
    id: "breck-riley",
    name: "Breck Riley",
    role: "Play-by-Play",
    bio: "2021-22 Mississippi Association of Broadcasters Radio Personality of the Year. Voice of the Kosciusko Whippets and Holmes Community College Bulldogs.",
    twitter: "@BreckRiley",
    headshotFile: "breck-riley-headshot.jpg",
  },
  {
    id: "brandon-davis",
    name: "Brandon Davis",
    role: "Play-by-Play",
    bio: "Voice of the Warren Central Vikings. Broadcasting Mississippi sports since 2015.",
    twitter: "@WC_PACowboy",
    headshotFile: "brandon-davis-headshot.jpg",
  },
  {
    id: "bryan-eubank",
    name: "Bryan Eubank",
    role: "Play-by-Play / SID",
    bio: "Sports Information Director and voice of the Jackson Academy Raiders. The inaugural voice of the Mississippi Braves from 2005 to 2007.",
    twitter: "@voiceofja",
    headshotFile: "bryan-eubank-headshot.jpg",
  },
  {
    id: "cliff-barker",
    name: "Cliff Barker",
    role: "Play-by-Play / Color",
    bio: "Play-by-play voice and color analyst. Covers the Tri County Rebels and serves as color analyst for Holmes Community College Football.",
    twitter: "@cliftonbarker52",
    headshotFile: "cliff-barker-headshot.jpg",
  },
  {
    id: "matt-caldwell",
    name: "Matt Caldwell",
    role: "Color Analyst",
    bio: "Former Mississippi State offensive lineman (1991-95). Former head coach at George County, Taylorsville, and North Forrest. Currently Athletic Director at Oak Hill Academy.",
    twitter: "@WMCaldwell70",
    headshotFile: "matt-caldwell-headshot.jpg",
  },
];
