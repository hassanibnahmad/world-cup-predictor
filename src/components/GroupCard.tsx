import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import type { Group, Team } from "@/data/groups";
import SortableTeam from "./SortableTeam";

interface GroupCardProps {
  group: Group;
  onReorder: (letter: string, teams: Team[]) => void;
  index: number;
}

const GroupCard = ({ group, onReorder, index }: GroupCardProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = group.teams.findIndex((t) => t.id === active.id);
    const newIndex = group.teams.findIndex((t) => t.id === over.id);
    onReorder(group.letter, arrayMove(group.teams, oldIndex, newIndex));
  };

  return (
    <div
      className="glass-strong p-4 hover-glow transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-base gradient-text">{group.name}</h3>
        <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-muted/50">
          {group.letter}
        </span>
      </div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={group.teams.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          <div className="flex flex-col gap-2">
            {group.teams.map((team, i) => (
              <SortableTeam key={team.id} team={team} position={i} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default GroupCard;
