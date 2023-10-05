import { PriorityType } from "./data";
import { useTasksContext } from "../context/task.context";

type ChangePriorityType = {
  id: number;
  p: PriorityType;
  action: "change" | "delete";
};

export const useDraggable = () => {
  const { tasks, setTasks, setIsDragging, isDragging, taskId, setTaskId } =
    useTasksContext();

  const filterCardsByPriority = (priority: PriorityType) => {
    return tasks.filter((c) => c.priority === priority);
  };

  const handleChangePriority = ({ id, p, action }: ChangePriorityType) => {
    const card = tasks.find((c) => c.id === id);
    const cardsFiltered = tasks.filter((c) => c.id !== id);

    if (card) {
      card.priority = p;
      action === "change"
        ? setTasks([...cardsFiltered, card])
        : setTasks([...cardsFiltered]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, p: PriorityType) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("text");

    setTaskId(cardId);
    handleChangePriority({ id: +cardId, p, action: "change" });
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) =>
    e.preventDefault();

  const handleDragEnd = () => {
    setIsDragging(false);

    handleChangePriority({ id: +taskId, p: "Low", action: "delete" });
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("text", `${id}`);

    setTaskId(`${id}`);
    setIsDragging(true);
  };
  return {
    filterCardsByPriority,
    handleDrop,
    handleDragStart,
    handleDragOver,
    isDragging,
    handleDragEnd,
  };
};
