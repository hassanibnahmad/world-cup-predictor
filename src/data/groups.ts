export interface Team {
  id: string;
  name: string;
  flag: string;
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

export const initialGroups: Group[] = groupsRaw.map((g) => ({
  name: `Group ${g.letter}`,
  letter: g.letter,
  teams: g.teams.map((name) => ({
    id: `${g.letter}-${name}`,
    name,
    flag: flagEmoji[name] || "🏳️",
  })),
}));
