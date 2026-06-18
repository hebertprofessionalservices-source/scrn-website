export type SponsorTier = "diamond" | "platinum" | "gold";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logoFile?: string;
  website?: string;
}

export const sponsors: Sponsor[] = [
  // Diamond
  { id: "farm-bureau", name: "Farm Bureau", tier: "diamond", logoFile: "farmBureau-logo.png", website: "https://msfbins.com/" },
  { id: "ms-sports-medicine", name: "MS Sports Medicine", tier: "diamond", logoFile: "mississippiSportsMedicine-logo.png", website: "https://mississippisportsmedicine.com/" },
  { id: "environment-masters", name: "Environment Masters", tier: "diamond", logoFile: "environmentMasters-logo.png", website: "https://environmentmasters.com/" },
  { id: "wendys", name: "Wendy's", tier: "diamond", logoFile: "wendys-logo.png", website: "https://wendys.com" },

  // Platinum
  { id: "trustmark", name: "Trustmark", tier: "platinum", logoFile: "trustmark-logo.png", website: "https://trustmark.com/" },
  { id: "atmos-energy", name: "Atmos Energy", tier: "platinum", logoFile: "atmosEnergy-logo.png", website: "https://atmosenergy.com/" },
  { id: "apac-crh", name: "APAC CRH", tier: "platinum", logoFile: "apac-logo.png", website: "https://apac-ms.com/" },
  { id: "c-spire", name: "C Spire", tier: "platinum", logoFile: "cspire-horizontal-logo.png", website: "https://cspire.com/" },
  { id: "william-carey", name: "William Carey University", tier: "platinum", logoFile: "williamCareyUniversity-logo.png", website: "https://wmcarey.edu/" },
  { id: "cherokee-brick", name: "Cherokee Brick", tier: "platinum", logoFile: "cherokeeBrick-logo-white.png", website: "https://cherokeebrick.com/" },
  { id: "t3", name: "T3 Global Projects", tier: "platinum", logoFile: "t3-logo.png", website: "https://t3globalprojects.com/" },
  { id: "hps", name: "Hebert Professional Services", tier: "platinum", logoFile: "hps-logo.png", website: "https://hebertps.com/" },

  // Gold
  { id: "ms-army-national-guard", name: "Mississippi Army National Guard", tier: "gold", logoFile: "msArmyNationalGuard-logo.png", website: "https://nationalguard.com/mississippi" },
  { id: "air-national-guard", name: "Air National Guard", tier: "gold", logoFile: "airNationalGuard-logo.png", website: "https://www.airforce.com/" },
  { id: "farm-families", name: "Farm Families of MS", tier: "gold", logoFile: "farmFamiliesOfMississippi-logo.png", website: "https://farmfamiliesms.org/" },
  { id: "pinestraw-america", name: "Pinestraw America", tier: "gold", logoFile: "pinestrawAmerica-logo.png", website: "https://pinestrawamerica.com/" },
  { id: "buffalo-wild-wings", name: "Buffalo Wild Wings", tier: "gold", logoFile: "buffaloWildWings-logo.png", website: "https://buffalowildwings.com/" },
  { id: "ms-blood-services", name: "Mississippi Blood Services", tier: "gold", logoFile: "mississippiBloodServices-logo.png", website: "https://msblood.com/" },
  { id: "genuine-ms", name: "Genuine MS", tier: "gold", logoFile: "genuineMS-logo.png", website: "https://genuinems.com/" },
];

export const diamondSponsors = sponsors.filter((s) => s.tier === "diamond");
export const platinumSponsors = sponsors.filter((s) => s.tier === "platinum");
export const goldSponsors = sponsors.filter((s) => s.tier === "gold");
