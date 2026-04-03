import type { Group, Team } from "@/data/groups";
import SortableTeam from "./SortableTeam";

interface GroupCardProps {
  group: Group;
  onReorder: (letter: string, teams: Team[]) => void;
  index: number;
}

const GroupCard = ({ group, onReorder, index }: GroupCardProps) => {
  const setTeamPosition = (teamId: string, targetIndex: number) => {
    const oldIndex = group.teams.findIndex((team) => team.id === teamId);
    if (oldIndex === -1 || oldIndex === targetIndex) return;

    const nextTeams = [...group.teams];
    const [team] = nextTeams.splice(oldIndex, 1);
    nextTeams.splice(targetIndex, 0, team);
    onReorder(group.letter, nextTeams);
  };

  return (
    <div
      className="glass-strong p-4 hover-glow transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-base gradient-text">{group.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted/50">
            {group.letter}
          </span>
          
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {group.teams.map((team, i) => (
          <SortableTeam
            key={team.id}
            team={team}
            position={i}
            totalTeams={group.teams.length}
            onSetPosition={(targetIndex) => setTeamPosition(team.id, targetIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupCard;
