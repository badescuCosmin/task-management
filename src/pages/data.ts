type CardType = {
  id: number;
  title: string;
  description: string;
  priority: PriorityType;
};

export type PriorityType = "Low" | "Medium" | "High";

export const cards = [
  {
    id: 1,
    title: "Card 1",
    description: "do some work",
    priority: "Low",
  },
  {
    id: 2,
    title: "Card 2",
    description: "do some work 2",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Card 3",
    description: "do some work 3",
    priority: "High",
  },
  {
    id: 4,
    title: "Card 4",
    description: "do some work 4",
    priority: "Low",
  },
  {
    id: 4,
    title: "Card 5",
    description: "do some work 5",
    priority: "High",
  },
] as CardType[];
