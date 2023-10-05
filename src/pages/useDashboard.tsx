import { cards } from "./data";
import { PriorityType } from "./data";

export const useDashboard = () => {
  const filterCardsByPriority = (priority: PriorityType) => {
    return cards.filter((c) => c.priority === priority);
  };
  return {
    filterCardsByPriority,
    priorities: [...new Set(cards.map((c) => c.priority))],
  };
};
