import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import type { Team } from "@/data/groups";

interface SortableTeamProps {
  team: Team;
  position: number;
}

const SortableTeam = ({ team, position }: SortableTeamProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: team.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const isQualified = position <= 1;
  const isThird = position === 2;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-grab active:cursor-grabbing
        ${isDragging ? "drag-active z-50 glass-strong" : "glass hover-glow"}
        ${isQualified ? "qualified-glow" : isThird ? "third-place-glow" : "border-l-4 border-l-transparent"}
      `}
      {...attributes}
      {...listeners}
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
      <span className="text-xl">{team.flag}</span>
      <span className="font-medium text-sm flex-1">{team.name}</span>
      <GripVertical className="h-4 w-4 text-muted-foreground/50" />
    </div>
  );
};

export default SortableTeam;
