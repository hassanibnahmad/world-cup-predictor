import type { SyntheticEvent } from "react";
import type { Team } from "@/data/groups";

interface SortableTeamProps {
  team: Team;
  position: number;
  totalTeams: number;
  onSetPosition: (targetIndex: number) => void;
}

const SortableTeam = ({ team, position, totalTeams, onSetPosition }: SortableTeamProps) => {
  const isQualified = position <= 1;
  const isThird = position === 2;
  const rankOptions = Array.from({ length: totalTeams }, (_, index) => index);
  const flagsApiUrl = `https://flagsapi.com/${team.countryCode}/flat/64.png`;
  const fallbackFlagUrl = `https://flagcdn.com/w40/${team.countryCode.toLowerCase()}.png`;

  const handleFlagError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const img = event.currentTarget;
    if (img.dataset.fallbackApplied === "1") return;
    img.dataset.fallbackApplied = "1";
    img.src = fallbackFlagUrl;
  };

  return (
    <div
      className={`
        flex items-center gap-3 p-3 rounded-lg transition-all duration-200
        glass hover-glow
        ${isQualified ? "qualified-glow" : isThird ? "third-place-glow" : "border-l-4 border-l-transparent"}
      `}
    >
      <span
        className={`text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shrink-0 ${
          isQualified
            ? "bg-primary/20 text-primary"
            : isThird
              ? "bg-accent/20 text-accent"
              : "bg-muted text-muted-foreground"
        }`}
      >
        {position + 1}
      </span>
      <img
        src={flagsApiUrl}
        alt={`${team.name} flag`}
        loading="lazy"
        onError={handleFlagError}
        className="h-5 w-8 rounded-sm border border-white/20 object-cover"
      />
      <span className="font-medium text-sm flex-1">{team.name}</span>

      <div className="flex items-center gap-1">
        {rankOptions.map((targetIndex) => {
          const isActive = targetIndex === position;
          return (
            <button
              key={`${team.id}-${targetIndex}`}
              type="button"
              onClick={() => onSetPosition(targetIndex)}
              aria-label={`Set ${team.name} to position ${targetIndex + 1}`}
              className={`h-7 w-7 rounded-full text-xs font-bold transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {targetIndex + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SortableTeam;
