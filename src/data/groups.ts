export interface Team {
  id: string;
  name: string;
  countryCode: string;
}

export interface Group {
  name: string;
  letter: string;
  teams: Team[];
}

const flagEmoji: Record<string, string> = {
  "Mexico": "🇲🇽", "South Korea": "🇰🇷", "South Africa": "🇿🇦", "Czech Republic": "🇨🇿",
  "Canada": "🇨🇦", "Switzerland": "🇨🇭", "Qatar": "🇶🇦", "Bosnia": "🇧🇦",
  "Brazil": "🇧🇷", "Morocco": "🇲🇦", "Haiti": "🇭🇹", "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "USA": "🇺🇸", "Paraguay": "🇵🇾", "Australia": "🇦🇺", "Turkey": "🇹🇷",
  "Germany": "🇩🇪", "Curaçao": "🇨🇼", "Ivory Coast": "🇨🇮", "Ecuador": "🇪🇨",
  "Netherlands": "🇳🇱", "Japan": "🇯🇵", "Sweden": "🇸🇪", "Tunisia": "🇹🇳",
  "Belgium": "🇧🇪", "Egypt": "🇪🇬", "Iran": "🇮🇷", "New Zealand": "🇳🇿",
  "Spain": "🇪🇸", "Uruguay": "🇺🇾", "Saudi Arabia": "🇸🇦", "Cape Verde": "🇨🇻",
  "France": "🇫🇷", "Senegal": "🇸🇳", "Norway": "🇳🇴", "Iraq": "🇮🇶",
  "Argentina": "🇦🇷", "Algeria": "🇩🇿", "Austria": "🇦🇹", "Jordan": "🇯🇴",
  "Portugal": "🇵🇹", "Colombia": "🇨🇴", "Uzbekistan": "🇺🇿", "DR Congo": "🇨🇩",
  "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Croatia": "🇭🇷", "Ghana": "🇬🇭", "Panama": "🇵🇦",
};

const groupsRaw = [
  { letter: "A", teams: ["Mexico", "South Korea", "South Africa", "Czech Republic"] },
  { letter: "B", teams: ["Canada", "Switzerland", "Qatar", "Bosnia"] },
  { letter: "C", teams: ["Brazil", "Morocco", "Haiti", "Scotland"] },
  { letter: "D", teams: ["USA", "Paraguay", "Australia", "Turkey"] },
  { letter: "E", teams: ["Germany", "Curaçao", "Ivory Coast", "Ecuador"] },
  { letter: "F", teams: ["Netherlands", "Japan", "Sweden", "Tunisia"] },
  { letter: "G", teams: ["Belgium", "Egypt", "Iran", "New Zealand"] },
  { letter: "H", teams: ["Spain", "Uruguay", "Saudi Arabia", "Cape Verde"] },
  { letter: "I", teams: ["France", "Senegal", "Norway", "Iraq"] },
  { letter: "J", teams: ["Argentina", "Algeria", "Austria", "Jordan"] },
  { letter: "K", teams: ["Portugal", "Colombia", "Uzbekistan", "DR Congo"] },
  { letter: "L", teams: ["England", "Croatia", "Ghana", "Panama"] },
];

const teamCountryCodes: Record<string, string> = {
  "Mexico": "MX", "South Korea": "KR", "South Africa": "ZA", "Czech Republic": "CZ",
  "Canada": "CA", "Switzerland": "CH", "Qatar": "QA", "Bosnia": "BA",
  "Brazil": "BR", "Morocco": "MA", "Haiti": "HT", "Scotland": "GB",
  "USA": "US", "Paraguay": "PY", "Australia": "AU", "Turkey": "TR",
  "Germany": "DE", "Curaçao": "CW", "Ivory Coast": "CI", "Ecuador": "EC",
  "Netherlands": "NL", "Japan": "JP", "Sweden": "SE", "Tunisia": "TN",
  "Belgium": "BE", "Egypt": "EG", "Iran": "IR", "New Zealand": "NZ",
  "Spain": "ES", "Uruguay": "UY", "Saudi Arabia": "SA", "Cape Verde": "CV",
  "France": "FR", "Senegal": "SN", "Norway": "NO", "Iraq": "IQ",
  "Argentina": "AR", "Algeria": "DZ", "Austria": "AT", "Jordan": "JO",
  "Portugal": "PT", "Colombia": "CO", "Uzbekistan": "UZ", "DR Congo": "CD",
  "England": "GB", "Croatia": "HR", "Ghana": "GH", "Panama": "PA",
};

export const initialGroups: Group[] = groupsRaw.map((g) => ({
  name: `Group ${g.letter}`,
  letter: g.letter,
  teams: g.teams.map((name) => ({
    id: `${g.letter}-${name}`,
    name,
    countryCode: teamCountryCodes[name] || "UN",
  })),
}));
